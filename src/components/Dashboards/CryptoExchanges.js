import React, { useEffect, useState } from 'react'
import { CryptoExchangesStyles } from './Styles/CryptoExchangesStyles'
import axios from "axios";
import { exchangesOptions } from '../ApiOptions/ExchangesOptions'
import millify from 'millify';
import Spinner from '../HandleLoading/Spinner'
import ApiError from '../HandleErrors/ApiError';
import ReactPaginate from 'react-paginate'
import { colors } from '../utils/ThemeColors'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const CryptoExchanges = ({voicePageNavigation,setVoicePageNavigation}) => {
  const [exchanges,setExchanges] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()
  const theme = useSelector((state)=>state.theme.value)
  const [pageNumber,setPageNumber] = useState(0)
  const exchangesPerPage = 10
  const pagesVisited = pageNumber * exchangesPerPage

  useEffect(()=>{
    
    axios.request(exchangesOptions()).then(function (response) {
      setExchanges(response.data)
    }).catch(function (error) {
      setError('failed to fetch Please check Network connection')
    });
  },[])
  useEffect(()=>{
    if (voicePageNavigation) {
      navigate(voicePageNavigation)
    }
    return ()=>{setVoicePageNavigation('')}
  },[voicePageNavigation])
  const displayExchanges = ()=>exchanges.slice(pagesVisited,pagesVisited + exchangesPerPage).map((exchange,index)=>{
    return(
      <div className="card" key={index}>
        <a href={exchange.url} target="_blank" rel='noreferrer'>
          <div className="rank">
            {exchange.trust_score_rank}
          </div>
          <div className="name">
            <img src={exchange.image} alt="exchangelogo" />
            <span>{exchange.name}</span>
          </div>
          <div className="year">
            {exchange.year_established || 'NULL'}
          </div>
          <div className="score">
            {exchange.trust_score}
          </div>
          
          <div className="volume">
            {millify(exchange.trade_volume_24h_btc)}
          </div>
        </a>
        
      </div>
    )
  })
  const pageCount = Math.ceil(exchanges.length/exchangesPerPage)
  const changePage = ({selected})=>{
    setPageNumber(selected)
  }
  return (
    <CryptoExchangesStyles colors = {colors(theme)}>
      <h2>Top 100 Crypto Currency Exchanges In the World</h2>
      <span className='moreInfo'>Click an Exchange for more information</span>
      {exchanges && !error && <div className='container'>
        <div className="column">
          <span className='rank'>Rank</span>
          <span className='name'>Name</span>
          <span className='year'>Year Formed</span>
          <span className='score'>Trust Score</span>
          <span className='volume'>24h Volume (BTC)</span>
        </div>
        {displayExchanges()}
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"prev"}
          nextLinkClassName={"next"}
          disabledClassName={"disapled"}
          activeClassName = {"active"}
        />
      </div>}
      {!error && !exchanges && <Spinner/>}
      {error && <ApiError error={error}/>}
    </CryptoExchangesStyles>
  )
}

export default CryptoExchanges