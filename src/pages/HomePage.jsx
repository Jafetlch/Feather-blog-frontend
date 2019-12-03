import React from 'react'

import { Navigation } from '../components/layout/Navigation'
import { Content } from '../components/layout/Content'
import { PostProvider } from '../context'

export const HomePage = () => {
  return (
    <>
      <Navigation />
      <PostProvider>
        <Content />
      </PostProvider>
      {/* <Footer /> */}
    </>
  )
}
