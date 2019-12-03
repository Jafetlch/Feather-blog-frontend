import React from 'react'

import image from '../../assets/images/bg-test.jpg'
import { Card } from '../Card'
import { usePostValues } from '../../context'

import { LoadingOrError } from '../LoadingOrError'

export const CenterSection = ({ className = 'undefined' }) => {
  const {
    posts,
    postsLoading,
    postsError,
    setPostId,
    setPost
  } = usePostValues()

  return (
    <div className={className}>
      <div className="center-section">
        <div className="center-section-search-bar"></div>
        <LoadingOrError
          error={postsError}
          loading={postsLoading}
          content={posts.map(post => (
            <div
              key={post._id}
              onClick={() => {
                setPostId(post._id)
                setPost(post)
              }}
            >
              <Card
                image={image}
                title={post.title}
                date={post.createdAt}
                content={post.content}
                tag={post.tag}
              />
            </div>
          ))}
        />
      </div>
    </div>
  )
}
