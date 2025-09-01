import React from 'react'
import { Star, TrendingUp, Users, Target } from 'lucide-react'

const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Trust Stats */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-navy mb-6">
            Trusted by Growing Companies Worldwide
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join hundreds of teams using CustomerPath to increase conversions and reduce churn
          </p>
          
          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-teal mb-2">500+</div>
              <div className="text-gray-600 font-medium">Active Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-navy mb-2">2.3M+</div>
              <div className="text-gray-600 font-medium">Customers Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">28%</div>
              <div className="text-gray-600 font-medium">Avg Conversion Lift</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">4.8/5</div>
              <div className="text-gray-600 font-medium">Customer Rating</div>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <p className="text-center text-gray-500 font-medium mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-100">
              <div className="text-xl font-bold text-gray-700">TechCorp</div>
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-100">
              <div className="text-xl font-bold text-gray-700">StartupXYZ</div>
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-100">
              <div className="text-xl font-bold text-gray-700">ScaleUp</div>
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-100">
              <div className="text-xl font-bold text-gray-700">GrowthCo</div>
            </div>
            <div className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-100">
              <div className="text-xl font-bold text-gray-700">DataFlow</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic leading-relaxed mb-6">
              "CustomerPath helped us identify a 40% drop-off in our SaaS onboarding flow. After optimizing based on their insights, we increased trial-to-paid conversions by 25%."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">MW</span>
              </div>
              <div>
                <div className="font-semibold text-brand-navy">Mariah W.</div>
                <div className="text-sm text-gray-600">VP Product, Software Company</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic leading-relaxed mb-6">
              "The visual journey maps make it so easy to spot bottlenecks in our client onboarding. We've reduced churn by 30% and our whole team can now see where clients get stuck."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">DR</span>
              </div>
              <div>
                <div className="font-semibold text-brand-navy">Diane R.</div>
                <div className="text-sm text-gray-600">Director of Operations, Professional Services</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic leading-relaxed mb-6">
              "Setting up webhooks with Zapier was incredibly simple. Now our lead data flows automatically from our website to CRM and we can see the complete client journey."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">NR</span>
              </div>
              <div>
                <div className="font-semibold text-brand-navy">Nathan R.</div>
                <div className="text-sm text-gray-600">IT Director, Legal Services Firm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Showcase */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              Real Results from Real Customers
            </h3>
            <p className="text-gray-600">
              See the impact CustomerPath has made across different industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">+34%</div>
              <div className="text-gray-700 font-semibold mb-2">Conversion Increase</div>
              <div className="text-gray-600 text-sm">
                E-commerce company identified checkout abandonment and optimized flow
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-brand-teal/10 to-cyan-50 rounded-xl border border-brand-teal/20">
              <div className="w-16 h-16 bg-brand-teal rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-brand-teal mb-2">-42%</div>
              <div className="text-gray-700 font-semibold mb-2">Churn Reduction</div>
              <div className="text-gray-600 text-sm">
                SaaS startup improved onboarding experience using journey insights
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">$2.1M</div>
              <div className="text-gray-700 font-semibold mb-2">Revenue Impact</div>
              <div className="text-gray-600 text-sm">
                B2B company optimized lead qualification process and sales funnel
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white px-8 py-4 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-medium">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium">GDPR Ready</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75c0-1.856-.511-3.596-1.4-5.086l-1.1 1.1" />
              </svg>
              <span className="font-medium">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection