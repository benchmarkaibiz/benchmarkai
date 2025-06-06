import { useState } from 'react'
import { useRouter } from 'next/router'
import { auth } from '../../lib/supabase'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    company: '',
    role: ''
  })
  const [termsAccepted, setTermsAccepted] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (isLogin) {
        const { data, error } = await auth.signIn(formData.email, formData.password)
        if (error) throw error
        
        alert('Connexion réussie ! Redirection vers le dashboard...')
        router.push('/dashboard')
      } else {
        if (!termsAccepted) {
          alert('Veuillez accepter les conditions d\'utilisation')
          return
        }

        const { data, error } = await auth.signUp(formData.email, formData.password, {
          firstName: formData.firstName,
          lastName: formData.lastName,
          company: formData.company,
          role: formData.role
        })
        
        if (error) throw error
        
        alert('Compte créé avec succès ! Vérifiez votre email.')
      }
    } catch (error) {
      alert('Erreur: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-900 text-white flex items-center justify-center p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl w-full">
        
        {/* Section Branding */}
        <div className="p-8">
          <div className="text-4xl font-bold gradient-text mb-8 flex items-center gap-4">
            <span className="text-3xl">🚗</span>
            BenchmarkAI
          </div>
          
          <h1 className="text-4xl font-bold mb-6 gradient-text">
            L'intelligence commerciale automotive qui change la donne
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Rejoignez les équipes commerciales qui utilisent BenchmarkAI pour identifier les opportunités.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              { icon: '🎯', text: 'Contacts qualifiés OEMs avec emails directs' },
              { icon: '📊', text: 'Intelligence projets RFQ, SOP et volumes' },
              { icon: '🔔', text: 'Alertes automatiques sur vos clients' },
              { icon: '⚡', text: 'Gain de temps : 2h de recherche → 5 minutes' }
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-sm">
                  {feature.icon}
                </div>
                <span className="text-gray-300">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section Formulaire */}
        <div className="glass-effect rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Commencer maintenant</h2>
            <p className="text-gray-400">Accédez à votre intelligence commerciale</p>
          </div>

          {/* Tabs */}
          <div className="flex bg-white/10 rounded-xl p-1 mb-8">
            <button
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                isLogin ? 'bg-blue-500/30 text-white shadow-lg' : 'text-gray-400'
              }`}
              onClick={() => setIsLogin(true)}
            >
              Connexion
            </button>
            <button
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                !isLogin ? 'bg-blue-500/30 text-white shadow-lg' : 'text-gray-400'
              }`}
              onClick={() => setIsLogin(false)}
            >
              Inscription
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Formulaire Inscription */}
            {!isLogin && (
              <>
                <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/20 rounded-lg p-4 text-center mb-6">
                  <div className="text-green-400 font-medium">🎉 Essai gratuit 14 jours</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Prénom"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nom"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Entreprise"
                  required
                />

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Sélectionnez votre fonction</option>
                  <option value="commercial">Commercial / Business Development</option>
                  <option value="marketing">Marketing</option>
                  <option value="direction">Direction Générale</option>
                  <option value="rd">R&D / Innovation</option>
                </select>
              </>
            )}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email professionnel"
              required
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mot de passe"
              required
              minLength={6}
            />

            {!isLogin && (
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 text-blue-500 bg-white/10 border-white/20 rounded"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-300">
                  J'accepte les conditions d'utilisation
                </label>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full button-primary disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  {isLogin ? 'Connexion...' : 'Création...'}
                </div>
              ) : (
                isLogin ? 'Se connecter' : 'Commencer l\'essai gratuit'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
