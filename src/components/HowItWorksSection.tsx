import React from 'react'

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-navy mb-4">
            How CustomerPath Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our simple 3-step process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Import Your Data</h3>
            <p className="text-gray-600">
              Upload customer data via CSV or connect your existing tools through our API integrations
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Build Your Journey</h3>
            <p className="text-gray-600">
              Use our visual builder to map out touchpoints and define your customer journey stages
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Optimize & Scale</h3>
            <p className="text-gray-600">
              Get insights, identify bottlenecks, and continuously improve your conversion rates
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection