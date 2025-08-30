export interface UserProfile {
  id: string
  email: string
  plan: 'basic' | 'pro'
  subscription_status: 'not_started' | 'trialing' | 'active' | 'past_due' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'unpaid' | 'paused'
  trial_ends_at?: string
  current_period_end?: string
  customer_id?: string
  subscription_id?: string
  payment_issue_since?: string
  created_at: string
  updated_at: string
}

export interface AuthState {
  user: any | null
  profile: UserProfile | null
  isLoading: boolean
  isAuthenticated: boolean
}