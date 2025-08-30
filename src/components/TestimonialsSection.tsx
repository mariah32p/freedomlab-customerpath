import React from 'react'

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-navy mb-4">
            Trusted by Growing Companies
          </h2>
          <p className="text-xl text-gray-600">
            See how teams are using CustomerPath to boost conversions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-brand-teal rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">SH</span>
              </div>
              <div>
                <div className="font-semibold text-brand-navy">Sarah Chen</div>
                <div className="text-sm text-gray-600">Head of Growth, TechCorp</div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "CustomerPath helped us identify a 40% drop-off in our onboarding flow. After optimizing based on their insights, we increased conversions by 25%."
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">MR</span>
              </div>
              <div>
                <div className="font-semibold text-brand-navy">Mike Rodriguez</div>
                <div className="text-sm text-gray-600">VP Marketing, StartupXYZ</div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "The visual journey maps make it so easy to spot bottlenecks. We've reduced churn by 30% since implementing CustomerPath."
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">JL</span>
              </div>
              <div>
                <div className="font-semibold text-brand-navy">Jessica Liu</div>
                <div className="text-sm text-gray-600">Product Manager, ScaleUp</div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Finally, a tool that makes customer journey analysis visual and actionable. Our whole team can now understand the data."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection