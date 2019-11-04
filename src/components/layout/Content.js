import React from 'react'

import { SideSection } from './SideSection'
import { PostSection } from './PostSection'
import { CenterSection } from './CenterSection'

export const Content = () => {
  return (
    <main>
      <div className="container">
        <div className="h70" />
        <div className="row">
          <SideSection componentClass="col l3 xl2" />
          <CenterSection componentClass="col l9 xl3 hide-m-down" />
          <PostSection componentClass="col s12 xl6 hide-l-down " />
        </div>
      </div>
    </main>
  )
}
