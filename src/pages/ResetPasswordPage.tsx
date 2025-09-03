import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import Header from '../components/Header'
import { supabase } from '../lib/supabase'
import { validatePasswordStrength } from '../utils/passwordValidation'
import PasswordStrengthIndicator from '../components/PasswordStrengthIndicator'

const ResetPasswordPage: React.FC = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isValidSession, setIsValidSession] = useState(false)
  
  const passwordStrength = validatePasswordStrength(password)
  const passwordsMatch = password === confirmPassword
  const showPasswordMismatch = confirmPassword.length > 0 && !passwordsMatch

  useEffect(() => {
    const checkSession = async () => {
      try {
        // Handle case where Supabase redirected to production but we're on a different environment
        const url = new URL(window.location.href)
        const currentOrigin = window.location.origin
        
        // If we're not on the expected environment, check for hash params and redirect
        if (url.hash && !window.location.pathname.includes('reset-password')) {
          const hashParams = new URLSearchParams(url.hash.replace('#', ''))
          const accessToken = hashParams.get('access_token')
          const refreshToken = hashParams.get('refresh_token')
          const type = hashParams.get('type')
          
          if (type === 'recovery' && accessToken && refreshToken) {
            // Set the session with the tokens from the URL
            const { error: sessionError } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken
            })
            
            if (sessionError) {
              console.error('Error setting session:', sessionError)
              setError('Invalid or expired reset link. Please request a new password reset.')
              return
            }
            
            // Redirect to reset password page on current environment
            window.location.href = `${currentOrigin}/reset-password`
            return
          }
        }
        
        // Handle both hash and search params for token
        const hashParams = new URLSearchParams(url.hash.replace('#', ''))
        const tokenHash = hashParams.get('token_hash') || url.searchParams.get('token_hash')

        if (tokenHash) {
          const { error: verifyError } = await supabase.auth.verifyOtp({
            token_hash: tokenHash,
            type: 'recovery'
          })

          if (verifyError) {
            console.error('Error verifying recovery token:', verifyError)
            setError('Invalid or expired reset link. Please request a new password reset.')
            return
          }
        }

        // Check for session after token verification
        const {
          data: { session },
          error
        } = await supabase.auth.getSession()

        if (error || !session?.user) {
          console.error('Session error or missing user:', error)
          setError('Invalid or expired reset link. Please request a new password reset.')
          return
        }

        console.log('Valid password recovery session found')
        setIsValidSession(true)
      } catch (err) {
        console.error('Error checking session:', err)
        setError('Invalid or expired reset link. Please request a new password reset.')
      }
    }

    checkSession()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!passwordStrength.isValid) {
      setError('Please create a stronger password that meets all requirements.')
      return
    }
    
    if (!passwordsMatch) {
      setError('Passwords do not match.')
      return
    }
    
    if (!isValidSession) {
      setError('Invalid session. Please request a new password reset.')
      return
    }
    
    setIsLoading(true)
    setError('')

    try {
      const { error } = await supabase.auth.updateUser({
        password
      })

      if (error) {
        setError(error.message)
        return
      }

      setIsSuccess(true)
      supabase.auth.signOut().catch((signOutErr) => {
        console.error('Sign out error:', signOutErr)
      })
    } catch (err) {
      console.error('Password update error:', err)
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-purple/20 font-montserrat">
        <Header />

        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="max-w-md w-full mx-4 py-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-white mb-4">Password Updated</h1>
                <p className="text-white/80 mb-6">
                  Your password has been reset. You can now sign in with your new password.
                </p>
                <Link
                  to="/signin"
                  className="block w-full bg-brand-teal hover:bg-brand-teal/90 text-white py-3 rounded-lg font-semibold transition-all"
                >
                  Go to Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-purple/20 font-montserrat">
      <Header />
      
      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="max-w-md w-full mx-4 py-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Set New Password</h1>
              <p className="text-white/80">Choose a strong password for your account</p>
              {!isValidSession && !error && (
                <div className="mt-4 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-200 text-sm">Validating reset link...</p>
                </div>
              )}
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-200 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent backdrop-blur-sm"
                    placeholder="Create a secure password"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <PasswordStrengthIndicator 
                  password={password} 
                  strength={passwordStrength}
                  showFeedback={true}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/90 mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent backdrop-blur-sm"
                    placeholder="Confirm your new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {showPasswordMismatch && (
                  <div className="flex items-center text-xs text-red-400 mt-2">
                    <svg className="h-3 w-3 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Passwords do not match
                  </div>
                )}
                {confirmPassword.length > 0 && passwordsMatch && (
                  <div className="flex items-center text-xs text-green-400 mt-2">
                    <svg className="h-3 w-3 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Passwords match
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading || !passwordStrength.isValid || !passwordsMatch || !isValidSession}
                className="w-full bg-brand-teal hover:bg-brand-teal/90 disabled:bg-brand-teal/50 text-white py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl disabled:transform-none disabled:cursor-not-allowed"
              >
                {isLoading ? 'Updating Password...' : 'Update Password'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/signin" className="text-brand-teal hover:text-brand-teal/80 font-semibold transition-colors text-sm">
                Back to Sign In
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/" className="text-white/60 hover:text-white/80 text-sm transition-colors">
              ← Back to CustomerPath
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordPage
