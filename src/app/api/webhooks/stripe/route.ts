import Stripe from 'stripe';
import { headers } from 'next/headers';
import { prisma } from '@/lib/db';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = await headers();
  const sig = headersList.get('stripe-signature');

  if (!sig) return new Response('Missing stripe-signature', { status: 400 });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    return new Response(`Webhook Error: ${err instanceof Error ? err.message : 'Unknown'}`, { status: 400 });
  }

  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription;

      // Update user subscription in database
      const customerId = typeof subscription.customer === 'string'
        ? subscription.customer
        : subscription.customer.id;
      await prisma.user.updateMany({
        where: { stripeCustomerId: customerId },
        data: {
          subscriptionStatus: subscription.status,
          subscriptionId: subscription.id,
          currentPeriodEnd: new Date(subscription.current_period_end * 1000),
        },
      });
      break;
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;

      const cancelledCustomerId = typeof subscription.customer === 'string'
        ? subscription.customer
        : subscription.customer.id;
      await prisma.user.updateMany({
        where: { stripeCustomerId: cancelledCustomerId },
        data: {
          subscriptionStatus: 'canceled',
          subscriptionId: null,
        },
      });
      break;
    }
    case 'invoice.payment_succeeded': {
      const invoice = event.data.object as Stripe.Invoice;
      console.log('Payment succeeded:', invoice.id, 'Amount:', invoice.amount_paid);
      break;
    }
    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice;
      console.error('Payment failed:', invoice.id, 'Customer:', invoice.customer);
      break;
    }
    default:
      console.log('Unhandled event type:', event.type);
  }

  return Response.json({ received: true });
}
