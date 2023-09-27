import { NextResponse, type NextRequest } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

  if (request.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL('/', request.url))
  }

}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico).*)', '/'
    ],
}