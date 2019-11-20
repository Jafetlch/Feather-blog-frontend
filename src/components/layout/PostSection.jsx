import React from 'react'

import image from '../../assets/images/bg-test.jpg'
import { Card } from '../Card'
import { usePostValues } from '../../context'

import latestPosts from '../../assets/images/latest-posts.svg'
import { LoadingOrError } from '../LoadingOrError'

export const PostSection = ({ componentClass = { undefined } }) => {
  const { post, postError, postLoading, setPostId } = usePostValues()

  return (
    <div className={componentClass}>
      <div className="row pl-20">
        <LoadingOrError
          error={postError}
          loading={postLoading}
          content={
            <>
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
                  {post.title}
                  <button className="btn" onClick={() => setPostId(null)}>
                    x
                  </button>
                </div>
              </div>
              <Card
                image={image}
                title={post.title}
                content={post.content}
                date={post.createdAt}
                large={true}
                tags={
                  <div className="tags p-20">
                    <span className="tags-item">test</span>
                    <span className="tags-item">test 01</span>
                  </div>
                }
              />
            </>
          }
        />
      </div>
    </div>
  )
}
