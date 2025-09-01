import React from 'react'
import { Star } from 'lucide-react'

const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-navy mb-6">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <p className="text-gray-700 leading-relaxed mb-6">
              "We were losing people somewhere in our signup process but couldn't figure out where. CustomerPath showed us exactly which step was the problem. Fixed it and saw immediate improvement."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">MW</span>
              </div>
              <div>
                <div className="font-semibold text-brand-navy">Mariah W.</div>
                <div className="text-sm text-gray-600">Software</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <p className="text-gray-700 leading-relaxed mb-6">
              "The visual maps make it easy to spot where clients get stuck in our onboarding. Now our whole team can see the bottlenecks instead of just guessing."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">DR</span>
              </div>
              <div>
                <div className="font-semibold text-brand-navy">Diane R.</div>
                <div className="text-sm text-gray-600">Professional Services</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <p className="text-gray-700 leading-relaxed mb-6">
              "Setting up the webhooks was straightforward. Now client data flows automatically and I can actually see what's happening in my business instead of just wondering."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div>
                <div className="font-semibold text-brand-navy">Amber I.</div>
                <div className="text-sm text-gray-600">Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection