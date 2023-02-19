import styled from "styled-components";

export const CryptoExchangesStyles = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width: 85%;
  background: ${props=>props.colors[0]};
  h2{
    color:${props=>props.colors[5]};
    text-align:center;
  }
  .moreInfo{
    margin-bottom:10px;
    color:${props=>props.colors[1]};
    text-align:center;
    font-weight:bold;
  }
  .container{
    display:flex;
    justify-content:center;
    flex-direction:column;
    width: 95%;
    .paginationBtns{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:row;
      list-style:none;
      width: 80%;
      height:40px;
      a{
        border:1px solid ${props=>props.colors[2]};
        padding: 5px;
        cursor:pointer;
        margin:5px;
        border-radius:5px;
        color:${props=>props.colors[2]};
        &:hover{
          color:${props=>props.colors[6]};
          background: ${props=>props.colors[2]};
        }
      }
      
      .active a{
        color:${props=>props.colors[6]};
        background: ${props=>props.colors[2]};
      }
    }
    .column{
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-direction:row;
      text-align:center;
      width: 100%;
      border-bottom:1px solid grey;
      background: ${props=>props.colors[2]};
      color:${props=>props.colors[6]};
      font-weight:bold;
      padding-top:10px;
      padding-bottom:10px;
      .rank{
        width: 10%;
      }
      .name{
        width: 20%;
      }
      .score{
        width: 10%;
      }
      .year{
        width: 10%;
      }
      .volume{
        width: 35%;
      }
    }
      .card{
      display:flex;
      justify-content:center;
      flex-direction:column;
      width: 100%;
      border-bottom:1px solid silver;
      color:${props=>props.colors[6]};
      &:hover{
        background: ${props=>props.colors[7]};
        
      }
        a{
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        text-decoration:none;
        color:${props=>props.colors[1]};
        width: 100%;
        height: 100% ;
        
        .name{
          display:flex;
          justify-content:space-between;
          text-align:center;
          align-items:center;
          flex-direction:row;
          width:20%;
          img{
            height:35px;
            width:35px;
            margin-bottom:10px;
            margin-top:10px;
          }
          span{
          width:60%;
        }
        }
        .rank{
          width:10%;
          display:flex;
          justify-content:center;
          align-items:center;
        }
        .score{
        width: 10%;
        display:flex;
        justify-content:center;
        align-items:center;
        }
        .year{
          width: 10%;
          display:flex;
          justify-content:center;
          align-items:center;
        }
        .volume{
          width: 35%;
          display:flex;
          justify-content:center;
          align-items:center;
        }
      }
    }
  }
  @media (max-width:760px){
    width:auto;
  }
  @media (max-width:660px){
    .container{
      .column{
        text-align:center;
        .volume{
          width:15%;
          text-align:center;
        }
        .name{
          width:40%;
        }
        .rank{
          width:10%;
        }
        .year{
          width:10%;
        }
        .score{
          width:10%;
        }
      }
      .card{
        a{
          font-size:14px;
          .volume{
          width: 15%;
          }
          .name{
            width:40%;
          }
          .rank{
            width:10%;
          }
          .year{
            width:10%;
          }
          .score{
            width:10%;
        }
        }
        
      }
    }
  }
  @media (max-width:530px){
    .container{
      .column{
        font-size:14px;
      }
    }
  }
  @media (max-width:480px){
    .container{
      .column{
        font-size:12px;
      }
    }
  }
  @media (max-width:450px){
    .container{
      .paginationBtns{
      font-size:9px;
      }
      .column{
        font-size:11px;
      }
    }
  }
  @media (max-width:360px){
    .container{
      
      .paginationBtns{
      font-size:8px;
        a{
          margin:2px;
        }
      }
      .column{
        font-size:9px;
      }
      .card{
        
        a{
          font-size:11px;
          .name{
            img{
              height:20px;
              width:20px;
            }
          }
        }
      }
    }
    }
  }
`