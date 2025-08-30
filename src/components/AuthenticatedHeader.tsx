import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from '../lib/auth'

const AuthenticatedHeader: React.FC = () => {
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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="text-2xl font-bold text-brand-navy font-montserrat hover:text-brand-teal transition-colors">
            CustomerPath
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
          </nav>
          
          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleSignOut}
              className="text-brand-navy/70 hover:text-red-600 font-medium transition-colors duration-200 font-montserrat"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AuthenticatedHeader