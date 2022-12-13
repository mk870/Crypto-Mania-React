import React, { useContext, useState,useEffect } from 'react'
import { CoinStatsStyles } from './Styles/CoinStatsStyles'
import millify from 'millify'
import { useSelector } from 'react-redux'
import { colors } from '../utils/ThemeColors'
import {FaMoneyBillAlt} from 'react-icons/fa'
import {FcPositiveDynamic,FcSalesPerformance,FcCurrencyExchange,FcApproval} from 'react-icons/fc'
import {RiStockFill} from 'react-icons/ri'
import {BsTrophyFill} from 'react-icons/bs'
import {ImListNumbered} from 'react-icons/im'
import {GiMoneyStack} from 'react-icons/gi'
import {BiRotateRight} from 'react-icons/bi'
import { Button2 } from '../Buttons/Button2'
import axios from "axios"
import ApiConfirmationPopUp from '../Popups/ApiConfirmationPopUp'
import { JwtContext } from '../utils/AppContext'
import { useNavigate } from 'react-router-dom'


const Coinstats = ({coindata}) => {
  const theme = useSelector((state)=>state.theme.value)
  const {value} = useContext(JwtContext)
  const [apiData,setApiData] = useState('')
  const [popup,setPopup] = useState(false)
  const [onload,setOnload] = useState(false)
  const navigate = useNavigate()
  const [error,setError] = useState('')
  
  useEffect(()=>{
    if(error || apiData){
      setPopup(true)
      setOnload(false)
    }
  },[error,apiData])

  const checkdata = (data)=>{
    if(data){
      return millify(data)
    }else{
      return ' Null'
    }
  }
  const convertToString=(variable)=>{
    if (typeof variable !== 'string'){
      return String(variable)
    }else{
      return variable
    }
  }
  const AddToWatchList = (data)=>{
    let coinInfo = {
      name: convertToString(data.name),
      mktCap: convertToString(millify(data.marketCap)),
      rank: convertToString(data.rank),
      allTimeHighPrice: convertToString(millify(data.allTimeHigh.price)),
      coinsInCirculation: convertToString(millify(data.supply.circulating))
    }
    
    if(value){
      setOnload(true)
      setApiData('')
      setError('')
      axios.post('https://crypto-mania-server.herokuapp.com/api/account/save',coinInfo,{headers:{"Authorization" : `Bearer ${value}`}})
        .then(data =>{
          setApiData(data.data)
          setError('')
        })
        .catch(e =>{
          setError(e.message)
        })
          }
    else{
      navigate('/login')
    }
  }
  return (
    <CoinStatsStyles colors = {colors(theme)}>
      <div className='container'>
        {popup && <ApiConfirmationPopUp confirmation={apiData?apiData:error} close={setPopup}/>}
        <div className="head">
          <h2>{coindata.name} Price</h2>
          <span>{coindata.name} live price in US dollars.View statistics,market cap and supply.</span>
          <Button2 colors={colors(theme)} onClick={()=>AddToWatchList(coindata)}>{onload?'Loading...':`Add ${coindata.name} to MyWatchList`}</Button2>
        </div>
        <div className="coininfo">
          <div className="valuestats">
            <h3>{coindata.name} Value statistics</h3>
            <h4>Overview of {coindata.name} stats</h4>
            <div className="info">
              <div className="price">
                <span className='label'>
                  <FaMoneyBillAlt fontSize={21} color={'green'}/>
                  <p>Price in USD</p>
                </span>
                <span className='data'>${millify(coindata.price)}</span>
              </div>
              <div className="rank">
                <span className='label'>
                  <FcPositiveDynamic fontSize={21}/>
                  <p>Rank</p>
                </span>
                <span className='data'>{coindata.rank}</span>
              </div>
              <div className="volume">
                <span className='label'>
                  <FcSalesPerformance fontSize={21}/>
                  <p>24h Volume</p>
                  </span>
                <span className='data'>${millify(coindata['24hVolume'])}</span>
              </div>
              <div className="mkt">
                <span className='label'>
                  <RiStockFill fontSize={21} color={'red'}/>
                  <p>Market Cap</p>
                  </span>
                <span className='data'>${millify(coindata.marketCap)}</span>
              </div>
              <div className="high">
                <span className='label'>
                  <BsTrophyFill fontSize={21} color={'gold'}/>
                  <p>All-time-high(daily avg)</p>
                </span>
                <span className='data'>${millify(coindata.allTimeHigh.price)}</span>
              </div>
            </div>
          </div>
          <div className="other-stats">
            <h3>Other Statistics</h3>
            <h4>Overview of the other stats</h4>
            <div className="info">
              <div className="mktsNum">
                <span className='label'>
                  <ImListNumbered fontSize={21} color={'red'}/>
                  <p>Number Of Markets</p>  
                </span>
                <span className='data'>{coindata.numberOfMarkets}</span>
              </div>
              <div className="exchanges">
                <span className='label'>
                  <FcCurrencyExchange fontSize={21}/>
                  <p>Number of Exchanges</p>  
                </span>
                <span className='data'>{coindata.numberOfExchanges}</span>
              </div>
              <div className="totalSupply">
                <span className='label'>
                  <GiMoneyStack fontSize={21} color={'green'}/>
                  <p>Total Supply</p>  
                </span>
                <span className='data'>${checkdata(coindata.supply.total)}</span>
              </div>
              <div className="circulating">
                <span className='label'>
                  <BiRotateRight fontSize={21} color={'orange'}/>
                  <p>Circulating Supply</p>  
                </span>
                <span className='data'>${millify(coindata.supply.circulating)}</span>
              </div>
              <div className="approved">
                <span className='label'>
                  <FcApproval fontSize={21} />
                  <p>Approved Supply</p>
                </span>
                <span className='data'>yes {coindata.supply.confirmed}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CoinStatsStyles>
  )
}

export default Coinstats