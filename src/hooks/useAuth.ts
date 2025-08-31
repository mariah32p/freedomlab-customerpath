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
        .maybeSingle()

      if (error || !profileData) {
        console.error('Error loading profile:', error)
        // If profile doesn't exist, create a basic one
        const { data: userData } = await supabase.auth.getUser()
        const basicProfile: UserProfile = {
          id: userId,
          email: userData.user?.email || '',
          plan: 'basic',
          subscription_status: 'not_started',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
        
        // Try to create the profile in the database
        const { error: insertError } = await supabase
          .from('profiles')
          .insert(basicProfile)
        
        if (!insertError) {
          setProfile(basicProfile)
        }
        setIsLoading(false)
        return
      }

      console.log('Profile loaded:', profileData)
      setProfile(profileData)
      setIsLoading(false)
    } catch (error) {
      console.error('Error in loadProfile:', error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    let mounted = true

    const initAuth = async () => {
      try {
        console.log('Initializing auth...')
        
        // Get initial session
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (!mounted) return

        if (error) {
          console.error('Session error:', error)
          setIsLoading(false)
          return
        }

        if (session?.user) {
          console.log('Initial session found for user:', session.user.email)
          setUser(session.user)
          await loadProfile(session.user.id)
        } else {
          console.log('No initial session found')
        }
        
        setIsLoading(false)
      } catch (error) {
        console.error('Error in initAuth:', error)
        if (mounted) {
          setIsLoading(false)
        }
      }
    }

    // Initialize auth
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
          setIsLoading(false)
        }
      }
    )

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, []) // Empty dependency array - only run once

  // Separate effect for real-time profile updates
  useEffect(() => {
    if (!user?.id) return

    console.log('Setting up real-time profile subscription for user:', user.id)

    const profileSubscription = supabase
      .channel(`profile-changes-${user.id}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'profiles',
          filter: `id=eq.${user.id}`
        },
        (payload) => {
          console.log('Profile updated via real-time:', payload)
          if (payload.eventType === 'UPDATE' && payload.new) {
            setProfile(payload.new as UserProfile)
          } else if (payload.eventType === 'INSERT' && payload.new) {
            setProfile(payload.new as UserProfile)
          }
        }
      )
      .subscribe()

    // Also refresh profile data immediately when user changes
    loadProfile(user.id)
    return () => {
      profileSubscription.unsubscribe()
    }
  }, [user?.id])

  return {
    user,
    profile,
    isLoading,
    isAuthenticated: !!user
  }
}