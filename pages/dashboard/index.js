import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import { database } from '../../lib/supabase'

export default function Dashboard({ user }) {
  const [stats, setStats] = useState({
    totalClients: 26,
    activeProjects: 18,
    urgentRFQ: 5,
    totalBudget: 428
  })
  
  const [recentNews, setRecentNews] = useState([
    {
      id: 1,
      title: "Stellantis investit 100M€ dans l'usine de Mirafiori",
      company: "Stellantis",
      time: "Il y a 2 heures",
      urgent: true,
      logo: "ST"
    },
    {
      id: 2,
      title: "BMW dévoile l'iX3 de nouvelle génération",
      company: "BMW Group",
      time: "Il y a 6 heures",
      urgent: false,
      logo: "BMW"
    },
    {
      id: 3,
      title: "Adient remporte un contrat de 200M€ avec BMW",
      company: "Adient (Concurrent)",
      time: "Il y a 4 heures",
      urgent: false,
      logo: "AD"
    }
  ])

  const [topClients, setTopClients] = useState([
    { name: "Stellantis", projects: 5, budget: "€45M", logo: "ST", urgent: true },
    { name: "BMW Group", projects: 3, budget: "€38M", logo: "BMW", urgent: false },
    { name: "Renault Group", projects: 4, budget: "€28M", logo: "RN", urgent: false },
    { name: "Audi AG", projects: 2, budget: "€85M", logo: "AU", urgent: false }
  ])

  return (
    <Layout user={user}>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Bonjour {user?.user_metadata?.firstName || 'Utilisateur'} 👋
          </h1>
          <p className="text-gray-400">
            Vue d'ensemble de vos clients potentiels et opportunités
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <div className="text-sm text-gray-400 mb-2">Clients suivis</div>
            <div className="text-3xl font-bold text-blue-400 mb-1">{stats.totalClients}</div>
            <div className="text-xs text-green-400">+3 ce mois</div>
          </div>
          
          <div className="card">
            <div className="text-sm text-gray-400 mb-2">Projets actifs</div>
            <div className="text-3xl font-bold text-purple-400 mb-1">{stats.activeProjects}</div>
            <div className="text-xs text-green-400">+2 cette semaine</div>
          </div>
          
          <div className="card">
            <div className="text-sm text-gray-400 mb-2">RFQ urgents</div>
            <div className="text-3xl font-bold text-red-400 mb-1">{stats.urgentRFQ}</div>
            <div className="text-xs text-red-400">moins de 6 mois</div>
          </div>
          
          <div className="card">
            <div className="text-sm text-gray-400 mb-2">Budget total</div>
            <div className="text-3xl font-bold text-green-400 mb-1">€{stats.totalBudget}M</div>
            <div className="text-xs text-green-400">18 projets</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Actualités récentes */}
          <div className="card">
            <div className="flex items-center justify-between mb-6
