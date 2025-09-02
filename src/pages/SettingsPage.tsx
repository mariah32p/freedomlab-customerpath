import React, { useState } from 'react'
import Header from '../components/Header'
import PaymentIssueBanner from '../components/PaymentIssueBanner'
import { useAuth } from '../hooks/useAuth'
import { shouldShowPaymentBanner, getTrialDaysRemaining } from '../utils/routeGuard'
import { supabase } from '../lib/supabase'

const SettingsPage: React.FC = () => {
  const { user, profile } = useAuth()
  const [isLoadingPortal, setIsLoadingPortal] = useState(false)
  const [isLoadingPlanChange, setIsLoadingPlanChange] = useState(false)
  
  const showPaymentBanner = shouldShowPaymentBanner(profile)
  const isTrialing = profile?.subscription_status === 'trialing'
  const trialDaysRemaining = getTrialDaysRemaining(profile?.trial_ends_at || null)

  const handleManageSubscription = async () => {
    setIsLoadingPortal(true)
    
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
        throw new Error(data.error || 'Failed to create portal session')
      }
    } catch (error) {
      console.error('Error opening portal:', error)
      alert('Failed to open billing portal. Please try again or contact support.')
    } finally {
      setIsLoadingPortal(false)
    }
  }

  const handlePlanChange = async (newPlan: 'basic' | 'pro') => {
    if (newPlan === profile?.plan) return
    
    setIsLoadingPlanChange(true)
    
    try {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        throw new Error('Not authenticated')
      }

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout-session`
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          plan: newPlan,
          trial: false // No trial for plan changes
        })
      })

      const data = await response.json()
      
      if (data.success && data.url) {
        window.open(data.url, '_blank')
      } else {
        throw new Error(data.error || 'Failed to create checkout session')
      }
    } catch (error) {
      console.error('Error changing plan:', error)
      alert('Failed to change plan. Please try again or contact support.')
    } finally {
      setIsLoadingPlanChange(false)
    }
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      trialing: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Trial' },
      active: { bg: 'bg-green-100', text: 'text-green-800', label: 'Active' },
      past_due: { bg: 'bg-red-100', text: 'text-red-800', label: 'Past Due' },
      canceled: { bg: 'bg-gray-100', text: 'text-gray-800', label: 'Canceled' },
      incomplete: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Incomplete' },
      not_started: { bg: 'bg-gray-100', text: 'text-gray-800', label: 'Not Started' }
    }

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.not_started

    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat">
      <Header />
      
      {/* Payment Issue Banner */}
      {showPaymentBanner && profile && <PaymentIssueBanner profile={profile} />}
      
      <div className="pt-20">
        {/* Trial Banner */}
        {isTrialing && profile?.trial_ends_at && (
          <div className="bg-gradient-to-r from-brand-teal to-cyan-500 text-white">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">
                    Trial ends in {trialDaysRemaining} day{trialDaysRemaining !== 1 ? 's' : ''}
                  </span>
                  <span className="ml-2 text-white/80">
                    • Your card will be charged on {formatDate(profile.trial_ends_at)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-brand-navy mb-2">Account Settings</h1>
            <p className="text-gray-600">Manage your subscription and account preferences</p>
          </div>

          <div className="space-y-8">
            {/* Account Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-brand-navy mb-6">Account Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-900">
                    {profile?.email || user?.email || 'Not available'}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Created</label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-900">
                    {formatDate(profile?.created_at || null)}
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-brand-navy mb-6">Subscription</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Plan</label>
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-semibold text-brand-navy capitalize">
                        {profile?.plan || 'Basic'}
                      </span>
                      <span className="text-gray-500">
                        ${profile?.plan === 'pro' ? '49' : '29'}/month
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <div>
                      {getStatusBadge(profile?.subscription_status || 'not_started')}
                    </div>
                  </div>
                </div>

                {profile?.trial_ends_at && isTrialing && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Trial Ends</label>
                    <div className="text-gray-900">
                      {formatDate(profile.trial_ends_at)} ({trialDaysRemaining} days remaining)
                    </div>
                  </div>
                )}

                {profile?.current_period_end && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Next Billing Date</label>
                    <div className="text-gray-900">
                      {formatDate(profile.current_period_end)}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Plan Management */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-brand-navy mb-6">Plan Management</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Basic Plan */}
                <div className={`border-2 rounded-xl p-6 transition-all ${
                  profile?.plan === 'basic' 
                    ? 'border-brand-teal bg-brand-teal/5' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-brand-navy">Basic</h3>
                    {profile?.plan === 'basic' && (
                      <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <div className="text-3xl font-bold text-brand-navy mb-4">
                    $29<span className="text-lg font-normal text-gray-500">/month</span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Up to 3 journey maps
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Up to 1,000 customers
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Basic analytics
                    </div>
                  </div>

                  {profile?.plan !== 'basic' && (
                    <button
                      onClick={() => handlePlanChange('basic')}
                      disabled={isLoadingPlanChange}
                      className="w-full border-2 border-gray-300 hover:border-brand-teal text-brand-navy hover:text-brand-teal py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoadingPlanChange ? 'Processing...' : 'Switch to Basic'}
                    </button>
                  )}
                </div>

                {/* Pro Plan */}
                <div className={`border-2 rounded-xl p-6 transition-all ${
                  profile?.plan === 'pro' 
                    ? 'border-brand-teal bg-brand-teal/5' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-brand-navy">Pro</h3>
                    {profile?.plan === 'pro' && (
                      <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <div className="text-3xl font-bold text-brand-navy mb-4">
                    $49<span className="text-lg font-normal text-gray-500">/month</span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Unlimited journey maps
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Up to 10,000 customers
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Advanced analytics & AI
                    </div>
                  </div>

                  {profile?.plan !== 'pro' && (
                    <button
                      onClick={() => handlePlanChange('pro')}
                      disabled={isLoadingPlanChange}
                      className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isLoadingPlanChange ? 'Processing...' : 'Upgrade to Pro'}
                    </button>
                  )}
                </div>
              </div>

              {/* Plan Change Notice */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-blue-800 font-medium mb-1">Plan Changes</p>
                    <p className="text-sm text-blue-700">
                      Plan changes take effect immediately and are prorated. You'll be charged or credited the difference right away.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Management */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-brand-navy mb-6">Billing Management</h2>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Manage your payment methods, view billing history, and download invoices through the Stripe Customer Portal.
                </p>
                
                <button
                  onClick={handleManageSubscription}
                  disabled={isLoadingPortal || !profile?.customer_id}
                  className="bg-brand-teal hover:bg-brand-teal/90 disabled:bg-brand-teal/50 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isLoadingPortal ? 'Opening Portal...' : 'Manage Billing & Payment'}
                </button>

                {!profile?.customer_id && (
                  <p className="text-sm text-gray-500">
                    Billing management will be available after you start your subscription.
                  </p>
                )}
              </div>
            </div>

            {/* Account Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-brand-navy mb-6">Account Actions</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-brand-navy">Export Data</h3>
                    <p className="text-sm text-gray-600">Download all your customer journey data</p>
                  </div>
                  <button className="border border-gray-300 hover:border-brand-teal text-brand-navy hover:text-brand-teal px-4 py-2 rounded-lg font-medium transition-all">
                    Export
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                  <div>
                    <h3 className="font-semibold text-red-700">Delete Account</h3>
                    <p className="text-sm text-red-600">Permanently delete your account and all data</p>
                  </div>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage