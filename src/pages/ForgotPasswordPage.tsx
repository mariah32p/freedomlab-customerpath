import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { supabase } from '../lib/supabase'

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      // Store current environment so we can redirect back here from production
      const currentOrigin = window.location.origin
      localStorage.setItem('customerpath_target_env', currentOrigin)
      
      // Store current environment so we can redirect back here from production
      const currentOrigin = window.location.origin
      localStorage.setItem('customerpath_target_env', currentOrigin)
      
      const redirectUrl = `${window.location.origin}/reset-password`
      console.log('Using redirect URL:', redirectUrl)
      console.log('Current origin:', window.location.origin)
      console.log('Current href:', window.location.href)
      
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: redirectUrl,
        captchaToken: undefined // Explicitly disable captcha for now
      })

      if (error) {
        console.error('Reset password error:', error)
        setError(error.message)
        return
      }

      console.log('Reset password email sent successfully to:', email)
      setIsSuccess(true)
    } catch (err) {
      console.error('Unexpected error:', err)
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
                
                <h1 className="text-2xl font-bold text-white mb-4">Check Your Email</h1>
                <p className="text-white/80 mb-6 leading-relaxed">
                  We've sent a password reset link to <strong>{email}</strong>. 
                  Click the link in the email to reset your password.
                </p>
                
                <div className="space-y-4">
                  <Link 
                    to="/signin" 
                    className="block w-full bg-brand-teal hover:bg-brand-teal/90 text-white py-3 rounded-lg font-semibold transition-all"
                  >
                    Back to Sign In
                  </Link>
                  
                  <button 
                    onClick={() => {
                      setIsSuccess(false)
                      setEmail('')
                    }}
                    className="block w-full border border-white/30 text-white hover:bg-white/10 py-3 rounded-lg font-semibold transition-all"
                  >
                    Try Different Email
                  </button>
                </div>
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
              <h1 className="text-2xl font-bold text-white mb-2">Reset Your Password</h1>
              <p className="text-white/80">Enter your email and we'll send you a reset link</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-200 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent backdrop-blur-sm"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-brand-teal hover:bg-brand-teal/90 disabled:bg-brand-teal/50 text-white py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl disabled:transform-none disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending Reset Link...' : 'Send Reset Link'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/70 text-sm">
                Remember your password?{' '}
                <Link to="/signin" className="text-brand-teal hover:text-brand-teal/80 font-semibold transition-colors">
                  Sign In
                </Link>
              </p>
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

export default ForgotPasswordPage