import React from 'react'

import image from '../../assets/images/bg-test.jpg'
import { Card } from '../Card'
import { usePostValues } from '../../context'

import img from '../../assets/images/bg-test.jpg'
import { LoadingOrError } from '../LoadingOrError'
import { ImageContainer } from '../ImageContainer'

export const PostSection = ({ className }) => {
  const { post, postError, postLoading, setPostId } = usePostValues()

  return (
    <div className={className}>
      <LoadingOrError
        error={postError}
        loading={postLoading}
        content={
          <div className="post-section">
            <div className="post-section-title">
              How To Write Better Code in React
            </div>
            <div className="post-section-fragment">
              9 Useful Tips for writing better code in React: Learn about
              Linting, propTypes, PureComponent and more.
            </div>
            <ImageContainer image={img} height="330px" width="100%" />
            <div className="post-section-content">
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes. In this post, I will show you a few tips that will
              help you become a better React Developer. I will cover a range of
              things from tooling to actual code style, which can help you
              improve your skill with React. <br />
              <br />
              So anytime we have a PropType that’s used in our component, we
              need to set a propType for it. As in, we need to tell React that
              userIsLoaded is always going to be a boolean value. And again if
              we say that userIsLoaded is not required then we’re going to need
              to have a default prop. If it is required, then we don’t have to
              define a default prop for it. However, the rule also states that
              you shouldn’t have an ambiguous propTypes like object or array.
              This is why we are using shape to validate user, which has another
              an id inside it, which has a propType of string, and the entire
              user object is required. Making sure you have your propTypes and
              defaultProps set up on every single component that uses props will
              go a long way. The moment those props don’t get the data that they
              are expecting, your error log will let you know that you are
              either passing in something incorrectly or something that is
              expecting it is not there, making error finding just way easier
              especially if you are writing a lot of reusable components. It
              also makes them a little bit more self-documenting.
            </div>
          </div>
        }
      />
    </div>
  )
}
