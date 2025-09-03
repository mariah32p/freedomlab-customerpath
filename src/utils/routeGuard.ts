import { UserProfile } from '../types/auth'

export const isInGracePeriod = (paymentIssueSince: string | null): boolean => {
  if (!paymentIssueSince) return false
  
  const issueDate = new Date(paymentIssueSince)
  const now = new Date()
  const daysSinceIssue = Math.floor((now.getTime() - issueDate.getTime()) / (1000 * 60 * 60 * 24))
  
  return daysSinceIssue <= 30
}

export const getRedirectPath = (
  isAuthenticated: boolean, 
  profile: UserProfile | null
): string | null => {
  // If not signed in, send to signup
  if (!isAuthenticated) {
    return '/signup'
  }

  // If no profile yet (shouldn't happen but safety check)
  if (!profile) {
    return '/signup'
  }

  // If status is trialing or active, send to dashboard
  if (profile.subscription_status === 'trialing' || profile.subscription_status === 'active') {
    return '/dashboard'
  }

  // If status is incomplete but has a valid trial (webhook race condition), treat as trialing
  if (profile.subscription_status === 'incomplete' && profile.trial_ends_at) {
    const trialEnd = new Date(profile.trial_ends_at)
    const now = new Date()
    if (trialEnd > now) {
      return '/dashboard'
    }
  }

  // If past_due and within 30-day grace period, allow dashboard (with banner)
  if (profile.subscription_status === 'past_due' && isInGracePeriod(profile.payment_issue_since)) {
    return '/dashboard'
  }

  // Otherwise (not_started, canceled, expired grace period), send to get-started
  return '/get-started'
}

export const shouldShowPaymentBanner = (profile: UserProfile | null): boolean => {
  if (!profile) return false
  
  return profile.subscription_status === 'past_due' && isInGracePeriod(profile.payment_issue_since)
}

export const getTrialDaysRemaining = (trialEndsAt: string | null): number => {
  if (!trialEndsAt) return 0
  
  const trialEnd = new Date(trialEndsAt)
  const now = new Date()
  const diffTime = trialEnd.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  return Math.max(0, diffDays)
}