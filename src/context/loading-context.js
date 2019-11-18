import React, { createContext, useContext } from 'react'
import { useLoading } from '../hooks/'

export const LoadingContext = createContext()

export const LoadingProvider = ({ children }) => {
  const { loading, setLoading } = useLoading()

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoadingValues = () => useContext(LoadingContext)
