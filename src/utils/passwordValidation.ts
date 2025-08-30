export interface PasswordStrength {
  score: number // 0-4 (0 = very weak, 4 = very strong)
  feedback: string[]
  isValid: boolean
}

export function validatePasswordStrength(password: string): PasswordStrength {
  const feedback: string[] = []
  let score = 0

  // Length check
  if (password.length < 8) {
    feedback.push('At least 8 characters')
  } else if (password.length >= 12) {
    score += 1
  }

  // Uppercase check
  if (!/[A-Z]/.test(password)) {
    feedback.push('At least one uppercase letter')
  } else {
    score += 1
  }

  // Lowercase check
  if (!/[a-z]/.test(password)) {
    feedback.push('At least one lowercase letter')
  } else {
    score += 1
  }

  // Number check
  if (!/\d/.test(password)) {
    feedback.push('At least one number')
  } else {
    score += 1
  }

  // Special character check
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    feedback.push('At least one special character')
  } else {
    score += 1
  }

  // Common patterns to avoid
  if (/(.)\1{2,}/.test(password)) {
    feedback.push('Avoid repeating characters')
    score = Math.max(0, score - 1)
  }

  if (/123|abc|qwe|password|admin/i.test(password)) {
    feedback.push('Avoid common patterns')
    score = Math.max(0, score - 1)
  }

  const isValid = password.length >= 8 && score >= 3

  return {
    score: Math.min(4, score),
    feedback,
    isValid
  }
}

export function getPasswordStrengthLabel(score: number): string {
  switch (score) {
    case 0:
    case 1:
      return 'Weak'
    case 2:
      return 'Fair'
    case 3:
      return 'Good'
    case 4:
      return 'Strong'
    default:
      return 'Weak'
  }
}

export function getPasswordStrengthColor(score: number): string {
  switch (score) {
    case 0:
    case 1:
      return 'text-red-400'
    case 2:
      return 'text-yellow-400'
    case 3:
      return 'text-blue-400'
    case 4:
      return 'text-green-400'
    default:
      return 'text-red-400'
  }
}

export function getPasswordStrengthBarColor(score: number): string {
  switch (score) {
    case 0:
    case 1:
      return 'bg-red-400'
    case 2:
      return 'bg-yellow-400'
    case 3:
      return 'bg-blue-400'
    case 4:
      return 'bg-green-400'
    default:
      return 'bg-red-400'
  }
}