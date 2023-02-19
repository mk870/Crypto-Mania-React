import styled from 'styled-components'

export const CoinDescriptionStyles = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  
  h2{
    color:${props=>props.colors[5]};
    text-align:center;
  }
  .description{
    width:85%;
    p{
      color:${props=>props.colors[5]};
    }
    h3{
      color:${props=>props.colors[1]};
      
    }
  }
  .links{
    width:60%;
    h3{
      text-align:center;
      color:${props=>props.colors[1]};
    }
    .linklist{
      margin-bottom:20px;
      .row{
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        height:40px;
        border-bottom:1px solid silver;
        span{
          font-weight:bold;
          color:${props=>props.colors[1]};
        }
        a{
          text-decoration:none;
          font-weight:bold;
          color:#0a3ac9;
        }
      }
    }
  }
  @media (max-width:760px){
    .links{
      width:90%;
    }
  }
  .description{
    width:90%;
  }
`