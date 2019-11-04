import React from 'react'

export const SideSection = ({ componentClass = { undefined } }) => {
  return (
    <div className={componentClass}>
      <div className="row">
        <h3 className="pb-40">Feather-blog</h3>
        <h6 className="pb-30 pl-20">latest posts</h6>
        <h6 className="pb-30 pl-20">tags</h6>
      </div>
    </div>
  )
}
