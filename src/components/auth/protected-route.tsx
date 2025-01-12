'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) {
          router.push('/auth/login')
          return
        }
        setLoading(false)
      } catch (error) {
        console.error('Auth error:', error)
        router.push('/auth/login')
      }
    }

    checkAuth()
  }, [router])

  if (loading) {
    return <div>Loading...</div>
  }

  return <>{children}</>
} 