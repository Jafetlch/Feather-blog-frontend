import React from 'react'

export const ImageContainer = ({
  children,
  image,
  componentClass = { undefined },
  heightImage,
  widthImage,
  className
}) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: heightImage || '400px',
        width: widthImage || '100%'
      }}
    >
      {children}
    </div>
  )
}
