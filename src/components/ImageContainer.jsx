import React from 'react'

export const ImageContainer = ({
  children,
  image,
  className,
  height,
  width,
  avatar = false
}) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: height,
        width: width,
        borderRadius: avatar ? '100%' : '0px'
      }}
    >
      {children}
    </div>
  )
}
