import { useState } from 'react'
import Layout from '../../components/Layout'

export default function Projects({ user }) {
  const [projects] = useState([
    {
      id: 1,
      title: "STLA Large Platform - Sièges avant premium",
      client: "Stellantis",
      clientLogo: "ST",
      description: "Nouvelle plateforme électrique STLA Large pour véhicules segments D et E",
      budget: "€45M",
      phase: "RFQ",
      urgency: "urgent",
      timeline: {
        rfq: "Q3 2025 (3 mois)",
        sop: "Q1 2027",
        eop: "Q4 2031"
      },
      details: {
        volume: "450K unités/an",
        duration: "5 ans",
        segment: "Premium",
        price: "€100/siège"
      }
    },
    {
      id: 2,
      title: "iNext Platform - Intérieur premium électrique",
      client: "BMW Group",
      clientLogo: "BMW",
      description: "Nouvelle génération véhicules électriques BMW iNext avec intérieur révolutionnaire",
      budget: "€38M",
      phase: "Development",
      urgency: "warning",
      timeline: {
        rfq: "Q2 2025 (8 mois)",
        sop: "Q2 2027",
        eop: "Q4 2033"
      },
      details: {
        volume: "180K unités/an",
        duration: "7 ans",
        segment: "Luxury",
        price: "€300/siège"
      }
    },
    {
      id: 3,
      title: "Nouvelle Clio VI - Sièges design",
      client: "Renault Group",
      clientLogo: "RN",
      description: "Renouvellement complet gamme Clio avec nouveaux sièges design moderne",
      budget: "€28M",
      phase: "Watch",
      urgency: "normal",
      timeline: {
        rfq: "Q1 2026 (14 mois)",
        sop: "Q2 2027",
        eop: "Q2 2033"
      },
      details: {
        volume: "280K unités/an",
        duration: "6 ans",
        segment: "Volume",
        price: "€165/siège"
      }
    }
  ])

  const getUrgencyBadge = (urgency) => {
    const styles = {
      urgent: "bg-red-500/20 text-red-400 border-red-500/30",
      warning: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      normal: "bg-green-500/20 text-green-400 border-green-500/30"
    }
    
    const labels = {
      urgent: "🔥 RFQ < 6 mois",
      warning: "⚠️ RFQ < 12 mois",
      normal: "✅ RFQ > 12 mois"
    }

    return (
      <span className={`px-3 py-1 rounded-full text-xs border ${styles[urgency]}`}>
        {labels[urgency]}
      </span>
    )
  }

  const getPhaseBadge = (phase) => {
    const styles = {
      RFQ: "bg-red-500/20 text-red-400",
      Development: "bg-blue-500/20 text-blue-400",
      Production: "bg-green-500/20 text-green-400",
      Watch: "bg-gray-500/20 text-gray-400"
    }

    return (
      <span className={`px-3 py-1 rounded-full text-xs ${styles[phase]}`}>
        {phase}
      </span>
    )
  }

  return (
    <Layout user={user}>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Pipeline Projets</h1>
          <p className="text-gray-400">Vue d'ensemble de tous vos projets - Timeline RFQ, SOP, Production</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">5</div>
            <div className="text-sm text-gray-400">RFQ Urgents</div>
            <div className="text-xs text-red-400">< 6 mois</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">8</div>
            <div className="text-sm text-gray-400">Projets actifs</div>
            <div className="text-xs text-yellow-400">6-18 mois</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">5</div>
            <div className="text-sm text-gray-400">Veille long terme</div>
            <div className="text-xs text-green-400">> 18 mois</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">€428M</div>
            <div className="text-sm text-gray-400">Budget total</div>
            <div className="text-xs text-blue-400">18 projets</div>
          </div>
        </div>

        {/* Filters */}
        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Client</label>
              <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white">
                <option>Tous les clients</option>
                <option>Stellantis</option>
                <option>BMW Group</option>
                <option>Renault Group</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Phase</label>
              <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white">
                <option>Toutes les phases</option>
                <option>RFQ en cours</option>
                <option>Développement</option>
                <option>Production</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Budget</label>
              <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white">
                <option>Tous budgets</option>
                <option>> €50M</option>
                <option>€10M - €50M</option>
                <option>< €10M</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Urgence</label>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-xs">🔥</button>
                <button className="px-3 py-1 bg-white/10 text-gray-400 rounded-lg text-xs">⚠️</button>
                <button className="px-3 py-1 bg-white/10 text-gray-400 rounded-lg text-xs">✅</button>
              </div>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="card hover:bg-white/10 transition-all cursor-pointer">
              {/* Project Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-lg font-bold">
                    {project.clientLogo}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.client}</p>
                    <p className="text-gray-500 text-sm mt-1">{project.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  {getUrgencyBadge(project.urgency)}
                  <div className="text-2xl font-bold text-green-400 mt-2">{project.budget}</div>
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Timeline du projet</span>
                  <span>{project.timeline.rfq} → {project.timeline.sop} → {project.timeline.eop}</span>
                </div>
                <div className="relative h-8 bg-white/5 rounded-full overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-1/5 bg-gradient-to-r from-red-500 to-red-400 flex items-center justify-center text-xs font-bold">
                    RFQ
                  </div>
                  <div className="absolute left-1/5 top-0 h-full w-1/4 bg-gradient-to-r from-yellow-500 to-yellow-400 flex items-center justify-center text-xs font-bold text-black">
                    SOP
                  </div>
                  <div className="absolute left-[45%] top-0 h-full w-[55%] bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center text-xs font-bold text-black">
                    Production
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="font-semibold text-white">{project.details.volume}</div>
                  <div className="text-xs text-gray-400">Volume</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white">{project.details.duration}</div>
                  <div className="text-xs text-gray-400">Durée</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white">{project.details.segment}</div>
                  <div className="text-xs text-gray-400">Segment</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white">{project.details.price}</div>
                  <div className="text-xs text-gray-400">Prix estimé</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30 transition-all">
                  👥 Voir contacts
                </button>
                <button className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg text-sm hover:bg-white/20 transition-all">
                  📄 Cahier des charges
                </button>
                <button className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg text-sm hover:bg-white/20 transition-all">
                  📊 Analyse concurrence
                </button>
                <button className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg text-sm hover:bg-white/20 transition-all">
                  📅 Calendrier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
