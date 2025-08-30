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
    
    if (isLoading) {
      console.log('Still loading, waiting...')
      return
    }

    // Skip route guard for public pages
    const publicPaths = ['/', '/pricing', '/signup', '/signin']
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
