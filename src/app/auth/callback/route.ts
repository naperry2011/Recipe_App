import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
      const supabase = createRouteHandlerClient({ cookies })
      await supabase.auth.exchangeCodeForSession(code)
    }

    // Add a fallback URL in case the original URL is invalid
    const redirectTo = requestUrl.origin + '/dashboard'
    return NextResponse.redirect(redirectTo)
  } catch (error) {
    console.error('Callback error:', error)
    // Fallback to home page if there's an error
    return NextResponse.redirect(new URL('/', request.url))
  }
} 