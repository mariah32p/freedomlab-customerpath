import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import PricingSection from '../components/PricingSection'
import CTASection from '../components/CTASection'
import SignupSection from '../components/SignupSection'

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden font-montserrat">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      <SignupSection />
    </div>
  )
}

export default LandingPage