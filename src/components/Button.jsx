import React from 'react'

export const Button = ({
  content,
  bg = 'transparent',
  mrt = '10',
  mrb = '0',
  click,
  disable = false
}) => {
  return (
    <button
      onClick={click}
      style={{
        backgroundColor: bg,
        marginTop: `${mrt}px`,
        marginBottom: `${mrb}px`
      }}
      disabled={disable}
    >
      {content}
    </button>
  )
}
