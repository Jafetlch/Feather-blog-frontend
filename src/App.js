import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'
import { PrivateRoute } from './components/PrivateRoute'

export const App = () => {
  return (
    <Router>
      <PrivateRoute exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </Router>
  )
}
