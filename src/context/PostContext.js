import React, { createContext, useContext } from 'react'
import { usePosts } from '../hooks'

export const PostContext = createContext()

export const PostProvider = ({ children }) => {
  const { posts, setPosts } = usePosts()

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  )
}

export const usePostValues = () => useContext(PostContext)
