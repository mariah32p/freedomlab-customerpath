import React, { useState } from 'react'
import Header from '../components/Header'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../lib/supabase'

const SettingsPage: React.FC = () => {
  const { user, profile } = useAuth()
  const [isLoadingPortal, setIsLoadingPortal] = useState(false)

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat">
      <Header />
      
      <div className="pt-20">
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
                    {profile?.email || 'Not available'}
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