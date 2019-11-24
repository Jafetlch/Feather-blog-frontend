import React from 'react'

export const Input = ({
  type = 'text',
  name = 'text',
  autoFocus = true,
  required = true,
  span,
  getValue
}) => {
  return (
    <div className="form-control">
      <input
        type={type}
        name={name}
        autocorrect="off"
        autocomplete="off"
        autoFocus={autoFocus}
        required={required}
        onChange={e => getValue(e.target.value)}
      />
      <label for={name}>
        <span className="label-name">{span}</span>
      </label>
    </div>
  )
}
