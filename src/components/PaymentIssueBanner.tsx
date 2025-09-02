import React from 'react'
import { UserProfile } from '../types/auth'
import { isInGracePeriod } from '../utils/routeGuard'
import { supabase } from '../lib/supabase'

interface PaymentIssueBannerProps {
  profile: UserProfile
}

const PaymentIssueBanner: React.FC<PaymentIssueBannerProps> = ({ profile }) => {
  if (profile.subscription_status !== 'past_due' || !isInGracePeriod(profile.payment_issue_since)) {
    return null
  }

  const issueDate = profile.payment_issue_since ? new Date(profile.payment_issue_since) : new Date()
  const now = new Date()
  const daysInGrace = Math.floor((now.getTime() - issueDate.getTime()) / (1000 * 60 * 60 * 24))
  const daysRemaining = 30 - daysInGrace

  const handleUpdatePayment = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        throw new Error('Not authenticated')
      }

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-portal-session`
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        }
      })

      const data = await response.json()
      
      if (data.success && data.url) {
        window.open(data.url, '_blank')
      } else {
        throw new Error(data.error || 'Failed to open billing portal')
      }
    } catch (error) {
      console.error('Error creating portal session:', error)
      alert('Failed to open billing portal. Please try again or contact support.')
    }
  }

  return (
    <div className="bg-red-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg className="h-5 w-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-semibold">Payment Issue</span>
            <span className="ml-2 text-red-100">
              • Your account will be suspended in {daysRemaining} day{daysRemaining !== 1 ? 's' : ''}
            </span>
          </div>
          <button 
            onClick={handleUpdatePayment}
            className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
          >
            Update Payment Method
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentIssueBanner