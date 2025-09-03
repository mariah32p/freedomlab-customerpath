import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { getRedirectPath } from '../utils/routeGuard'

interface RouteGuardProps {
  children: React.ReactNode
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const { user, profile, isLoading, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleHardRefresh = () => {
    // Clear all local storage and session storage
    localStorage.clear()
    sessionStorage.clear()
    
    // Force a complete page reload
    window.location.href = '/'
  }

  useEffect(() => {
    console.log('RouteGuard check:', { isLoading, isAuthenticated, path: location.pathname, profile })
    
    // Handle Supabase redirect from production with recovery tokens
    const handleSupabaseRecoveryRedirect = async () => {
      const url = new URL(window.location.href)
      const currentOrigin = window.location.origin
      
      // Check if we're on production and need to redirect to a different environment
      const isProduction = currentOrigin.includes('customerpath-production.netlify.app')
      
      if (url.hash) {
        const hashParams = new URLSearchParams(url.hash.replace('#', ''))
        const accessToken = hashParams.get('access_token')
        const refreshToken = hashParams.get('refresh_token')
        const type = hashParams.get('type')
        
        if (type === 'recovery' && accessToken && refreshToken) {
          console.log('Found recovery tokens in URL, setting session and redirecting...')
          
          // If we're on production, try to redirect to the environment that initiated the request
          if (isProduction) {
            // Check for a stored target environment or use a default dev environment
            const targetOrigin = localStorage.getItem('customerpath_target_env') || 
                                sessionStorage.getItem('customerpath_target_env') ||
                                'http://localhost:5173' // fallback to common dev port
            
            console.log('Redirecting from production to:', targetOrigin)
            window.location.href = `${targetOrigin}/reset-password#access_token=${accessToken}&refresh_token=${refreshToken}&type=recovery`
            return true
          }
          
          try {
            const { error: sessionError } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken
            })
            
            if (!sessionError) {
              // Clear the hash and redirect to reset password
              window.history.replaceState({}, document.title, window.location.pathname)
              navigate('/reset-password', { replace: true })
              return true
            }
          } catch (error) {
            console.error('Error setting recovery session:', error)
          }
        }
      }
      return false
    }
    
    if (isLoading) {
      console.log('Still loading, waiting...')
      // Check for recovery redirect even while loading
      handleSupabaseRecoveryRedirect()
      return
    }
    
    // Handle recovery redirect first
    if (handleSupabaseRecoveryRedirect()) {
      return
    }

    // Skip route guard for public pages
    const publicPaths = ['/', '/pricing', '/signup', '/signin', '/forgot-password', '/reset-password', '/demo', '/success']
    if (publicPaths.includes(location.pathname)) {
      console.log('Public path, skipping guard')
      return
    }

    // Apply route guard logic
    const redirectPath = getRedirectPath(isAuthenticated, profile)
    
    if (redirectPath && redirectPath !== location.pathname) {
      console.log('Redirecting from', location.pathname, 'to', redirectPath)
      navigate(redirectPath, { replace: true })
    } else {
      console.log('No redirect needed, staying on', location.pathname)
    }
  }, [isLoading, isAuthenticated, profile, location.pathname, navigate])

  // Show loading spinner while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-teal mx-auto mb-4"></div>
          <p className="text-gray-600 font-semibold">Loading your account...</p>
          <p className="text-gray-500 text-sm mt-2">Checking authentication status...</p>
          <button 
            onClick={handleHardRefresh}
            className="mt-4 text-brand-teal hover:text-brand-teal/80 text-sm font-medium transition-colors"
          >
            Hard Refresh (Clear All Data)
          </button>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export default RouteGuard