import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorStyles } from './ErrorStyles'

const Errorpage = ({voicePageNavigation,setVoicePageNavigation}) => {
  const navigate = useNavigate()
  useEffect(()=>{
    if (voicePageNavigation) {
      navigate(voicePageNavigation)
    }
    return ()=>{setVoicePageNavigation('')}
  },[voicePageNavigation])
  return (
    <ErrorStyles>
      <h1>Sorry this page does not exist!!!</h1>
    </ErrorStyles>
  )
}

export default Errorpage