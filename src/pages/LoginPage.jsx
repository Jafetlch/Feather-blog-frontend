import React, { useState, useEffect } from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

import { login } from '../services/userService'

export const LoginPage = ({ history, location }) => {
  const [email, setEmail] = useState('jafetlopezch@gmail.com')
  const [pass, setPass] = useState('secret')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const loginStyle = { maxWidth: '444px', marginTop: '150px' }

  useEffect(() => {
    if (localStorage.getItem('user')) {
      history.push('/')
    }
  }, [history])

  const handleSumbit = e => {
    e.preventDefault()
    if (!email && pass) {
      return
    }
    setLoading(true)
    if (!login(email, pass)) {
      setLoading(false)
      setError('Some Error')
      console.log(error)
    }
    const { from } = location.state || { from: { pathname: '/' } }
    // console.log(from)
    history.push(from)
    setLoading(false)
  }

  return (
    <div className="container" style={loginStyle}>
      <div className="paper flex flex-center flex-colum">
        <h6>SignIn</h6>
        <Input name="email" span="email" value={email} getValue={setEmail} />
        <Input
          type="password"
          name="password"
          span="password"
          autoFocus={false}
          value={pass}
          getValue={setPass}
        />
        <Button
          content="login"
          disable={loading}
          mrt="50"
          click={handleSumbit}
        />
      </div>
    </div>
  )
}
