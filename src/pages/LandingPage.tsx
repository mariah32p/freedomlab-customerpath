import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import HowItWorksSection from '../components/HowItWorksSection'
import TestimonialsSection from '../components/TestimonialsSection'
import PricingSection from '../components/PricingSection'
import CTASection from '../components/CTASection'

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </div>
  )
}

export default LandingPage