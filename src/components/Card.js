import React from 'react'
import { ImageContainer } from './ImageContainer'

export const Card = ({
  image = 'undefine',
  title,
  content,
  large = false,
  tags
}) => {
  return (
    <div className="card">
      <div className="card-content">
        <ImageContainer
          componentClass="card-img"
          image={image}
          heightImage={large ? '400px' : '250px'}
        />
        {tags}
        {!tags && <h6 className="pl-20">{title}</h6>}
        <p className="pl-20">{content}</p>
      </div>
    </div>
  )
}
