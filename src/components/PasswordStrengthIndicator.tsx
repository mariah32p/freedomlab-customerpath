import React from 'react'
import { 
  PasswordStrength, 
  getPasswordStrengthLabel, 
  getPasswordStrengthColor, 
  getPasswordStrengthBarColor 
} from '../utils/passwordValidation'

interface PasswordStrengthIndicatorProps {
  password: string
  strength: PasswordStrength
  showFeedback?: boolean
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ 
  password, 
  strength, 
  showFeedback = true 
}) => {
  if (!password) return null

  const strengthLabel = getPasswordStrengthLabel(strength.score)
  const strengthColor = getPasswordStrengthColor(strength.score)
  const barColor = getPasswordStrengthBarColor(strength.score)

  return (
    <div className="mt-3">
      {/* Strength Bar */}
      <div className="flex items-center space-x-3 mb-2">
        <div className="flex-1 bg-white/20 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full transition-all duration-300 ${barColor}`}
            style={{ width: `${(strength.score / 4) * 100}%` }}
          />
        </div>
        <span className={`text-sm font-medium ${strengthColor}`}>
          {strengthLabel}
        </span>
      </div>

      {/* Feedback */}
      {showFeedback && strength.feedback.length > 0 && (
        <div className="space-y-1">
          {strength.feedback.map((item, index) => (
            <div key={index} className="flex items-center text-xs text-white/70">
              <svg className="h-3 w-3 mr-2 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      )}

      {/* Success Message */}
      {strength.isValid && (
        <div className="flex items-center text-xs text-green-400 mt-2">
          <svg className="h-3 w-3 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          Password meets security requirements
        </div>
      )}
    </div>
  )
}

export default PasswordStrengthIndicator