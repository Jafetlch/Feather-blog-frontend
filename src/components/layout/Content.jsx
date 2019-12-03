import React from 'react'

import { SideSection } from './SideSection'
import { PostSection } from './PostSection'
import { usePostValues } from '../../context'
import { CenterSection } from './CenterSection'

export const Content = () => {
  const { postId } = usePostValues()

  return (
    <main className="container">
      <SideSection className="hide-s" />
      {!postId && <CenterSection />}
      {postId && <PostSection />}
    </main>
  )
}
