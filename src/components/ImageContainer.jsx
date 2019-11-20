import React from 'react'

export const ImageContainer = ({
  children,
  image,
  componentClass = { undefined },
  heightImage,
  widthImage
}) => {
  return (
    <div
      className={componentClass}
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
