import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const SuccessPage: React.FC = () => {
  const { profile } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (profile?.subscription_status === 'trialing' || profile?.subscription_status === 'active') {
      navigate('/dashboard', { replace: true })
    }
  }, [profile, navigate])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-teal mx-auto mb-4"></div>
        <h1 className="text-xl font-semibold text-brand-navy mb-2">Setting up your subscription...</h1>
        <p className="text-gray-600">Hang tight, you'll be redirected to your dashboard in a moment.</p>
      </div>
    </div>
  )
}

export default SuccessPage
