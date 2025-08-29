import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Product } from '../stripe-config'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { session } = useAuth()
  const [loading, setLoading] = useState(false)
  
  const isBasic = product.id === 'basic-plan'

  const handleCheckout = async () => {
    if (!session) {
      window.location.href = '/login'
      return
    }

    setLoading(true)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({
            price_id: product.priceId,
            mode: product.mode,
            success_url: `${window.location.origin}/success`,
            cancel_url: window.location.href,
          }),
        }
      )

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to start checkout process. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`group w-full text-center p-6 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl ${
        isBasic
          ? 'bg-gradient-to-r from-brand-navy to-blue-800 hover:from-brand-navy/90 hover:to-blue-800/90 text-white'
          : 'bg-gradient-to-r from-brand-teal to-brand-teal/90 hover:from-brand-teal/90 hover:to-brand-teal text-white'
      } disabled:opacity-50 disabled:transform-none`}
    >
      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          <span>Processing...</span>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <span>Start Free Trial</span>
            <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="text-sm opacity-80 font-normal">
            7-day trial • Then ${product.price}/month
          </div>
        </div>
      )}
    </button>
  )
}