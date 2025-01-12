import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const session = await supabase.auth.getSession()

  // Add specific route handling
  const path = req.nextUrl.pathname
  
  // Protect dashboard route
  if (path.startsWith('/dashboard')) {
    if (!session.data.session) {
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }
  }

  // Redirect logged-in users away from auth pages
  if (path.startsWith('/auth') && session.data.session) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return res
}

// Add specific routes to be handled by middleware
export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*']
} 