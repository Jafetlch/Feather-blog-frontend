import React from 'react'

import { SideSection } from './SideSection'
import { PostSection } from './PostSection'
import { usePostValues } from '../../context'
import { CenterSection } from './CenterSection'
import { SideSectionPostUser } from './SideSectionPostUser'

export const Content = () => {
  const { postId } = usePostValues()

  return (
    <main className="container">
      {postId && <SideSection className="hide-s" />}
      {postId && <CenterSection />}
      {!postId && <SideSectionPostUser className="hide-s" />}
      {!postId && <PostSection />}
    </main>
  )
}
