import React from 'react'

import image from '../../assets/images/bg-test.jpg'
import { Card } from '../Card'
import { usePostValues } from '../../context/PostContext'

export const CenterSection = ({ componentClass = { undefined } }) => {
  const { posts } = usePostValues()
  return (
    <div className={componentClass}>
      <div className="h10" />
      <div className="row pl-20">
        <h4 className="text-start pb-20">Latest Posts</h4>
        {posts.map(post => (
          <Card
            key={post._id}
            image={image}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
    </div>
  )
}
