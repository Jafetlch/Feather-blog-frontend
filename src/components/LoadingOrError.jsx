import React from 'react'

export const LoadingOrError = ({
  error,
  msgError = (
    <div>
      Error...
      <span role="img" aria-label="emoji">
        💔
      </span>
    </div>
  ),
  loading,
  msgLoading = <div>loading...</div>,
  content
}) => {
  return error ? msgError : loading ? msgLoading : content
}
