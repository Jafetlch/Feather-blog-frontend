import { useState, useEffect } from 'react'
import axios from '../plugins/axios'
import { loginQuery } from '../constants/graphQueryLogin'

export const useLogin = (email, pwd) => {
  const [user, setUser] = useState({})
  const [loginError, setLoginError] = useState(false)
  const [loginLoading, setLoginLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoginLoading(true)
      try {
        const response = await axios({
          method: 'POST',
          data: loginQuery(email, pwd)
        })
        setUser(response.data.data.user)
        setLoginLoading(false)
      } catch (err) {
        setLoginError(true)
        console.log(err)
      }
    }
    fetchData()
  }, [email, pwd])

  return {
    user,
    setUser,
    loginError,
    setLoginError,
    loginLoading,
    setLoginLoading
  }
}
