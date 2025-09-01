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
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to={isAuthenticated ? "/dashboard" : "/"} className="text-xl md:text-2xl font-bold text-brand-navy font-montserrat hover:text-brand-teal transition-colors max-w-[120px] md:max-w-none">
            CustomerPath
          </Link>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-brand-navy hover:text-brand-teal transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <button 
                onClick={handleSignOut}
                className="text-brand-navy/70 hover:text-red-600 font-medium transition-colors duration-200 font-montserrat"
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/signin" className="text-brand-navy/70 hover:text-brand-navy font-medium transition-colors duration-200 font-montserrat">
                  Login
                </Link>
                <Link to="/signup" className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-montserrat text-base">
                  Start Free Trial
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile CTA Button */}
          {!isAuthenticated && (
            <Link to="/signup" className="md:hidden bg-brand-teal hover:bg-brand-teal/90 text-white px-4 py-2 rounded-md font-semibold transition-all duration-200 text-sm">
              Try Free
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header