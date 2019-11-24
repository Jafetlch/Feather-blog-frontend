export const postsQuery = () => {
  return {
    query: `query {
      posts {
        _id
        title
        image
        content
        createdAt
        creator {
          username
        }
      }
    }`
  }
}
