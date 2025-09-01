import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { signOut } from '../lib/auth'

const Header: React.FC = () => {
  const { isAuthenticated } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Sign out failed:', error)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to={isAuthenticated ? "/dashboard" : "/"} className="text-xl md:text-2xl font-bold text-brand-navy font-montserrat hover:text-brand-teal transition-colors max-w-[120px] md:max-w-none">
            CustomerPath
          </Link>
          
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
          
          {/* Mobile Menu Button and CTA */}
          {!isAuthenticated && (
              <div className="md:hidden flex items-center space-x-3">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-brand-navy hover:text-brand-teal transition-colors"
                  aria-label="Open menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <Link to="/signup" className="bg-brand-teal hover:bg-brand-teal/90 text-white px-4 py-2 rounded-md font-semibold transition-all duration-200 text-sm">
                  Try Free
                </Link>
              </div>
            )}
            
            {/* Mobile Sign Out for authenticated users */}
            {isAuthenticated && (
              <button 
                onClick={handleSignOut}
                className="md:hidden text-brand-navy/70 hover:text-red-600 font-medium transition-colors duration-200 text-sm"
              >
                Sign Out
              </button>
            )}
          
          {/* Mobile CTA Button */}
          {!isAuthenticated && (
            <Link to="/signup" className="md:hidden bg-brand-teal hover:bg-brand-teal/90 text-white px-4 py-2 rounded-md font-semibold transition-all duration-200 text-sm">
              Try Free
            </Link>
          )}
        </div>
      </div>
      </header>

      {/* Mobile Menu Popup */}
      {isMobileMenuOpen && !isAuthenticated && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 md:hidden">
            <div className="px-6 py-4 space-y-4">
              <Link 
                to="/signin" 
                onClick={closeMobileMenu}
                className="block text-brand-navy/70 hover:text-brand-navy font-medium transition-colors duration-200 py-2"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                onClick={closeMobileMenu}
                className="block bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-md font-semibold transition-all duration-200 text-center"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header