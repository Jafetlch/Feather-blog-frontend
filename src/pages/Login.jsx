import React, { useState } from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const loginStyle = { maxWidth: '444px', marginTop: '150px' }
  return (
    <div className="container" style={loginStyle}>
      <div className="paper flex flex-center flex-colum">
        <h6>SignIn</h6>
        <Input name="email" span="email" getValue={setEmail} />
        <Input
          type="password"
          name="password"
          span="password"
          autoFocus={false}
          getValue={setPass}
        />
        <Button content="login" mrt="50" />
      </div>
    </div>
  )
}
