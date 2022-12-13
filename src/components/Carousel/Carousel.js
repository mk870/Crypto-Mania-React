import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { useNavigate } from 'react-router-dom'
import millify from 'millify'


const Carousel = ({crypto}) => {
  const navigate = useNavigate()
  const responsive = {
    0:{
      items:2,
    },
    512:{
      items:4,
    }
  }
  const color = (price)=>{
    if(price >= 0){
      return 'green'
    }else{
      return 'red'
    }
  }
  let items
  if (crypto) {
    items = crypto.coins.slice(0,20).map((coin,index)=>(
      <div className="coin" key={index} onClick={()=>navigate(`/crypto/${coin.uuid}`)} style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <img src={coin.iconUrl} alt={coin.name} height="80" width='80'/>
        <div className="info" style={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}>
          <span style={{
            display:'flex',
            fontSize:14,
            marginTop:7
            }}>
              {coin.symbol}
            &nbsp;
            <span style={{
              color:color(parseFloat(coin.change)),
              fontSize:14
            }}>
              {`${millify(coin.change)} %`}
            </span>
          </span>
          <span >{`$${parseFloat(coin.price).toFixed(2)}`}</span>
        </div>
      </div>
    ))
  } 
  
  return (
    <div className="container" >
      {crypto && items && <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        autoPlay
        responsive={responsive}
        items={items}
      />}
    </div>
  )
}

export default Carousel