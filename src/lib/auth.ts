import { supabase } from './supabase'

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error.message)
      throw error
    }
    // Let the auth state change handle the redirect naturally
    console.log('Sign out successful')
  } catch (error) {
    console.error('Sign out failed:', error)
    throw error
  }
}

export const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) {
      console.error('Error getting user:', error.message)
      return null
    }
    return user
  } catch (error) {
    console.error('Get user failed:', error)
    return null
  }
}

export const getSession = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession()
    if (error) {
      console.error('Error getting session:', error.message)
      return null
    }
    return session
  } catch (error) {
    console.error('Get session failed:', error)
    return null
  }
}