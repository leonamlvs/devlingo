import { type ReactNode, useEffect, useState } from 'react'
import { AuthContext, type AuthContextType, type User } from './AuthContext'

interface AuthProviderProps {
  children: ReactNode
}

const STORAGE_KEY = 'devlingo:auth:user'

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      console.log('Restoring user from localStorage:', raw)

      if (raw) {
        const savedUser: User = JSON.parse(raw)
        setUser(savedUser)
      }
    } catch (err) {
      console.log('Failed to restore session:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const login = (email: string, password: string) => {}

  const logout = () => {}

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
