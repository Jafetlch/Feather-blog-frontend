import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

// import { Navigation } from './components/layout/Navigation'
import { Content } from './components/layout/Content'
// import { Footer } from './components/layout/Footer'
import { PostProvider, LoadingProvider } from './context'

export const App = () => {
  return (
    <LoadingProvider>
      <Router>
        {/* <Navigation /> */}
        <PostProvider>
          <Content />
        </PostProvider>
        {/* <Footer /> */}
      </Router>
    </LoadingProvider>
  )
}
