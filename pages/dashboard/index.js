import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { auth } from '../../lib/supabase'

export default function Dashboard({ user }) {
  const router = useRouter()
  const [stats, setStats] = useState({
    totalClients: 26,
    totalProjects: 18,
    urgentRFQ: 5,
    totalBudget: '428M'
  })

  const clients = [
    {
      id: 1,
      name: 'Stellantis',
      logo: 'ST',
      sector: 'Constructeur Automobile',
      flag: '🇫🇷',
      projects: 5,
      sourcing: 2,
      contacts: 14,
      status: 'nouveau',
      bgColor: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      name: 'BMW Group',
      logo: 'BMW',
      sector: 'Constructeur Premium',
      flag: '🇩🇪',
      projects: 3,
      sourcing: 1,
      contacts: 8,
      status: 'premium',
      bgColor: 'from-cyan-400 to-blue-500'
    },
    {
      id: 3,
      name: 'Renault Group',
      logo: 'RN',
      sector: 'Constructeur Automobile',
      flag: '🇫🇷',
      projects: 4,
      sourcing: 2,
      contacts: 9,
      status: 'volume',
      bgColor: 'from-pink-400 to-red-500'
    }
  ]

  const handleSignOut = async () => {
    const { error } = await auth.signOut()
    if (!error) {
      router.push('/auth/login')
    }
  }

  const statusBadges = {
    nouveau: 'bg-green-500/20 text-green-400 border-green-500/30',
    premium: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    volume: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-900 text-white">
      {/* Header */}
      <header className="glass-effect border-b border-white/10 p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold gradient-text flex items-center gap-3">
              <span className="text-2xl">🚗</span>
              BenchmarkAI
            </h1>
            <p className="text-gray-400 mt-1">
              Bienvenue {user?.user_metadata?.firstName || user?.email} 
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-3 glass-effect rounded-xl hover:bg-white/10 transition-all">
              🔔
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                7
              </span>
            </button>
            
            <div className="flex items-center gap-3 glass-effect px-4 py-2 rounded-xl">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center font-bold text-sm">
                {user?.user_metadata?.firstName?.[0] || user?.email?.[0]?.toUpperCase()}
              </div>
              <span className="font-medium">{user?.user_metadata?.firstName || 'Utilisateur'}</span>
              <button 
                onClick={handleSignOut}
                className="text-gray-400 hover:text-red-400 transition-colors ml-2"
              >
                🚪
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card text-center">
            <div className="text-sm text-gray-400 mb-2">Clients suivis</div>
            <div className="text-3xl font-bold text-blue-400 mb-1">{stats.totalClients}</div>
            <div className="text-xs text-blue-400">+3 ce mois</div>
          </div>
          
          <div className="card text-center">
            <div className="text-sm text-gray-400 mb-2">Projets actifs</div>
            <div className="text-3xl font-bold text-green-400 mb-1">{stats.totalProjects}</div>
            <div className="text-xs text-green-400">+2 nouveaux</div>
          </div>
          
          <div className="card text-center">
            <div className="text-sm text-gray-400 mb-2">RFQ urgents</div>
            <div className="text-3xl font-bold text-red-400 mb-1">{stats.urgentRFQ}</div>
            <div className="text-xs text-red-400">&lt; 6 mois</div>
          </div>
          
          <div className="card text-center">
            <div className="text-sm text-gray-400 mb-2">Budget total</div>
            <div className="text-3xl font-bold text-purple-400 mb-1">€{stats.totalBudget}</div>
            <div className="text-xs text-purple-400">18 projets</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Clients List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span>⭐</span>
                Clients Suivis
              </h2>
              <button className="button-primary text-sm py-2 px-4">
                + Ajouter Client
              </button>
            </div>

            <div className="space-y-4">
              {clients.map((client) => (
                <div key={client.id} className="card hover:scale-[1.02] cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${client.bgColor} rounded-xl flex items-center justify-center font-bold text-sm`}>
                        {client.logo}
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-lg">{client.name}</span>
                          <span className="text-lg">{client.flag}</span>
                        </div>
                        <div className="text-gray-400 text-sm">{client.sector}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="font-bold text-blue-400">{client.projects}</div>
                        <div className="text-xs text-gray-400">Projets</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="font-bold text-green-400">{client.sourcing}</div>
                        <div className="text-xs text-gray-400">Sourcing</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="font-bold text-purple-400">{client.contacts}</div>
                        <div className="text-xs text-gray-400">Contacts</div>
                      </div>

                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${statusBadges[client.status]}`}>
                        {client.status === 'nouveau' && 'Nouveau projet'}
                        {client.status === 'premium' && 'Premium'}
                        {client.status === 'volume' && 'Volume'}
                      </div>

                      <button className="button-primary text-sm py-2 px-4">
                        Voir →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>⚡</span>
                Actions rapides
              </h3>
              
              <div className="space-y-3">
                <button className="w-full text-left p-3 glass-effect rounded-lg hover:bg-white/10 transition-all flex items-center gap-3">
                  <span>🚀</span>
                  <span>Nouveau projet RFQ</span>
                </button>
                
                <button className="w-full text-left p-3 glass-effect rounded-lg hover:bg-white/10 transition-all flex items-center gap-3">
                  <span>👥</span>
                  <span>Rechercher contacts</span>
                </button>
                
                <button className="w-full text-left p-3 glass-effect rounded-lg hover:bg-white/10 transition-all flex items-center gap-3">
                  <span>📊</span>
                  <span>Rapport mensuel</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📰</span>
                Actualités récentes
              </h3>
              
              <div className="space-y-3">
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="text-sm font-medium text-red-400 mb-1">Stellantis</div>
                  <div className="text-xs text-gray-300">Investissement 100M€ usine Mirafiori</div>
                  <div className="text-xs text-gray-500 mt-1">Il y a 2h</div>
                </div>
                
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="text-sm font-medium text-blue-400 mb-1">BMW</div>
                  <div className="text-xs text-gray-300">Nouveau projet iNext Platform confirmé</div>
                  <div className="text-xs text-gray-500 mt-1">Il y a 4h</div>
                </div>
                
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="text-sm font-medium text-green-400 mb-1">Système</div>
                  <div className="text-xs text-gray-300">3 nouveaux contacts détectés</div>
                  <div className="text-xs text-gray-500 mt-1">Il y a 6h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
