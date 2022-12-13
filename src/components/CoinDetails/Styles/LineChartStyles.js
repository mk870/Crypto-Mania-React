import styled from "styled-components";

export const LineChartStyles = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  
  .chart{
    width: 95%;
    background:white;
  }
  .header{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:${props=>props.colors[1]};
    width: 95%;
    h3{
      text-align:center;
      
    }
    .coin{
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-direction:row;
      width: 95%;
      margin-bottom:15px;
      select{
        width:40%;
        border: 1px solid ${props=>props.colors[2]};
        height: 30px;
        text-align:center;
        font-size:1.2rem;
        outline: none;
      }
      span{
        color:${props=>props.colors[5]};
        font-weight:bold;
        
      }
    }
  }
  @media (max-width:480px){
    .header{
      .coin{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column-reverse;
        span{
          margin-bottom:10px;
        }
        select{
          width:80%;
        }
      }
    }
  }
`