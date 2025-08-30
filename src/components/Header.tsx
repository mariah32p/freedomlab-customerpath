import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { signOut } from '../lib/auth'

const Header: React.FC = () => {
  const { isAuthenticated } = useAuth()

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Sign out failed:', error)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={isAuthenticated ? "/dashboard" : "/"} className="text-2xl font-bold text-brand-navy font-montserrat hover:text-brand-teal transition-colors">
            CustomerPath
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-brand-navy/70 hover:text-brand-navy font-medium transition-colors duration-200 font-montserrat">
                  Dashboard
                </Link>
                <Link to="/journeys" className="text-brand-navy/70 hover:text-brand-navy font-medium transition-colors duration-200 font-montserrat">
                  Journeys
                </Link>
                <Link to="/analytics" className="text-brand-navy/70 hover:text-brand-navy font-medium transition-colors duration-200 font-montserrat">
                  Analytics
                </Link>
                <Link to="/settings" className="text-brand-navy/70 hover:text-brand-navy font-medium transition-colors duration-200 font-montserrat">
                  Settings
                </Link>
              </>
            ) : null}
          </nav>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <button 
                onClick={handleSignOut}
                className="text-brand-navy/70 hover:text-red-600 font-medium transition-colors duration-200 font-montserrat"
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/pricing" className="text-brand-navy/70 hover:text-brand-navy font-medium transition-colors duration-200 font-montserrat">
                  Pricing
                </Link>
                <Link to="/signin" className="text-brand-navy/70 hover:text-brand-navy font-medium transition-colors duration-200 font-montserrat">
                  Sign In
                </Link>
                <Link to="/signup" className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-montserrat">
                  Start Free Trial
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header