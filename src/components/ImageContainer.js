import React from 'react'

export const ImageContainer = ({
  children,
  image,
  componentClass = { undefined },
  heightImage
}) => {
  return (
    <div
      className={componentClass}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: heightImage || '400px'
      }}
    >
      {children}
    </div>
  )
}
