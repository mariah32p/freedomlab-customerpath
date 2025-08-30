import { useState, useEffect } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import { UserProfile, AuthState } from '../types/auth'

export const useAuth = (): AuthState => {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const loadProfile = async (userId: string) => {
    try {
      console.log('Loading profile for user:', userId)
      
      const { data: profileData, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        console.error('Error loading profile:', error)
        // Create a basic profile if none exists
        const basicProfile: UserProfile = {
          id: userId,
          email: user?.email || '',
          plan: 'basic',
          subscription_status: 'not_started',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
        setProfile(basicProfile)
        return
      }

      console.log('Profile loaded:', profileData)
      setProfile(profileData)
    } catch (error) {
      console.error('Error in loadProfile:', error)
    }
  }

  useEffect(() => {
    let mounted = true

    // Simple timeout to prevent permanent loading
    const timeout = setTimeout(() => {
      if (mounted) {
        console.log('Auth timeout reached, stopping loading')
        setIsLoading(false)
      }
    }, 3000)

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
          await loadProfile(session.user.id)
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
          await loadProfile(session.user.id)
        } else {
          setUser(null)
          setProfile(null)
        }
        
        setIsLoading(false)
      }
    )

    // Subscribe to real-time profile changes
    const profileSubscription = supabase
      .channel('profile-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'profiles',
          filter: user ? `id=eq.${user.id}` : undefined
        },
        (payload) => {
          console.log('Profile updated via real-time:', payload)
          if (payload.new && mounted) {
            setProfile(payload.new as UserProfile)
          }
        }
      )
      .subscribe()

    return () => {
      mounted = false
      subscription.unsubscribe()
      profileSubscription.unsubscribe()
      clearTimeout(timeout)
    }
  }, [user?.id])

  return {
    user,
    profile,
    isLoading,
    isAuthenticated: !!user
  }
}