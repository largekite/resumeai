import { NextRequest } from 'next/server';
import { stripe } from '@/lib/stripe';
import { auth } from '@clerk/nextjs/server';

/**
 * POST /api/checkout
 * Creates a Stripe Checkout session for upgrading to a paid plan.
 * Body: { priceId: string }
 */
export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const { priceId } = await req.json();
  if (!priceId) return Response.json({ error: 'priceId is required' }, { status: 400 });

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing?canceled=true`,
    metadata: { userId },
  });

  return Response.json({ url: session.url });
}
