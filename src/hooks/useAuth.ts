import { useState, useEffect } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import { UserProfile, AuthState } from '../types/auth'

export const useAuth = (): AuthState => {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Force reload after 3 seconds if still loading
    const forceReloadTimer = setTimeout(() => {
      console.log('Force reloading due to permanent loading state')
      window.location.reload()
    }, 3000)

    // Get initial session
    const getInitialSession = async () => {
      try {
        console.log('Getting initial session...')
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Session error:', error)
          clearTimeout(forceReloadTimer)
          setIsLoading(false)
          return
        }

        if (session?.user) {
          console.log('User found:', session.user.email)
          setUser(session.user)
          
          // Try to get profile, but don't block on it
          try {
            const { data: profileData } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', session.user.id)
              .maybeSingle()
            
            if (profileData) {
              console.log('Profile found:', profileData)
              setProfile(profileData)
            } else {
              console.log('No profile found, creating new profile in database')
              // Create profile in database
              const { data: newProfile, error: insertError } = await supabase
                .from('profiles')
                .insert({
                  id: session.user.id,
                  email: session.user.email || '',
                  plan: 'basic',
                  subscription_status: 'not_started'
                })
                .select()
                .single()
              
              if (insertError) {
                console.error('Error creating profile:', insertError)
                // Fallback to local profile
                setProfile({
                  id: session.user.id,
                  email: session.user.email || '',
                  plan: 'basic',
                  subscription_status: 'not_started',
                  created_at: new Date().toISOString(),
                  updated_at: new Date().toISOString()
                })
              } else {
                console.log('Profile created:', newProfile)
                setProfile(newProfile)
              }
            }
          } catch (profileError) {
            console.error('Profile error:', profileError)
            // Create default profile on error
            setProfile({
              id: session.user.id,
              email: session.user.email || '',
              plan: 'basic',
              subscription_status: 'not_started',
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            })
          }
        } else {
          console.log('No user session found')
        }
      } catch (error) {
        console.error('Error getting initial session:', error)
      } finally {
        clearTimeout(forceReloadTimer)
        setIsLoading(false)
        console.log('Auth loading complete')
      }
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email)
        clearTimeout(forceReloadTimer)
        
        if (session?.user) {
          setUser(session.user)
          // Set a basic profile for now
          setProfile({
            id: session.user.id,
            email: session.user.email || '',
            plan: 'basic',
            subscription_status: 'not_started',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })
        } else {
          setUser(null)
          setProfile(null)
        }
        setIsLoading(false)
      }
    )

    return () => {
      subscription.unsubscribe()
      clearTimeout(forceReloadTimer)
    }
  }, [])

  return {
    user,
    profile,
    isLoading,
    isAuthenticated: !!user
  }
}