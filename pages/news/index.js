import { useState } from 'react'
import Layout from '../../components/Layout'

export default function News({ user }) {
  const [filter, setFilter] = useState('all')
  const [news] = useState([
    {
      id: 1,
      title: "Stellantis investit 100M€ dans l'usine de Mirafiori pour accélérer la production électrique",
      company: "Stellantis",
      companyLogo: "ST",
      type: "Client • Investissement",
      time: "Il y a 2 heures",
      summary: "Le constructeur automobile franco-italien renforce sa stratégie électrique avec un nouvel investissement majeur. L'usine de Turin sera équipée de nouvelles lignes de production pour les véhicules électriques de la plateforme STLA Large.",
      tags: ["urgent", "opportunity", "electric"],
      urgent: true
    },
    {
      id: 2,
      title: "Adient remporte un contrat de 200M€ avec BMW pour les futurs sièges de la Série 7 électrique",
      company: "Adient (Concurrent)",
      companyLogo: "AD",
      type: "Concurrent • Nouveau contrat",
      time: "Il y a 4 heures",
      summary: "L'équipementier américain Adient a décroché un important contrat avec BMW pour fournir l'ensemble des sièges de la future génération de Série 7 électrique. Le contrat porte sur une période de 5 ans.",
      tags: ["competition", "premium", "electric"],
      urgent: false
    },
    {
      id: 3,
      title: "BMW dévoile l'iX3 de nouvelle génération avec un intérieur révolutionnaire",
      company: "BMW Group",
      companyLogo: "BMW",
      type: "Client • Nouveau modèle",
      time: "Il y a 6 heures",
      summary: "Le constructeur bavarois présente la nouvelle génération de son SUV électrique iX3 avec un habitacle entièrement repensé. Les nouveaux sièges intègrent des matériaux durables et des fonctionnalités de massage avancées.",
      tags: ["opportunity", "premium", "innovation"],
      urgent: false
    },
    {
      id: 4,
      title: "Renault publie ses spécifications techniques pour la nouvelle Clio VI",
      company: "Renault Group", 
      companyLogo: "RN",
      type: "Client • Document officiel",
      time: "Il y a 8 heures",
      summary: "Le constructeur français a publié un document technique détaillé concernant les spécifications de la future Clio VI. Le document révèle une approche modulaire pour les sièges avec des variantes thermiques, hybrides et 100% électriques.",
      tags: ["specs", "opportunity", "volume"],
      urgent: false
    },
    {
      id: 5,
      title: "Brose dépose un brevet révolutionnaire pour des sièges auto-ajustables par IA",
      company: "Brose (Concurrent)",
      companyLogo: "BR",
      type: "Concurrent • Innovation",
      time: "Il y a 1 jour",
      summary: "L'équipementier allemand Brose a déposé un brevet pour une technologie de sièges intelligents qui s'ajustent automatiquement selon la morphologie du conducteur grâce à l'intelligence artificielle.",
      tags: ["patent", "ai", "innovation"],
      urgent: false
    }
  ])

  const getTagStyle = (tag) => {
    const styles = {
      urgent: "bg-red-500/20 text-red-400",
      opportunity: "bg-green-500/20 text-green-400", 
      competition: "bg-orange-500/20 text-orange-400",
      innovation: "bg-blue-500/20 text-blue-400",
      premium: "bg-purple-500/20 text-purple-400",
      electric: "bg-cyan-500/20 text-cyan-400",
      specs: "bg-yellow-500/20 text-yellow-400",
      patent: "bg-pink-500/20 text-pink-400",
      ai: "bg-indigo-500/20 text-indigo-400",
      volume: "bg-gray-500/20 text-gray-400"
    }
    return styles[tag] || "bg-gray-500/20 text-gray-400"
  }

  const saveNews = (newsId) => {
    alert(`Actualité ${newsId} sauvegardée !`)
  }

  const shareNews = (newsId) => {
    alert(`Actualité ${newsId} partagée avec l'équipe !`)
  }

  const getContacts = (company) => {
    alert(`Ouverture des contacts pour ${company}`)
  }

  return (
    <Layout user={user}>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Daily News</h1>
          <p className="text-gray-400">Restez informé des dernières actualités de vos clients et concurrents</p>
        </div>

        {/* Breaking News Banner */}
        <div className="bg-gradient-to-r from-red-500/20 to-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center gap-4">
          <div className="text-2xl animate-pulse">🚨</div>
          <div className="text-red-400 font-medium">
            URGENT: Stellantis annonce un investissement de 100M€ dans l'usine de Mirafiori pour la production électrique
          </div>
        </div>

        {/* Filters */}
        <div className="card">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-4 items-center">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Clients</label>
                <select 
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">Tous les clients</option>
                  <option value="followed">Clients suivis (26)</option>
                  <option value="favorites">Favoris (5)</option>
                  <option value="stellantis">Stellantis uniquement</option>
                  <option value="bmw">BMW uniquement</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Type</label>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm">Tous</button>
                  <button className="px-4 py-2 bg-white/10 text-gray-400 rounded-lg text-sm hover:bg-white/20">Clients</button>
                  <button className="px-4 py-2 bg-white/10 text-gray-400 rounded-lg text-sm hover:bg-white/20">Concurrents</button>
                  <button className="px-4 py-2 bg-white/10 text-gray-400 rounded-lg text-sm hover:bg-white/20">Urgent</button>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30">
                📑 Générer rapport
              </button>
              <button className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg text-sm hover:bg-white/20">
                📤 Exporter
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2">23</div>
            <div className="text-sm text-gray-400">Nouvelles actualités</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-green-400 mb-2">5</div>
            <div className="text-sm text-gray-400">Opportunités détectées</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-red-400 mb-2">3</div>
            <div className="text-sm text-gray-400">Alertes urgentes</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-purple-400 mb-2">12</div>
            <div className="text-sm text-gray-400">Nouveaux contacts</div>
          </div>
        </div>

        {/* News Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News Feed */}
          <div className="lg:col-span-2 space-y-6">
            {news.map((article) => (
              <div key={article.id} className="card hover:bg-white/10 transition-all">
                {/* News Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-sm font-bold">
                      {article.companyLogo}
                    </div>
                    <div>
                      <div className="font-medium text-white">{article.company}</div>
                      <div className="text-sm text-gray-400">{article.type}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{article.time}</div>
                </div>

                {/* News Content */}
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  {article.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {article.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs ${getTagStyle(tag)}`}
                    >
                      {tag === 'urgent' && '🔥'} 
                      {tag === 'opportunity' && '💎'}
                      {tag === 'competition' && '⚔️'}
                      {tag === 'innovation' && '🚀'}
                      {tag === 'premium' && '👑'}
                      {tag === 'electric' && '⚡'}
                      {tag === 'specs' && '📋'}
                      {tag === 'patent' && '⚖️'}
                      {tag === 'ai' && '🤖'}
                      {tag === 'volume' && '📊'}
                      {' ' + tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <button 
                      onClick={() => saveNews(article.id)}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                    >
                      <span>🔖</span> Sauvegarder
                    </button>
                    <button 
                      onClick={() => shareNews(article.id)}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                    >
                      <span>📤</span> Partager
                    </button>
                    <button 
                      onClick={() => getContacts(article.company)}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                    >
                      <span>👥</span> Contacts
                    </button>
                  </div>
                  <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30 transition-all">
                    Lire l'article →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4">🔥 Sujets tendance</h3>
              <div className="space-y-3">
                {[
                  { topic: "Électrification", mentions: 18, rank: 1 },
                  { topic: "Investissements usines", mentions: 12, rank: 2 },
                  { topic: "Nouveaux modèles", mentions: 9, rank: 3 },
                  { topic: "Brevets IA", mentions: 7, rank: 4 }
                ].map((item) => (
                  <div key={item.rank} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all cursor-pointer">
                    <div className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs font-bold">
                      {item.rank}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">{item.topic}</div>
                      <div className="text-xs text-gray-400">{item.mentions} mentions</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4">⚡ Actions rapides</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30 transition-all">
                  📑 Générer rapport quotidien
                </button>
                <button className="w-full px-4 py-3 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30 transition-all">
                  📤 Exporter actualités
                </button>
                <button className="w-full px-4 py-3 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30 transition-all">
                  🔔 Configurer alertes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
