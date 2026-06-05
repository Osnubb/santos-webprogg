const isVercelHost =
  typeof window !== 'undefined' && window.location.hostname.endsWith('vercel.app')

export const API_URL = isVercelHost
  ? '/api'
  : import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api'

export const APP_URL = isVercelHost
  ? window.location.origin
  : import.meta.env.VITE_APP_URL || 'http://127.0.0.1:5174'

export const AUTH_STORAGE_KEY = 'santos-auth-user'
