import React from 'react'

import logo from '../../assets/images/logo.svg'
import svg from '../../assets/logo.svg'

export const SideSection = ({ componentClass = { undefined } }) => {
  return (
    <div className={componentClass} style={{ width: '271px' }}>
      <img src={svg} alt="logo" style={{ width: '100%' }} />
      <h5 className="text-end">Latest posts</h5>
      <h5 className="text-end">Tags</h5>
      <div className="h70" />
      <h6 className="text-end">Login</h6>
      <h6 className="text-end">sign-up</h6>
    </div>
  )
}
