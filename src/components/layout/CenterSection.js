import React from 'react'

import image from '../../assets/images/bg-test.jpg'
import { Card } from '../Card'
import { usePostValues } from '../../context'

import latestPosts from '../../assets/images/latest-posts.svg'

export const CenterSection = ({ componentClass = { undefined } }) => {
  const {
    posts,
    postsLoading,
    postsError,
    setPostId,
    setPost
  } = usePostValues()

  return (
    <div className={componentClass}>
      <div className="row pl-20">
        <div className="text-end" style={{ position: 'relative' }}>
          <img src={latestPosts} alt="latest-post" />
          <div
            className="title"
            style={{
              position: 'absolute',
              right: '0',
              bottom: '8px',
              fontSize: '30px'
            }}
          >
            Latest Posts
          </div>
        </div>
        {postsError ? (
          <div>
            Error...
            <span role="img" aria-label="emoji">
              💔
            </span>
          </div>
        ) : postsLoading ? (
          <div>loading...</div>
        ) : (
          posts.map(post => (
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
              />
            </div>
          ))
        )}
      </div>
    </div>
  )
}
