import axios from '../plugins/axios'

export const fetchData = query => {
  axios({
    method: 'POST',
    data: query
  })
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err))
}
