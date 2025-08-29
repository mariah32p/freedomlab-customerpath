import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Product } from '../stripe-config'

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
      className={`w-full text-center p-6 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 ${
        isBasic
          ? 'bg-gray-900 hover:bg-gray-800 text-white'
          : 'bg-blue-600 hover:bg-blue-700 text-white'
      } disabled:opacity-50 disabled:transform-none`}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          Processing...
        </div>
      ) : (
        `Get ${product.name}`
      )}
    </button>
  )
}