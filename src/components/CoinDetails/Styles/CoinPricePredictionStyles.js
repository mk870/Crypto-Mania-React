import styled from "styled-components";

export const CoinPricePredictionStyles = styled.div`
  display:flex;
  justify-content:center;
  text-align:center;
  flex-direction:column;
  width:95%;
  align-items:center;
  h3{
    color:${props=>props.colors[1]};
    text-align:center;
  }
  .predictions{
    display:flex;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    
  }
  
`