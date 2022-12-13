import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SelectPredictionStyles } from './Styles/SelectPredictionStyles'
import {Button} from '../Buttons/Button'
import { SiBitcoin,SiLitecoin } from 'react-icons/si'
import {FaEthereum} from 'react-icons/fa'


const SelectPrediction = ({hide}) => {
  const navigate = useNavigate()
  const changePage = page =>{
    navigate(page)
    
  }
  return (
    <SelectPredictionStyles>
      <div className="container">
        <label htmlFor="predict">Choose Crypto</label>
        <div className="crypto">
          <div className="coin"onClick={()=>changePage('/crypto/Qwsogvtv82FCd')}>
            <SiBitcoin fontSize={19} color={"gold"} />
            <span>Bitcoin</span>
          </div>
          <div className="coin" onClick={()=>changePage('/crypto/razxDUgYGNAdQ')}>
            <FaEthereum fontSize={19} />
            <span>Ethereum</span>
          </div>
          <div className="coin" onClick={()=>changePage('/crypto/D7B1x_ks7WhV5')}>
            <SiLitecoin fontSize={19} color={"blue"}/>
            <span>Litecoin</span>
          </div>
        </div>
        
      </div>
      <Button onClick={()=>hide(true)}>Hide</Button>
    </SelectPredictionStyles>
  )
}

export default SelectPrediction