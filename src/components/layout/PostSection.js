import React from 'react'

import image from '../../assets/images/bg-test.jpg'
import { Card } from '../Card'

export const PostSection = ({ componentClass = { undefined } }) => {
  return (
    <div className={componentClass}>
      <div className="h10" />
      <div className="row pl-20">
        <h4 className="text-start pb-20 pl-30">Title 01</h4>
        <Card
          image={image}
          title="Test 00"
          content="content 00"
          large={true}
          tags={
            <div className="tags p-20">
              <span className="tags-item">test</span>
              <span className="tags-item">test 01</span>
            </div>
          }
        />
      </div>
    </div>
  )
}
