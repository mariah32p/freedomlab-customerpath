import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import MobileDemoComponent from '../components/MobileDemoComponent'
import KeyFeaturesSection from '../components/KeyFeaturesSection'
import SocialProofSection from '../components/SocialProofSection'
import { useAuth } from '../hooks/useAuth'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-purple/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-brand-teal/30">
                <span className="w-2 h-2 bg-brand-teal rounded-full mr-2 animate-pulse"></span>
                7-Day Free Trial Available
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Turn Customer Data Into
                <span className="block bg-gradient-to-r from-brand-teal to-cyan-300 bg-clip-text text-transparent">
                  Visual Insights
                </span>
              </h1>
              
              <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Stop guessing where customers drop off. See exactly what's happening at every step of your funnel with beautiful, actionable journey maps.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link to="/signup" className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-block text-center">
                  Start Free Trial
                </Link>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-white/70">
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  7-day free trial
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Cancel anytime
                </div>
              </div>
            </div>

            {/* Right Column - Quick Journey Preview */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-white">E-commerce Funnel</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80 text-sm font-medium">Live</span>
                  </div>
                </div>
                
                {/* Simplified 3-Step Journey */}
                <div className="space-y-6">
                  {/* Stage 1: Discovery */}
                  <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-bold text-white">Discovery</span>
                        <p className="text-brand-teal text-sm font-semibold">8,247 visitors</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">78%</div>
                    </div>
                  </div>
                  
                  {/* Stage 2: Trial */}
                  <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-bold text-white">Trial</span>
                        <p className="text-brand-teal text-sm font-semibold">3,421 signups</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">41%</div>
                    </div>
                  </div>
                  
                  {/* Stage 3: Conversion */}
                  <div className="flex items-center justify-between bg-white/30 backdrop-blur-sm p-5 rounded-xl border border-white/40 shadow-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-bold text-white">Customers</span>
                        <p className="text-brand-teal text-sm font-semibold">2,289 paid</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-400">$114k</div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Metric */}
                <div className="mt-8 pt-6 border-t border-white/20 text-center">
                  <div className="text-2xl font-bold text-white">27.8%</div>
                  <div className="text-white/70 text-sm">Overall Conversion Rate</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-brand-teal text-white px-6 py-3 rounded-xl shadow-xl text-sm font-bold animate-bounce">
                🔥 Live Data
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              See CustomerPath in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how easy it is to build, analyze, and optimize customer journeys
            </p>
            
            {/* Demo Disclaimer - More Prominent */}
            <div className="mt-8 mb-8 max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-4 md:p-6 shadow-xl border-2 border-white/20">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-10 5a7 7 0 1114 0H3z" />
                    </svg>
                  </div>
                  <span className="font-bold text-lg text-center sm:text-left">🎬 Interactive Demo</span>
                </div>
                <p className="text-white/90 text-center font-medium text-sm md:text-base">
                  Watch it automatically cycle through features • Stay tuned for the full experience!
                </p>
              </div>
            </div>
          </div>

          {/* Demo Embed */}
          <div className="max-w-6xl mx-auto">
            {/* Desktop Demo */}
            <div className="hidden md:block bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="/demo?embedded=true"
                  className="w-full h-full border-0"
                  title="CustomerPath Interactive Demo"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Mobile Demo */}
            <div className="md:hidden max-w-sm mx-auto">
              <MobileDemoComponent />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <KeyFeaturesSection />

      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with a 7-day free trial. Scale as you grow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Plan */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-brand-navy mb-4">Standard</h3>
                <div className="text-6xl font-bold text-brand-navy mb-4">
                  $29<span className="text-2xl font-normal text-gray-500">/month</span>
                </div>
                <p className="text-lg text-gray-600">Perfect for small teams and startups</p>
              </div>

              <div className="space-y-5 mb-10">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Up to 5 customer journey maps</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Up to 10,000 events per month</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Real-time analytics & live feed</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Basic webhook setup</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Export journey maps (PNG/PDF)</span>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="relative bg-white p-8 lg:p-10 rounded-3xl shadow-2xl border-2 border-brand-teal">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-teal text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-brand-navy mb-4">Pro</h3>
                <div className="text-6xl font-bold text-brand-navy mb-4">
                  $49<span className="text-2xl font-normal text-gray-500">/month</span>
                </div>
                <p className="text-lg text-gray-600">For scaling businesses and agencies</p>
              </div>

              <div className="space-y-5 mb-10">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Unlimited journey maps</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Unlimited events tracking</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Advanced analytics dashboard</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Advanced webhook automation</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Team collaboration features</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/signup" className="bg-brand-teal hover:bg-brand-teal/90 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl inline-block">
              Start Free Trial
            </Link>
            <p className="text-gray-600 text-lg mt-8">
              All plans include a 7-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about CustomerPath
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                Do I need technical skills to set up CustomerPath?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Not at all! CustomerPath is designed for business users. Our visual journey builder uses drag-and-drop, and we provide step-by-step guides for connecting your tools via webhooks. Most customers are up and running in under 30 minutes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                What are webhooks and how do I set them up?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Webhooks are automatic notifications that your tools send when something happens (like a new signup or payment). CustomerPath gives you a unique webhook URL that you can add to tools like Stripe, Calendly, or Mailchimp. We provide step-by-step guides for popular tools, and you can use free tiers of Zapier or Make.com to connect tools that don't have direct webhook support.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                Can I use CustomerPath with my existing tools?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! CustomerPath works with any tool that can send webhooks - including Stripe, Calendly, HubSpot, Mailchimp, and hundreds of others. For tools without direct webhook support, you can use free automation tools like Zapier or Make.com to bridge the connection.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                What happens after my 7-day trial ends?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your card will be charged for your selected plan. You can cancel anytime during the trial with no charges. If you cancel after the trial, you'll have access until the end of your billing period.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                Is my customer data secure?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes. We use enterprise-grade encryption and secure cloud infrastructure. Customer journey data is stored securely with regular backups. We only store the information needed to track your customer journeys (like email addresses and event timestamps) - never payment details or other sensitive information.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                Can I switch plans later?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! You can upgrade or downgrade your plan anytime from your account settings. Changes take effect immediately, and billing is prorated automatically.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                What if I need help getting started?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide comprehensive setup guides, video tutorials, and email support to help you get the most out of CustomerPath. Most questions are answered in our knowledge base within minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Stop Guessing Where Your
            <span className="block text-brand-teal">Customers Drop Off</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of businesses using CustomerPath to increase conversions, reduce churn, and turn customer data into actionable insights.
          </p>
          
          <Link to="/signup" className="bg-brand-teal hover:bg-brand-teal/90 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl inline-block">
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  )
}

export default LandingPage