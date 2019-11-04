import { useState, useEffect } from 'react'
import axios from '../plugins/axios'
import { fetchData } from '../helpers/fetchData'

const query = {
  query: `{
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
  const [posts, setPosts] = useState([
    {
      _id: '5dbeaa28d6c47d50349d8760',
      title: 'test 01',
      image: 'url',
      content: 'content test 01',
      creator: {
        username: 'F34th3r'
      }
    },
    {
      _id: '5dbeaa35d6c47d50349d8762',
      title: 'test 02',
      image: 'url',
      content: 'content test 02',
      creator: {
        username: 'F34th3r'
      }
    }
  ])

  return { posts, setPosts }
}
