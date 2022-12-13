import styled from 'styled-components'

export const VoiceCommandsStyles = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  text-align:center;
  width:85vw;
  min-height:81vh;
  .heading{
    margin-bottom:50px;
    margin-top:20px;
    color:${props=>props.colors[5]};
  }
  .wrapper{
    display:grid;
    grid-gap:15px;
    grid-template-columns:1fr 1fr 1fr 1fr;
    
    padding:20px;
    .card1{
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-direction:column;
      min-height:300px;
      border-radius:10px;
      background:#2a0782;
      color:white;
      padding-left: 7px;
      .head{
        font-size:20px;
        margin-top:15px;
      }
      .description{
        margin-bottom:15px;
        .sub-heading{
          font-size:18px;
        }
      }

    }
    .card2{
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-direction:column;
      min-height:300px;
      border-radius:10px;
      background:blue;
      color:white;
      padding: 7px;
      .head{
        font-size:20px;
        margin-top:15px;
      }
      .pages{
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
        text-align:center;
        .sub-heading{
          font-size:18px;
        }
      }
      .description{
        margin-bottom:15px;
        .sub-heading{
          font-size:18px;
        }
      }
    }
    .card3{
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-direction:column;
      min-height:300px;
      border-radius:10px;
      background:#0345fc;
      color:white;
      padding: 7px;
      .head{
        font-size:20px;
        margin-top:15px;
      }
      .description{
        margin-bottom:15px;
        .sub-heading{
          font-size:18px;
        }
      }
    }
    .card4{
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-direction:column;
      min-height:300px;
      border-radius:10px;
      background:#0373fc;
      color:white;
      padding: 7px;
      .head{
        font-size:20px;
        margin-top:15px;
      }
      .themes{
        .sub-heading{
          font-size:18px;
        }
        text-align:center;
      }
      .description{

        margin-bottom:15px;
        .sub-heading{
          font-size:18px;
        }
      }
    }
  }
  @media (max-width:1260px){
    .wrapper{
    grid-template-columns:1fr 1fr ;
    }
  }
  @media (max-width:760px){
    width:auto;
  }
  @media (max-width:420px){
    .wrapper{
    grid-template-columns:1fr;
    }
  }
`