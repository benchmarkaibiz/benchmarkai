import { useState } from 'react'
import Layout from '../../components/Layout'

export default function Clients({ user }) {
  const [filter, setFilter] = useState('all')
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Stellantis",
      logo: "ST",
      sector: "Constructeur Automobile",
      country: "🇫🇷",
      projects: 5,
      sourcing: 2,
      contacts: 12,
      status: "urgent",
      favorite: true
    },
    {
      id: 2,
      name: "BMW Group",
      logo: "BMW",
      sector: "Constructeur Premium",
      country: "🇩🇪",
      projects: 3,
      sourcing: 1,
      contacts: 8,
      status: "normal",
      favorite: false
    },
    {
      id: 3,
      name: "Renault Group",
      logo: "RN",
      sector: "Constructeur Automobile",
      country: "🇫🇷",
      projects: 4,
      sourcing: 2,
      contacts: 9,
      status: "normal",
      favorite: false
    },
    {
      id: 4,
      name: "Audi AG",
      logo: "AU",
      sector: "Premium Luxury",
      country: "🇩🇪",
      projects: 2,
      sourcing: 0,
      contacts: 5,
      status: "watching",
      favorite: false
    }
  ])

  const toggleFavorite = (clientId) => {
    setClients(clients.map(client => 
      client.id === clientId ? { ...client, favorite: !client.favorite } : client
    ))
  }

  const getStatusBadge = (status) => {
    const badges = {
      urgent: "bg-red-500/20 text-red-400 border-red-500/30",
      normal: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      watching: "bg-green-500/20 text-green-400 border-green-500/30"
    }
    
    const labels = {
      urgent: "🔥 Urgent",
      normal: "📊 Actif", 
      watching: "👁️ Veille"
    }

    return (
      <span className={`px-3 py-1 rounded-full text-xs border ${badges[status]}`}>
        {labels[status]}
      </span>
    )
  }

  return (
    <Layout user={user}>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Clients suivis</h1>
            <p className="text-gray-400">Gérez votre portefeuille de clients OEMs</p>
          </div>
          <button className="button-primary">
            + Ajouter un client
          </button>
        </div>

        {/* Filters */}
        <div className="card">
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Région</label>
              <select 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">Toutes régions</option>
                <option value="france">France</option>
                <option value="germany">Allemagne</option>
                <option value="europe">Europe</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Secteur</label>
              <select className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white">
                <option>Tous secteurs</option>
                <option>Premium</option>
                <option>Volume</option>
                <option>Luxury</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Statut</label>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg text-sm">🔥 Urgent</button>
                <button className="px-4 py-2 bg-white/10 text-gray-400 rounded-lg text-sm">📊 Actif</button>
                <button className="px-4 py-2 bg-white/10 text-gray-400 rounded-lg text-sm">👁️ Veille</button>
              </div>
            </div>
          </div>
        </div>

        {/* Clients List */}
        <div className="card">
          <div className="overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-8 gap-4 p-4 bg-white/5 text-sm font-medium text-gray-400 border-b border-white/10">
              <div></div>
              <div>Logo</div>
              <div>Entreprise</div>
              <div>Segment</div>
              <div>Projets</div>
              <div>Sourcing</div>
              <div>Contacts</div>
              <div>Actions</div>
            </div>

            {/* Table Rows */}
            {clients.map((client) => (
              <div 
                key={client.id} 
                className={`grid grid-cols-8 gap-4 p-4 border-b border-white/5 hover:bg-white/5 transition-all cursor-pointer ${
                  client.favorite ? 'bg-yellow-500/5 border-l-4 border-l-yellow-500' : ''
                }`}
              >
                <div className="flex items-center">
                  <button 
                    onClick={() => toggleFavorite(client.id)}
                    className="text-lg hover:scale-110 transition-transform"
                  >
                    {client.favorite ? '⭐' : '☆'}
                  </button>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-sm font-bold">
                    {client.logo}
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div>
                    <div className="font-medium text-white flex items-center gap-2">
                      <span>{client.country}</span>
                      {client.name}
                    </div>
                    <div className="text-sm text-gray-400">{client.sector}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  {getStatusBadge(client.status)}
                </div>
                
                <div className="flex items-center text-center">
                  <div>
                    <div className="font-semibold text-white">{client.projects}</div>
                    <div className="text-xs text-gray-400">identifiés</div>
                  </div>
                </div>
                
                <div className="flex items-center text-center">
                  <div>
                    <div className="font-semibold text-white">{client.sourcing}</div>
                    <div className="text-xs text-gray-400">en cours</div>
                  </div>
                </div>
                
                <div className="flex items-center text-center">
                  <div>
                    <div className="font-semibold text-white">{client.contacts}</div>
                    <div className="text-xs text-gray-400">disponibles</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30 transition-all">
                    Voir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">💡 Clients potentiels suggérés</h2>
          <p className="text-gray-400 mb-6">Opportunités identifiées par notre IA</p>
          
          <div className="space-y-4">
            {[
              { name: "Aixam-Mega", logo: "AX", sector: "Constructeur Micro-Cars", opportunity: "Niche prometteuse" },
              { name: "Ligier Group", logo: "LG", sector: "Véhicules Sans Permis", opportunity: "Marché croissant" },
              { name: "Piaggio Commercial", logo: "PI", sector: "Véhicules Commerciaux", opportunity: "Transition électrique" }
            ].map((suggestion, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-dashed border-white/20 hover:bg-green-500/5 hover:border-green-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-sm font-bold">
                    {suggestion.logo}
                  </div>
                  <div>
                    <div className="font-medium text-white">{suggestion.name}</div>
                    <div className="text-sm text-gray-400">{suggestion.sector}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                    {suggestion.opportunity}
                  </span>
                  <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm hover:bg-green-500/30 transition-all">
                    + Ajouter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
