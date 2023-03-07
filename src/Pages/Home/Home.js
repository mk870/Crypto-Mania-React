import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import millify from 'millify';
import { useNavigate } from 'react-router-dom';
import moment from 'moment'
import HTMLReactParser from 'html-react-parser'

import { HomeStyles } from './HomeStyles'
import Spinner from '../../components/HandleLoading/Spinner';
import ApiError from '../../components/HandleErrors/ApiError';
import { colors } from '../../components/utils/ThemeColors';
import { newsAction } from '../../components/Features/NewsState';
import { options } from '../../components/ApiOptions/CoinsOptions';
import { coinsAction } from '../../components/Features/CoinsStats';
import { aiBackendEndPoint } from '../../components/utils/BackendEndPoint';


const Home = ({voicePageNavigation,setVoicePageNavigation}) => {
  const [cryptos,setCryptos] = useState('')
  const [news,setNews] = useState('')
  const[error,setError] = useState('')
  const dispatch = useDispatch()
  const coinsInfo = useSelector((state) => state.coins.value)
  const theme = useSelector((state)=>state.theme.value)
  const navigate = useNavigate()
  const source = (data) =>{
    if (!data) {
      return "Null"
    }else{
      return HTMLReactParser(data)
    }
  }
  const author = (data) =>{
    if (!data) {
      return "Unknown Author"
    }else{
      return HTMLReactParser(data.split('\n')[0])
    }
  }
  
  useEffect(()=>{
    setError('')
    setCryptos('')
    axios.request(options(100)).then(function (response) {
      dispatch(coinsAction(response.data.data))
      setCryptos(response.data.data.coins)
    }).catch(function (error) {
      setError('failed to fetch Please check Network connection');
    });
  },[])
  useEffect(()=>{
    setNews('')
    fetch(`${aiBackendEndPoint}/getNews`)
    .then(response => {
      if(!response.ok){
        throw Error('Could not fetch data please check your network connection')
      }else{
        return response.json()
        
      }
      })
    .then(data =>{
      console.log(data)
      dispatch(newsAction(data.articles))
      setNews(data.articles)
      setError('')
    })
    .catch(e =>{
      console.log(e)
      setError(e.message)
    })
      
      
  },[])
  
  useEffect(()=>{
    if (voicePageNavigation) {
      navigate(voicePageNavigation)
    }
    return ()=>{setVoicePageNavigation('')}
  },[voicePageNavigation])

  return (
    <HomeStyles colors = {colors(theme)}>
      <div className="stats">
        <div className="head">
          <h3>Global Crypto Statistics</h3>
        </div>
        {cryptos && !error  && <div className="grid">
          <div className="stat">
            <h4>Total Cryptocurencies</h4>
            {coinsInfo.stats.totalCoins}
          </div>
          <div className="stat">
            <h4>Total Exchanges</h4>
            {coinsInfo.stats.totalExchanges}
          </div>
          <div className="stat">
            <h4>Total Market Cap</h4>
            {millify(coinsInfo.stats.totalMarketCap)}
          </div>
          <div className="stat">
            <h4>Total 24h Volume</h4>
            {millify(coinsInfo.stats.total24hVolume)}
          </div>
          <div className="stat">
            <h4>Total Markets</h4>
            {millify(coinsInfo.stats.totalMarkets)}
          </div>
        </div>}
      </div>
      {cryptos && !error  && <div className='topcrypto'>
        <div className="head">
          <h3>Top 8 Crypto Currencies In The World</h3>
          <span onClick={()=>navigate('/cryptodashboard')}>Show more...</span>
        </div>
        
        <div className="grid2">
          {cryptos && cryptos.slice(0,8).map((crypto,index)=>(
            <div className="crypto" key={index} onClick={()=>navigate(`/crypto/${crypto.uuid}`)}>
              <div className="id">
                <span>{crypto.rank}.{crypto.name}</span>
                <img src={crypto.iconUrl} alt="crypto" />
              </div>
              <div className="cryptoInfo">
                <p>Price: {millify(crypto.price)}</p>
                <p>Market Cap: {millify(crypto.marketCap)}</p>
                <p>Daily Change: {millify(crypto.change)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>}
      {news.length > 0 && !error  && <div className="topnews">
        <div className="head">
          <h3>Top 4 Crypto Currency News In The World</h3>
          <span onClick={()=>navigate('/news')}>Show more...</span>
        </div>
        <div className="grid3">
          {news.slice(0,4).map((story,index)=>(
          <div className="article" key={index}>
            <a href={story.url} target="_blank" rel='noreferrer'>
              <div className="title">
                <h3>{story.title}</h3>
                <img src={story.urlToImage} alt="newsImage" />
              </div>
              <p>
                {HTMLReactParser(story.description) > 100 ? `${HTMLReactParser(story.description).substring(0,100)}...`
                : HTMLReactParser(story.description)}
              </p>
              <div className="provider">
                <div className="sources">
                  <span>{author(story.author)}</span>
                  <span>{source(story.source.name)}</span>
                </div>
                <span>{moment(story.publishedAt).startOf('ss').fromNow()}</span>
              </div>
            </a>
        </div>
          ))}
        </div>
      
      </div>}
      {error && <ApiError error={error}/>}
      {!error && (!news || !cryptos) && <Spinner/>}
    </HomeStyles>
  )
}

export default Home
