import React from 'react'

import { SideSection } from './SideSection'
import { PostSection } from './PostSection'
import { CenterSection } from './CenterSection'
import { usePostValues } from '../../context'

export const Content = () => {
  const { postId } = usePostValues()

  return (
    <main>
      <div className="container">
        <div className="h70" />
        <div className="row">
          <SideSection componentClass="col m2 l3 hide-s" />
          {!postId && <CenterSection componentClass="col s12 m7 l7" />}
          {postId && <PostSection componentClass="col s12 m7 l7" />}
        </div>
      </div>
    </main>
  )
}
