export { auth as middleware } from "@/auth"

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    '/admin/:path*',
  ]
}
