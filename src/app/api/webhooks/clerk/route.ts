import { headers } from 'next/headers';
import { sendWelcomeEmail } from '@/lib/email';

/**
 * POST /api/webhooks/clerk
 * Handles Clerk webhook events (user.created → sends welcome email via Resend).
 * Set up the webhook in your Clerk dashboard → Webhooks → Add endpoint.
 */
export async function POST(req: Request) {
  const body = await req.json();
  const headersList = await headers();
  const eventType = headersList.get('svix-event-type') ?? body?.type;

  if (eventType === 'user.created') {
    const { email_addresses, first_name, last_name } = body.data ?? {};
    const email = email_addresses?.[0]?.email_address;
    const name = [first_name, last_name].filter(Boolean).join(' ') || 'there';

    if (email) {
      try {
        await sendWelcomeEmail(email, name);
        console.log('[clerk-webhook] Welcome email sent to', email);
      } catch (err) {
        console.error('[clerk-webhook] Failed to send welcome email:', err);
      }
    }
  }

  return Response.json({ received: true });
}
