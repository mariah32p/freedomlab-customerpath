import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <div className="text-2xl font-black text-white">
              CustomerPath
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/80 hover:text-white transition-colors font-medium">Features</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors font-medium">Pricing</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-white/80 hover:text-white transition-colors font-medium">
              Sign In
            </button>
            <a href="#signup" className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-2 rounded-xl font-bold transition-all transform hover:scale-105 inline-block">
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header