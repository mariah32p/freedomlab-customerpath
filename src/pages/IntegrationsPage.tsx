import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useAuth } from '../hooks/useAuth'
import { Plus, Webhook, Settings, ExternalLink, Copy, Check } from 'lucide-react'

interface Integration {
  id: string
  name: string
  type: string
  status: 'active' | 'inactive' | 'error'
  eventsToday: number
  lastEvent: string
  icon: string
}

const IntegrationsPage: React.FC = () => {
  const { profile } = useAuth()
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: '1',
      name: 'Stripe',
      type: 'Payment Processing',
      status: 'active',
      eventsToday: 89,
      lastEvent: '2 minutes ago',
      icon: '💳'
    },
    {
      id: '2',
      name: 'Calendly',
      type: 'Demo Bookings',
      status: 'active',
      eventsToday: 247,
      lastEvent: '5 minutes ago',
      icon: '📅'
    },
    {
      id: '3',
      name: 'HubSpot',
      type: 'Form Submissions',
      status: 'active',
      eventsToday: 156,
      lastEvent: '12 minutes ago',
      icon: '📝'
    }
  ])

  const [webhookUrl] = useState('https://api.customerpath.com/webhook/usr_abc123xyz789')
  const [copied, setCopied] = useState(false)
  
  const copyWebhookUrl = async () => {
    try {
      await navigator.clipboard.writeText(webhookUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const getStatusBadge = (status: string) => {
    const config = {
      active: { bg: 'bg-green-100', text: 'text-green-800', label: 'Active', dot: 'bg-green-500' },
      inactive: { bg: 'bg-gray-100', text: 'text-gray-800', label: 'Inactive', dot: 'bg-gray-400' },
      error: { bg: 'bg-red-100', text: 'text-red-800', label: 'Error', dot: 'bg-red-500' }
    }
    
    const statusConfig = config[status as keyof typeof config] || config.inactive
    
    return (
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${statusConfig.dot}`} />
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bg} ${statusConfig.text}`}>
          {statusConfig.label}
        </span>
      </div>
    )
  }

  const availableIntegrations = [
    { name: 'Mailchimp', type: 'Email Marketing', icon: '📧' },
    { name: 'Typeform', type: 'Form Builder', icon: '📋' },
    { name: 'Zapier', type: 'Automation', icon: '⚡' },
    { name: 'Airtable', type: 'Database', icon: '🗃️' },
    { name: 'Slack', type: 'Team Communication', icon: '💬' },
    { name: 'Google Analytics', type: 'Web Analytics', icon: '📊' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat">
      <Header />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-brand-navy mb-2">Integrations</h1>
              <p className="text-gray-600">Connect your tools to automatically track customer journeys</p>
            </div>
            
            <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Add Integration</span>
            </button>
          </div>

          {/* Webhook URL Section */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <h2 className="text-xl font-bold text-brand-navy mb-4">Your Webhook URL</h2>
                <p className="text-gray-600 mb-4">
                  Use this URL to send events from your tools to CustomerPath. Copy and paste it into your integrations.
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm text-gray-700 break-all">
                    {webhookUrl}
                  </div>
                  <button 
                    onClick={copyWebhookUrl}
                    className="bg-brand-teal hover:bg-brand-teal/90 text-white px-4 py-4 rounded-lg font-semibold transition-all flex items-center space-x-2"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Active Integrations */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-brand-navy">Connected Tools</h2>
                  <span className="bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-sm font-medium">
                    {integrations.filter(i => i.status === 'active').length} Active
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {integrations.map((integration) => (
                    <div key={integration.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{integration.icon}</div>
                          <div>
                            <h3 className="font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
                              {integration.name}
                            </h3>
                            <p className="text-sm text-gray-600">{integration.type}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(integration.status)}
                          <button className="p-2 text-gray-400 hover:text-brand-teal hover:bg-brand-teal/10 rounded-lg transition-all">
                            <Settings className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-600 mb-1">Events Today</p>
                          <p className="text-lg font-bold text-brand-navy">{integration.eventsToday}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-600 mb-1">Last Event</p>
                          <p className="text-sm font-medium text-brand-navy">{integration.lastEvent}</p>
                        </div>
                      </div>
                      
                      <button className="w-full bg-gray-100 hover:bg-gray-200 text-brand-navy py-2 rounded-lg font-medium text-sm transition-colors">
                        View Event Log
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Integrations */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-brand-navy mb-6">Available Integrations</h2>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {availableIntegrations.map((integration, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all group cursor-pointer">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-xl">{integration.icon}</div>
                        <div>
                          <h3 className="font-semibold text-brand-navy group-hover:text-brand-teal transition-colors">
                            {integration.name}
                          </h3>
                          <p className="text-xs text-gray-600">{integration.type}</p>
                        </div>
                      </div>
                      
                      <button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white py-2 rounded-lg font-medium text-sm transition-all flex items-center justify-center space-x-2">
                        <Plus className="w-4 h-4" />
                        <span>Connect</span>
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">Setup Guides Available</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg border border-blue-200 hover:shadow-md transition-all group">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-blue-900 group-hover:text-blue-700">Zapier Integration Guide</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-blue-600" />
                    </a>
                    
                    <a href="#" className="flex items-center justify-between p-3 bg-white rounded-lg border border-blue-200 hover:shadow-md transition-all group">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-blue-900 group-hover:text-blue-700">Make.com Setup</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default IntegrationsPage