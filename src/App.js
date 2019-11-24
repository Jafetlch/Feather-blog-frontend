import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

// import { Navigation } from './components/layout/Navigation'
import { Content } from './components/layout/Content'
// import { Footer } from './components/layout/Footer'
import { PostProvider } from './context'
import { Login } from './pages/Login'
import { useLoginValues } from './context/login-context'

export const App = () => {
  const { user } = useLoginValues()
  return (
    <Router>
      {!user && <Login />}
      {/* <Navigation /> */}
      {/* <PostProvider>
          <Content />
        </PostProvider> */}
      {/* <Footer /> */}
    </Router>
  )
}
