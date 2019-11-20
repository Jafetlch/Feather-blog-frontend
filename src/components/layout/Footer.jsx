import React from 'react'

import lineF1 from '../../assets/images/lines-F1F1F1.svg'
import simpleLine from '../../assets/images/simple-line.svg'
import footer from '../../assets/images/footer-r.svg'

export const Footer = () => {
  return (
    <footer className="container">
      <div className="col m2 l3 hide-s" style={{ width: '271px' }}>
        <img src={lineF1} alt="lineF1" />
      </div>
      <div className="col s12 m7 l7 hide-s">
        <img src={simpleLine} alt="simpleLine" />
      </div>
      <div className="col m2 l2">
        <img src={footer} alt="footer" />
      </div>
    </footer>
  )
}
