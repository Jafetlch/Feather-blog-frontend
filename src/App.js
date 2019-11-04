import React from 'react'
import './App.scss'

import { BrowserRouter as Router } from 'react-router-dom'

import { Navigation } from './components/layout/Navigation'
import { Content } from './components/layout/Content'
import { Footer } from './components/layout/Footer'
import { PostProvider } from './context/PostContext'

export const App = () => {
  return (
    <Router>
      <Footer />
      <Navigation />
      <PostProvider>
        <Content />
      </PostProvider>
      <Footer />
    </Router>
  )
}
