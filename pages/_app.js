import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabase'

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null)
      
      if (event === 'SIGNED_IN') {
        router.push('/dashboard')
      } else if (event === 'SIGNED_OUT') {
        router.push('/auth/login')
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  useEffect(() => {
    if (!loading) {
      const protectedRoutes = ['/dashboard', '/clients', '/projects']
      const isProtectedRoute = protectedRoutes.some(route => router.pathname.startsWith(route))
      
      if (isProtectedRoute && !user) {
        router.push('/auth/login')
      } else if (router.pathname === '/' && user) {
        router.push('/dashboard')
      } else if (router.pathname === '/' && !user) {
        router.push('/auth/login')
      }
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-4">
            🚗 BenchmarkAI
          </div>
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <div className="text-gray-400 mt-4">Chargement...</div>
        </div>
      </div>
    )
  }

  return <Component {...pageProps} user={user} />
}
