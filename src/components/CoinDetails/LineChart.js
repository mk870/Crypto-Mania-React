import React from 'react'
import { useParams } from 'react-router-dom';
import { LineChartStyles } from './Styles/LineChartStyles';
import { useSelector } from 'react-redux'
import { colors } from '../utils/ThemeColors'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import CoinPricePrediction from './CoinPricePrediction';
ChartJS.register(
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement,
 Title,
 Tooltip,
 Legend
);

const LineChart = ({price,name,history,timePeriod,setTimePeriod,time}) => {
  const coinprice = []
  const cointime = []
  const{coinId} = useParams()
  const theme = useSelector((state)=>state.theme.value)
  for (let i = 0; i < history.length; i+=1) {
    coinprice.push(history[i].price)
    cointime.push(new Date(history[i].timestamp*1000))
  }
  
  
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
  
  const data = {
    labels: cointime.reverse().map((time)=>{
      let daytime = time.getHours()>12 
      ? `${time.getDate()}/${months[time.getMonth()]}/${time.getHours() - 12}:${time.getMinutes()} PM`
      :`${time.getDate()}/${months[time.getMonth()]}/${time.getHours()}:${time.getMinutes()} AM`
      return( timePeriod === '3h'||timePeriod==='24h'||timePeriod ==='7d'|| timePeriod==='30d' || timePeriod==='3m'? daytime : time.toLocaleDateString()
      
      )
    }),
    datasets:[
      {
        label:'Price in USD',
        data: coinprice.reverse(),
        fill: false,
        backgroundColor:'#0071bd',
        borderColor:'#0071bd'
      }
    ]
  }
  const options ={
    scales:{
      yAxes:[
        {
          ticks:{
            beginAtZero: true
          }
        }
      ]
    }
  }
  const showPred = (coinId) =>{
    if(coinId === 'Qwsogvtv82FCd' || coinId==='razxDUgYGNAdQ' || coinId==='D7B1x_ks7WhV5'){
      return <CoinPricePrediction coinId={coinId} name={name} coinprice={price}/>
    }
  }
  return (
    <LineChartStyles colors = {colors(theme)}>
      <div className='header'>
        <h3>{name} Price Chart</h3>
        <div className="coin">
          <select name="time" id="time" onChange={(e)=>setTimePeriod(e.target.value)} value={timePeriod}>
            {time.map((period)=>(
              <option value={period} key={period}>{period}</option>
            ))}
          </select>
          <span>Current price: ${price}</span>
        </div>
        
      </div>
      <div className="chart">
        <Line data={data} options={options}/>
      </div>
      {showPred(coinId)}
    </LineChartStyles>
    
  )
}

export default LineChart