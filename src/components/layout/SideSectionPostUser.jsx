import React from 'react'
import { ImageContainer } from '../ImageContainer'

// import user_perfil from '../../assets/perfil.svg'
import user_perfil from '../../assets/images/bg-test.jpg'

export const SideSectionPostUser = () => {
  return (
    <div className="post-user-side-section">
      <div className="avatar">
        <ImageContainer image={user_perfil} avatar height="60px" width="60px" />
      </div>
      <div className="username">Alana Russell</div>
      <div className="basic-info">Technical Product</div>
      <div className="other-info">Manager at GitPrime</div>
      <div className="media">@fastalana</div>
    </div>
  )
}
