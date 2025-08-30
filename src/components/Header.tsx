import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-bold text-brand-navy font-montserrat">
            <div className="text-2xl font-bold text-brand-navy">
              CustomerPath
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-brand-navy/70 hover:text-brand-navy font-medium transition-colors duration-200">
              Features
            </a>
            <a href="#pricing" className="text-brand-navy/70 hover:text-brand-navy font-medium transition-colors duration-200">
              Pricing
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-brand-navy/70 hover:text-brand-navy font-medium transition-colors duration-200 font-montserrat">
              Features
            </a>
            <a href="#pricing" className="text-brand-navy/70 hover:text-brand-navy font-medium transition-colors duration-200 font-montserrat">
              Pricing
            </a>
            <a href="#how-it-works" className="text-brand-navy/70 hover:text-brand-navy font-medium transition-colors duration-200 font-montserrat">
              How it Works
            </a>
          </nav>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-brand-navy/70 hover:text-brand-navy font-semibold transition-colors duration-200 font-montserrat">
              Sign In
            </button>
            <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-montserrat">
            </button>
            <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header