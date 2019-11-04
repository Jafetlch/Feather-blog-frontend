import Axios from 'axios'

const URI = {
  server: 'http://localhost:8080/feather-graphql'
}

const api = Axios.create({
  baseURL: URI.server,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(
  config => {
    config.headers = {
      Authorization: `Bearer ${'token'}`
    }
    return config
  },
  err => {
    // error
    return Promise.reject(err)
  }
)

export default api
