export const loginQuery = (email, pass) => {
  return {
    query: `
    query Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        userId
        token
        userId
      }
    }`,
    variables: {
      email: email,
      password: pass
    }
  }
}
