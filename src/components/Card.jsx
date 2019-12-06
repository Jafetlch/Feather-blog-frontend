import React from 'react'
import { ImageContainer } from './ImageContainer'

export const Card = ({ image = 'undefine', title, content, date, tag }) => {
  return (
    <div className="card">
      <ImageContainer
        className="card-img"
        image={image}
        width={'150px'}
        height={'150px'}
      />
      <div className="card-content">
        <div className="post-tag">JavaScript</div>
        <div className="post-title">{title}</div>
        <div className="post-content">
          <p>{content}</p>
        </div>
        <div className="card-content-date">
          {new Date(date).toLocaleDateString()}
        </div>
      </div>
    </div>
  )
}
