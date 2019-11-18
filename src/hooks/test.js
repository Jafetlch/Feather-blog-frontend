import { useState, useEffect } from 'react'
import axios from '../plugins/axios'
import Axios from 'axios'

const query = {
  query: `query {
    posts {
      _id
      title
      image
      content
      creator {
        username
      }
    }
  }`
}

export const usePosts = () => {
  // const [posts, setPosts] = useState([
  //   {
  //     _id: '5dbeaa28d6c47d50349d8760',
  //     title: 'test 01',
  //     image: 'url',
  //     content: 'content test 01',
  //     creator: {
  //       username: 'F34th3r'
  //     }
  //   },
  //   {
  //     _id: '5dbeaa35d6c47d50349d8762',
  //     title: 'test 02',
  //     image: 'url',
  //     content: 'content test 02',
  //     creator: {
  //       username: 'F34th3r'
  //     }
  //   }
  // ])
  const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   const randomUser = async () => {
  //     const response = await Axios.get('https://api.randomuser.me/')
  //     console.log(response.data.results[0])
  //   }
  //   randomUser()
  // }, [])
  useEffect(() => {
    const fetchData = async () => {
      const URI = 'http://localhost:8080/feather-graphql'
      const response = await Axios({
        baseURL: URI,
        method: 'POST',
        data: query,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response.data.data.posts)
      setPosts(response.data.data.posts)
    }
    const fetchTest = async () => {
      const response = await axios({
        method: 'POST',
        data: query
      })
      console.log(response.data.data.posts)
      setPosts(response.data.data.posts)
    }
    fetchTest()
  }, [])

  return { posts, setPosts }
}
