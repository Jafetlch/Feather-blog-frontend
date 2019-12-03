import React from 'react'

export const SideSection = ({ className = 'undefined' }) => {
  return (
    <div className={className} style={{ width: '25%' }}>
      <div className="side-menu">
        <div className="side-menu-item">
          <span>-</span> latest posts
        </div>
        <div className="side-menu-item">
          <span>+</span> tags
        </div>
        <div className="h60" />
        <div className="h60" />
        <div className="side-menu-item">settings</div>
        <div className="side-menu-item">logout</div>
        <div className="text-end side-menu-item-version">v - 2.0</div>
      </div>
    </div>
  )
}
