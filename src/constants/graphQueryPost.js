export const postQuery = id => {
  return {
    query: `query Post($id: ID!){
      post(id: $id) {
        _id
        title
        image
        content
        createdAt
        creator {
          username
        }
      }
    }`,
    variables: {
      id: id
    }
  }
}
