import { UserProfile } from '../types/auth'

export const getRedirectPath = (
  isAuthenticated: boolean, 
  profile: UserProfile | null
): string | null => {
  // If not signed in, send to signup
  if (!isAuthenticated) {
    return '/signup'
  }

  // Everyone goes to dashboard - feature gating happens there
  return '/dashboard'
}