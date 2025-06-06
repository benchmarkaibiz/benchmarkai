import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabase'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        router.push('/dashboard')
      } else {
        router.push('/auth/login')
      }
    }

    checkUser()
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl font-bold gradient-text mb-8 animate-pulse">
          🚗 BenchmarkAI
        </div>
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="text-gray-400">Initialisation...</div>
      </div>
    </div>
  )
}
