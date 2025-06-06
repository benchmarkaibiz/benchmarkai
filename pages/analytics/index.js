import { useState } from 'react'
import Layout from '../../components/Layout'

export default function Analytics({ user }) {
  const [timeRange, setTimeRange] = useState('3months')
  const [analysisType, setAnalysisType] = useState('overview')

  return (
    <Layout user={user}>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics & Insights</h1>
          <p className="text-gray-400">Analyses détaillées de votre performance commerciale et du marché</p>
        </div>

        {/* Controls */}
        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Période d'analyse</label>
              <select 
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="1month">1 mois</option>
                <option value="3months">3 mois</option>
                <option value="6months">6 mois</option>
                <option value="1year">1 an</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Type d'analyse</label>
              <select 
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
                value={analysisType}
                onChange={(e) => setAnalysisType(e.target.value)}
              >
                <option value="overview">Vue d'ensemble</option>
                <option value="clients">Performance clients</option>
                <option value="projects">Analyse projets</option>
                <option value="competition">Intelligence concurrentielle</option>
              </select>
            </div>

            <div className="flex items-end">
              <button className="w-full button-primary">
                🔄 Mettre à jour l'analyse
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">€2.8M</div>
            <div className="text-sm text-gray-400 mb-1">Pipeline total</div>
            <div className="text-xs text-green-400">+47% vs période précédente</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">18.5%</div>
            <div className="text-sm text-gray-400 mb-1">Taux de conversion</div>
            <div className="text-xs text-green-400">+5.2 pts vs période précédente</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">€42,500</div>
            <div className="text-sm text-gray-400 mb-1">Budget moyen/projet</div>
            <div className="text-xs text-red-400">-8% vs période précédente</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">285</div>
            <div className="text-sm text-gray-400 mb-1">Opportunités identifiées</div>
            <div className="text-xs text-green-400">+23 nouvelles</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Timeline */}
          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-6">📈 Évolution du pipeline</h3>
            <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-4">📊</div>
                <div>Graphique d'évolution temporelle</div>
                <div className="text-sm mt-2">(Intégration Chart.js à venir)</div>
              </div>
            </div>
          </div>

          {/* Client Distribution */}
          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-6">🎯 Répartition par client</h3>
            <div className="space-y-4">
              {[
                { name: "Stellantis", value: 30, amount: "€850K" },
                { name: "BMW Group", value: 25, amount: "€700K" },
                { name: "Renault Group", value: 20, amount: "€560K" },
                { name: "Audi AG", value: 15, amount: "€420K" },
                { name: "Autres", value: 10, amount: "€280K" }
              ].map((client, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="font-medium text-white">{client.name}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-purple-500 h-full rounded-full"
                        style={{ width: `${client.value}%` }}
                      ></div>
                    </div>
                    <div className="text-green-400 font-semibold min-w-[80px] text-right">{client.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insights & Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Insights */}
          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-6">🧠 Insights IA</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="text-green-400 text-xl">✅</div>
                  <div>
                    <div className="font-medium text-green-400 mb-1">Opportunité détectée</div>
                    <div className="text-sm text-gray-300">
                      Stellantis montre des signaux d'accélération sur l'électrique. 
                      Moment optimal pour approcher sur les projets STLA Platform.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="text-yellow-400 text-xl">⚠️</div>
                  <div>
                    <div className="font-medium text-yellow-400 mb-1">Attention requise</div>
                    <div className="text-sm text-gray-300">
                      Concurrence intensifiée sur le segment premium. 
                      Adient gagne du terrain avec BMW - réaction recommandée.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-xl">💡</div>
                  <div>
                    <div className="font-medium text-blue-400 mb-1">Recommandation</div>
                    <div className="text-sm text-gray-300">
                      Diversifier vers les constructeurs chinois émergents. 
                      Forte croissance prévisible sur les 24 prochains mois.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Competition Analysis */}
          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-6">⚔️ Analyse concurrentielle</h3>
            <div className="space-y-4">
              {[
                { 
                  name: "Adient", 
                  trend: "up", 
                  score: 85, 
                  change: "+12%",
                  status: "Menace élevée"
                },
                { 
                  name: "Lear Corporation", 
                  trend: "up", 
                  score: 78, 
                  change: "+8%",
                  status: "Surveillance active"
                },
                { 
                  name: "Faurecia", 
                  trend: "stable", 
                  score: 72, 
                  change: "+2%",
                  status: "Stable"
                },
                { 
                  name: "Brose", 
                  trend: "up", 
                  score: 68, 
                  change: "+15%",
                  status: "Innovation forte"
                }
              ].map((competitor, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="font-medium text-white">{competitor.name}</div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      competitor.trend === 'up' ? 'bg-red-500/20 text-red-400' : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {competitor.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-400">Score: {competitor.score}</div>
                    <div className={`text-sm font-medium ${
                      competitor.trend === 'up' ? 'text-red-400' : 'text-gray-400'
                    }`}>
                      {competitor.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="card">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">📤 Exporter les analyses</h3>
              <p className="text-gray-400">Générez des rapports pour vos équipes</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-300 hover:bg-white/20 transition-all">
                📊 Export CSV
              </button>
              <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-300 hover:bg-white/20 transition-all">
                📄 Export PDF
              </button>
              <button className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all">
                📤 Partager rapport
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
