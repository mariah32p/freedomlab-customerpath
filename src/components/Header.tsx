import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-brand-navy">
              CustomerPath
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-brand-navy transition-colors font-medium">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-brand-navy transition-colors font-medium">Pricing</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-brand-navy transition-colors font-medium">How it Works</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-brand-navy transition-colors font-medium">
              Sign In
            </button>
            <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header