import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  try {
    const { data: { session }, error } = await supabase.auth.getSession()

    if (error) {
      console.error('Auth error:', error)
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    // For dashboard routes, require authentication
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
      if (!session) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
      }
    }

    // For auth routes, redirect to dashboard if already authenticated
    if (req.nextUrl.pathname.startsWith('/auth')) {
      if (session) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }
    }

    return res
  } catch (error) {
    console.error('Middleware error:', error)
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/auth/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ]
} 