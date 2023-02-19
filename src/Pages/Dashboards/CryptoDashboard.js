import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios";
import { useNavigate } from 'react-router-dom'

import { CryptoDashboardStyles } from './Styles/CryptoDashboardStyles'
import Table from './Table'
import { options } from '../../components/ApiOptions/CoinsOptions';
import ApiError from '../../components/HandleErrors/ApiError';
import Spinner from '../../components/HandleLoading/Spinner';
import Carousel from '../../components/Carousel/Carousel';
import { colors } from '../../components/utils/ThemeColors';

const CryptoDashboard = ({voicePageNavigation,setVoicePageNavigation}) => {
  const coins = useSelector((state) => state.coins.value)
  const theme = useSelector((state)=>state.theme.value)
  const navigate = useNavigate()
  const [crypto,setCrypto] = useState('')
  const[error,setError] = useState('')
  useEffect(()=>{
    if (!coins) {
      axios.request(options(100)).then(function (response) {
        setCrypto(response.data.data)
      }).catch(function (error) {
        setError('failed to fetch Please check Network connection')
      });
    }else{
      setCrypto(coins)
    }
  },[])
  useEffect(()=>{
    if (voicePageNavigation) {
      navigate(voicePageNavigation)
    }
    return ()=>{setVoicePageNavigation('')}
  },[voicePageNavigation])
  return (
    <CryptoDashboardStyles colors = {colors(theme)}>
      
      {crypto && !error && <div className="page" >
        <Carousel crypto = {crypto}/>
        <Table crypto = {crypto}/>
      </div>}
      {!crypto && !error && <Spinner/>}
      {error && <ApiError error={error}/>}
    </CryptoDashboardStyles>
  )
}

export default CryptoDashboard