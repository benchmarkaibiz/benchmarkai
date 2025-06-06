import { useState } from 'react'
import { useRouter } from 'next/router'
import { auth } from '../lib/supabase'

export default function Layout({ children, user }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    await auth.signOut()
    router.push('/auth/login')
  }

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊', current: router.pathname === '/dashboard' },
    { name: 'Clients', href: '/clients', icon: '🏢', current: router.pathname.startsWith('/clients') },
    { name: 'Projets', href: '/projects', icon: '🚀', current: router.pathname.startsWith('/projects') },
    { name: 'Actualités', href: '/news', icon: '📰', current: router.pathname.startsWith('/news') },
    { name: 'Analytics', href: '/analytics', icon: '📈', current: router.pathname.startsWith('/analytics') },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-900">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-black/20 backdrop-blur-xl border-r border-white/10">
        <div className="flex h-16 items-center px-6">
          <div className="text-2xl font-bold gradient-text flex items-center gap-2">
            <span>🚗</span>
            BenchmarkAI
          </div>
        </div>
        
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                
                  href={item.href}
                  className={item.current ? 'nav-item-active' : 'nav-item-inactive'}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* User section */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="glass-effect rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                {user?.email?.[0]?.toUpperCase() || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white truncate">
                  {user?.user_metadata?.firstName || 'Utilisateur'}
                </div>
                <div className="text-xs text-gray-400 truncate">
                  {user?.email}
                </div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
            >
              <span className="mr-2">🚪</span>
              Déconnexion
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <main className="py-8 px-8">
          {children}
        </main>
      </div>
    </div>
  )
}
