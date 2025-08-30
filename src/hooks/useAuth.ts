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
    let profileChannel: ReturnType<typeof supabase.channel> | null = null

    const loadProfile = async (sessionUser: User) => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', sessionUser.id)
          .single()

        if (!mounted) return

        if (error || !data) {
          const simpleProfile: UserProfile = {
            id: sessionUser.id,
            email: sessionUser.email || '',
            plan: 'basic',
            subscription_status: 'not_started',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
          setProfile(simpleProfile)
        } else {
          setProfile(data as UserProfile)
        }
      } catch (err) {
        console.error('Error loading profile:', err)
      }
    }

    const initAuth = async () => {
      try {
        console.log('Getting initial session...')
        const {
          data: { session },
          error
        } = await supabase.auth.getSession()

        if (!mounted) return

        if (error) {
          console.error('Session error:', error)
          return
        }

        if (session?.user) {
          console.log('User found:', session.user.email)
          setUser(session.user)
          await loadProfile(session.user)

          profileChannel = supabase
            .channel(`profile:${session.user.id}`)
            .on(
              'postgres_changes',
              {
                event: '*',
                schema: 'public',
                table: 'profiles',
                filter: `id=eq.${session.user.id}`
              },
              payload => {
                console.log('Profile change received:', payload.new)
                setProfile(payload.new as UserProfile)
              }
            )
            .subscribe()
        } else {
          console.log('No user session found')
        }
      } catch (error) {
        console.error('Error in initAuth:', error)
      } finally {
        if (mounted) {
          setIsLoading(false)
        }
      }
    }

    initAuth()

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session?.user?.email)

      if (!mounted) return

      if (session?.user) {
        setUser(session.user)
        await loadProfile(session.user)
      } else {
        setUser(null)
        setProfile(null)
      }

      setIsLoading(false)
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
      if (profileChannel) profileChannel.unsubscribe()
    }
  }, [])

  return {
    user,
    profile,
    isLoading,
    isAuthenticated: !!user
  }
}
