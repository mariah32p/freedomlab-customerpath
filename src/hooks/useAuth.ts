import { useState, useEffect } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import { UserProfile, AuthState } from '../types/auth'

export const useAuth = (): AuthState => {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    // Simple timeout to prevent permanent loading
    const timeout = setTimeout(() => {
      if (mounted) {
        console.log('Auth timeout reached, stopping loading')
        setIsLoading(false)
      }
    }, 2000)

    const initAuth = async () => {
      try {
        console.log('Getting initial session...')
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (!mounted) return

        if (error) {
          console.error('Session error:', error)
          setIsLoading(false)
          return
        }

        if (session?.user) {
          console.log('User found:', session.user.email)
          setUser(session.user)
          
          // Create simple profile without database complexity
          const simpleProfile: UserProfile = {
            id: session.user.id,
            email: session.user.email || '',
            plan: 'basic',
            subscription_status: 'not_started',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
          
          setProfile(simpleProfile)
        } else {
          console.log('No user session found')
        }
      } catch (error) {
        console.error('Error in initAuth:', error)
      } finally {
        if (mounted) {
          clearTimeout(timeout)
          setIsLoading(false)
        }
      }
    }

    initAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email)
        
        if (!mounted) return
        
        if (session?.user) {
          setUser(session.user)
          
          // Create simple profile
          const simpleProfile: UserProfile = {
            id: session.user.id,
            email: session.user.email || '',
            plan: 'basic',
            subscription_status: 'not_started',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
          
          setProfile(simpleProfile)
        } else {
          setUser(null)
          setProfile(null)
        }
        
        setIsLoading(false)
      }
    )

    return () => {
      mounted = false
      subscription.unsubscribe()
      clearTimeout(timeout)
    }
  }, [])

  return {
    user,
    profile,
    isLoading,
    isAuthenticated: !!user
  }
}