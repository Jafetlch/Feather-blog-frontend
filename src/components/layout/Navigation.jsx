import React from 'react'

import logo from '../../assets/logo.svg'
import perfil from '../../assets/perfil.svg'

import { ImageContainer } from '../ImageContainer'

export const Navigation = () => {
  return (
    <header className="container">
      <ImageContainer className={'logo'} image={logo} />
      <div className="center-bar" />
      <ImageContainer className="perfil" image={perfil} />
    </header>
  )
}
