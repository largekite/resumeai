import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/onboarding(.*)', '/dashboard(.*)', '/dashboard/resumes(.*)', '/dashboard/resumes/new(.*)', '/dashboard/resumes/[id](.*)', '/dashboard/resumes/[id]/match(.*)', '/dashboard/templates(.*)', '/dashboard/cover-letters(.*)', '/settings(.*)', '/billing(.*)']);

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
