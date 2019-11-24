import React, { createContext, useContext } from 'react'
import { useLogin } from '../hooks'

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
  const { user, loginError, loginLoading } = useLogin()

  return (
    <LoginContext.Provider value={(user, loginError, loginLoading)}>
      {children}
    </LoginContext.Provider>
  )
}

export const useLoginValues = () => useContext(LoginContext)
