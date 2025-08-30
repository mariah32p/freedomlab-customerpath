import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // TODO: Implement Supabase auth signup
    console.log('Signup attempt:', { email, password })
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // TODO: Redirect to /get-started after successful signup
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-purple/20 flex items-center justify-center font-montserrat">
      <div className="max-w-md w-full mx-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-white hover:text-brand-teal transition-colors">
            CustomerPath
          </Link>
          <p className="text-white/70 mt-2">Start your 7-day free trial</p>
        </div>

        {/* Signup Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Create Your Account</h1>
            <p className="text-white/80">No credit card required to start</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent backdrop-blur-sm"
                placeholder="you@company.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent backdrop-blur-sm"
                placeholder="Create a secure password"
                required
                minLength={6}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-teal hover:bg-brand-teal/90 disabled:bg-brand-teal/50 text-white py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl disabled:transform-none disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Account...' : 'Start Free Trial'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/70 text-sm">
              Already have an account?{' '}
              <button className="text-brand-teal hover:text-brand-teal/80 font-semibold transition-colors">
                Sign In
              </button>
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center justify-center space-x-6 text-white/60 text-xs">
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure & Encrypted
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Cancel Anytime
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Link */}
        <div className="text-center mt-8">
          <Link to="/" className="text-white/60 hover:text-white/80 text-sm transition-colors">
            ← Back to CustomerPath
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignupPage