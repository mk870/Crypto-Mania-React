import React from 'react'
import { FooterStyles } from './FooterStyles'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <FooterStyles>
      <div className="info">
        <span>CryptoMania</span> 
        <span>All Rights Reserved</span> 
      </div>
      <div className="links">
        <span onClick={()=>navigate('/')}>Home</span>
        <span onClick={()=>navigate('/cryptoexchanges')}>Exchanges</span>
        <span onClick={()=>navigate('/news')}>News</span>
      </div>
    </FooterStyles>
  )
}

export default Footer