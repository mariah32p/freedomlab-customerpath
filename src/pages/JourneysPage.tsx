import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useAuth } from '../hooks/useAuth'
import { Plus, Edit3, Trash2, Users, TrendingUp, Calendar, Target } from 'lucide-react'

interface Journey {
  id: string
  name: string
  description: string
  steps: number
  totalUsers: number
  conversionRate: number
  revenue: number
  lastUpdated: string
  status: 'active' | 'draft' | 'archived'
}

const JourneysPage: React.FC = () => {
  const { profile } = useAuth()
  const [journeys, setJourneys] = useState<Journey[]>([
    {
      id: '1',
      name: 'E-commerce Checkout Flow',
      description: 'Complete purchase journey from product page to payment confirmation',
      steps: 5,
      totalUsers: 8247,
      conversionRate: 24.8,
      revenue: 47200,
      lastUpdated: '2 hours ago',
      status: 'active'
    },
    {
      id: '2',
      name: 'SaaS Trial to Paid',
      description: 'Free trial signup to paid subscription conversion',
      steps: 4,
      totalUsers: 3421,
      conversionRate: 18.5,
      revenue: 28900,
      lastUpdated: '1 day ago',
      status: 'active'
    },
    {
      id: '3',
      name: 'Content Marketing Funnel',
      description: 'Blog reader to newsletter subscriber to customer',
      steps: 6,
      totalUsers: 12450,
      conversionRate: 8.2,
      revenue: 15600,
      lastUpdated: '3 days ago',
      status: 'draft'
    }
  ])

  const getStatusBadge = (status: string) => {
    const config = {
      active: { bg: 'bg-green-100', text: 'text-green-800', label: 'Active' },
      draft: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Draft' },
      archived: { bg: 'bg-gray-100', text: 'text-gray-800', label: 'Archived' }
    }
    
    const statusConfig = config[status as keyof typeof config] || config.draft
    
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bg} ${statusConfig.text}`}>
        {statusConfig.label}
      </span>
    )
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat">
      <Header />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-brand-navy mb-2">Customer Journeys</h1>
              <p className="text-gray-600">Create, manage, and optimize your customer journey maps</p>
            </div>
            
            <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Create Journey</span>
            </button>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Journeys</p>
                    <p className="text-2xl font-bold text-brand-navy">{journeys.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Users</p>
                    <p className="text-2xl font-bold text-brand-navy">
                      {journeys.reduce((sum, j) => sum + j.totalUsers, 0).toLocaleString()}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-brand-teal" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Avg Conversion</p>
                    <p className="text-2xl font-bold text-brand-navy">
                      {(journeys.reduce((sum, j) => sum + j.conversionRate, 0) / journeys.length).toFixed(1)}%
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                    <p className="text-2xl font-bold text-brand-navy">
                      {formatCurrency(journeys.reduce((sum, j) => sum + j.revenue, 0))}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          {/* Journeys Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {journeys.map((journey) => (
              <div key={journey.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
                        {journey.name}
                      </h3>
                      {getStatusBadge(journey.status)}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{journey.description}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-gray-400 hover:text-brand-teal hover:bg-brand-teal/10 rounded-lg transition-all">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Steps</p>
                    <p className="text-lg font-bold text-brand-navy">{journey.steps}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Users</p>
                    <p className="text-lg font-bold text-brand-navy">{journey.totalUsers.toLocaleString()}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Conversion</p>
                    <p className="text-lg font-bold text-green-600">{journey.conversionRate}%</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Revenue</p>
                    <p className="text-lg font-bold text-brand-purple">{formatCurrency(journey.revenue)}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    Updated {journey.lastUpdated}
                  </div>
                  
                  <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}

            {/* Create New Journey Card */}
            <div className="bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-200 p-6 hover:border-brand-teal hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-brand-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-teal/20 transition-colors">
                  <Plus className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">
                  Create New Journey
                </h3>
                <p className="text-gray-600 text-sm">
                  Map out a new customer journey and start tracking conversions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JourneysPage