import { useState, useEffect } from 'react'
import axios from '../plugins/axios'

import { postsQuery, postQuery } from '../constants/graphQuery'

export const useSelectedPost = () => {
  const [postId, setPostId] = useState(null)
  const [post, setPost] = useState('')
  const [postError, setPostError] = useState(false)
  const [postLoading, setPostLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setPostLoading(true)
      try {
        const response = await axios({
          method: 'POST',
          data: postQuery(postId)
        })
        setPost(response.data.data.post)
        setPostLoading(false)
      } catch (err) {
        setPostError(true)
        console.log(err)
      }
    }
    if (postId !== null) {
      fetchData()
    }
  }, [postId])

  return {
    post,
    setPost,
    postError,
    setPostError,
    postLoading,
    setPostLoading,
    postId,
    setPostId
  }
}

export const usePosts = () => {
  const [posts, setPosts] = useState([])
  const [postsError, setPostsError] = useState(false)
  const [postsLoading, setPostsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setPostsLoading(true)
      try {
        const response = await axios({
          method: 'POST',
          data: postsQuery()
        })
        setPosts(response.data.data.posts)
        setPostsLoading(false)
      } catch (err) {
        setPostsError(true)
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return {
    posts,
    setPosts,
    postsError,
    setPostsError,
    postsLoading,
    setPostsLoading
  }
}
