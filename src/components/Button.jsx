import React from 'react'

export const Button = ({
  content,
  bg = 'transparent',
  mrt = '10',
  mrb = '0'
}) => {
  return (
    <button
      style={{
        backgroundColor: bg,
        marginTop: `${mrt}px`,
        marginBottom: `${mrb}px`
      }}
    >
      {content}
    </button>
  )
}
