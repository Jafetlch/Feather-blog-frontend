import React from 'react'

export const Input = ({
  type = 'text',
  name = 'text',
  autoFocus = true,
  required = true,
  span,
  value,
  getValue
}) => {
  return (
    <div className="form-control">
      <input
        type={type}
        name={name}
        value={value}
        autoCorrect="off"
        autoComplete="off"
        autoFocus={autoFocus}
        required={required}
        onChange={e => getValue(e.target.value)}
      />
      <label htmlFor={name}>
        <span className="label-name">{span}</span>
      </label>
    </div>
  )
}
