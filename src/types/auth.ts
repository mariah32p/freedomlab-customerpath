export interface UserProfile {
  id: string
  user_id: string
  email: string
  display_name?: string | null
  avatar_url?: string | null
  created_at: string
  updated_at: string
}

export interface AuthState {
  user: any | null
  profile: UserProfile | null
  isLoading: boolean
  isAuthenticated: boolean
}