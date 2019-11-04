import { fetchData } from '../helpers/fetchData'

const query = {
  query: `{
    posts {
      _id
      title
      image
      content
      creator {
        username
      }
    }
  }`
}

export const postReducer = (state, action) => {
  switch (action.type) {
    case 'LIST':
      state = fetchData(query)
      return state

    default:
      return state
  }
}
