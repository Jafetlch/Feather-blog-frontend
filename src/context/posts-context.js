import React, { createContext, useContext } from 'react'
import { usePosts, useSelectedPost } from '../hooks'

export const PostContext = createContext()

export const PostProvider = ({ children }) => {
  const { posts, setPosts, postsError, postsLoading } = usePosts()
  const { post, postLoading, postId, setPostId, setPost } = useSelectedPost()

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        postsError,
        postsLoading,
        post,
        setPost,
        postLoading,
        postId,
        setPostId
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

export const usePostValues = () => useContext(PostContext)
