import React, { useState } from 'react'
import { TableStyles } from './Styles/TableStyles';
import millify from 'millify'
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate'
import { colors } from '../utils/ThemeColors'
import { useSelector } from 'react-redux'

const Table = ({crypto}) => {
  const [search,setSearch] = useState('')
  const [filter,setFilter] = useState('')
  const theme = useSelector((state)=>state.theme.value)
  const navigate = useNavigate()
  const [pageNumber,setPageNumber] = useState(0)
  const coinsPerPage = 10
  const pagesVisited = pageNumber * coinsPerPage
  
  const filteredcoins = crypto.coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()))
  const color = (price)=>{
    if(price >= 0){
      return 'green'
    }else{
      return 'red'
    }
  }
  const displayDashboard =() =>filteredcoins.slice(pagesVisited,pagesVisited + coinsPerPage).map((coin)=>{
    return(
      <div className="row" key={coin.name} onClick={()=>navigate(`/crypto/${coin.uuid}`)}>
        <div className="coin">
          <span>{coin.rank}</span>
          <div className="image">
            <img src={coin.iconUrl} alt={coin.name} height="80" width='80'/>
          </div>
          <span className='name'>{coin.name}</span>
        </div>
        <div className="symbol"><span>{coin.symbol}</span></div>
        <div className="price">
          {`$${millify(parseFloat(coin.price).toFixed(2))}`}
        </div>
        <div className="change">
          <span style={{
            color:color(parseFloat(coin.change)),
            fontSize:14
          }}>
            {`${millify(coin.change)}%`}
          </span>
        </div>
        <div className="volume">
          {millify(coin['24hVolume'])}
        </div>
        <div className="mktcap">
          {millify(coin.marketCap)}
        </div>
      </div>
      )
    }
  )
  const pageCount = Math.ceil(crypto.coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase())).length/coinsPerPage)
  const changePage = ({selected})=>{
    setPageNumber(selected)
  }

  return (
    <TableStyles colors = {colors(theme)}>
      <div className="header">
        <h2>Crypto Currencies by Market Capitilization</h2>
        <span className='moreInfo'>Click a Crypto coin for more information</span>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Search Coin"/>
      </div>
      <div className="columns">
        <span className='coin'>Coin</span>
        <span className='symbol'>Symbol</span>
        <span className='price'>Price</span>
        <span className='change'>Price Change</span>
        <span className='volume'>24h Volume</span>
        <span className='mktcap'>Market Cap</span>
      </div>
      {displayDashboard()}
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
    </TableStyles>
  )
}

export default Table