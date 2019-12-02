import axios from '../plugins/axios'
import { loginQuery } from '../constants/graphQueryLogin'

export const login = async (email, password) => {
  try {
    const response = await axios({
      method: 'POST',
      data: loginQuery(email, password)
    })
    localStorage.setItem('user', JSON.stringify(response.data.data.login))
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}

export const logout = () => {
  localStorage.removeItem('user')
}
