import React from 'react'
import { ImageContainer } from './ImageContainer'

export const Card = ({ image = 'undefine', title, content, date, tags }) => {
  return (
    <div className="card">
      <div className="card-content">
        {!tags && <div className="card-content-title">{title}</div>}
        {content && (
          <div className="card-content-content">
            <p>{content}</p>
          </div>
        )}
        <div className="card-content-date">
          {new Date(date).toLocaleDateString()}
        </div>
        {tags}
      </div>
      <ImageContainer
        componentClass="card-img"
        image={image}
        widthImage={'190px'}
        heightImage={'170px'}
      />
    </div>
  )
}
