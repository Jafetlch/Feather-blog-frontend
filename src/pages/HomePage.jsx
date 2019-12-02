import React from 'react'

import { Navigation } from '../components/layout/Navigation'
import { Content } from '../components/layout/Content'
import { Footer } from '../components/layout/Footer'
import { PostProvider } from '../context'

export const HomePage = () => {
  return (
    <>
      <Navigation />
      <PostProvider>
        <Content />
      </PostProvider>
      <Footer />
    </>
  )
}
