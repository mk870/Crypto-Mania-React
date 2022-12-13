import styled from 'styled-components'

export const HomeStyles = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  text-align:center;
  color:${props=>props.colors[1]};
  width: 85vw;
  background:${props=>props.colors[0]};
  .stats{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    .head{
      h3{
        color:${props=>props.colors[5]};
      }
    }
    .grid{
      display: grid;
      grid-gap:10px;
      grid-template-columns:1fr 1fr 1fr;
      margin:10px;
      .stat{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        
      }
    }
  }
  .topcrypto{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
    .head{
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-direction:row;
      width: 100%;
      h3{
          margin-left:20px;
        }
      span{
        font-weight:bold;
        color:${props=>props.colors[5]};
        margin-right:20px;
        &:hover{
          cursor: pointer;
          color:red;
        }
        
      }
    }
    .grid2{
      display: grid;
      grid-gap:20px;
      grid-template-columns:1fr 1fr 1fr 1fr;
      margin:10px;
      .crypto{
        display:flex;
        flex-direction:column;
        padding:0px 10px 10px 10px;
        box-shadow: ${props=>props.colors[4]};
        width: 230px;
        height: 240px;
        transition: all 300ms ease-in-out;
        background: ${props=>props.colors[3]};
        backdrop-filter: blur(5px);
        &:hover{
          transform: scale(1.07);
        }
        .id{
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-direction:row;
          margin-top:10px;
          span{
            font-weight:bold;
          }
          img{
            height:40px;
            width:40px;
            border-radius:50%;
          }
        }
        .cryptoInfo{
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
        }
      }
    }
  }
  .topnews{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    .head{
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-direction:row;
      width: 100%;
      h3{
          margin-left:20px;
        }
      span{
        font-weight:bold;
        color:${props=>props.colors[5]};
        margin-right:20px;
        &:hover{
          cursor: pointer;
          color:red;
        }
        
      }
    }
    .grid3{
    display:grid;
    grid-gap:15px;
    grid-template-columns:1fr 1fr ;
    margin-left:10px;
    margin-right:10px;
    margin-bottom:10px;
    .article{
      display:flex;
      
      align-items:center;
      flex-direction:column;
      
      padding:5px;
      box-shadow: ${props=>props.colors[4]};
      width:37vw;
      background: ${props=>props.colors[3]};
      transition: all 300ms ease-in-out;
      &:hover{
          transform: scale(1.03);
        }
      a{
        text-decoration:none;
        color:${props=>props.colors[1]};
        padding:5px ;
        .title{
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-direction:row;
          img{
            height:150px;
            width: 220px;
            margin-left:5px;
          }
        }
        .provider{
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
          .sources{
            width: 100%;
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:row;
          }
          
        }
      }
    }
  }
}
  @media (max-width:1250px){
    .topcrypto{
      .grid2{
        
        .crypto{
          height:190px;
          width:190px;
        }
      }
    }
    .topnews{
      .grid3{
        .article{
          a{
            .title{
              display:flex;
              justify-content:center;
              align-items:center;
              flex-direction:column;
            }
            .provider{
              .sources{
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width:1100px){
    .topcrypto{
      .grid2{
        grid-template-columns:1fr 1fr 1fr;
        .crypto{
          height:190px;
          width:190px;
        }
      }
    }
  }
  @media (max-width:800px){
    .topcrypto{
      .head{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        h3{
          margin-left:5px;
        }
        
      }
      .grid2{
        grid-template-columns:1fr 1fr;
        .crypto{
          height:230px;
          width:230px;
        }
      }
    }
    .topnews{
      .head{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        margin-bottom:15px;
        h3{
          margin-left:5px;
        }
      }
      .grid3{
        grid-template-columns:1fr;
        .article{
          width:70vw ;
        }
      }
    }
  }
  @media (max-width:760px){
    width:auto;
  }
  @media (max-width:580px){
    .topcrypto{
      .grid2{
        
        .crypto{
          height:190px;
          width:190px;
        }
      }
    }
  }
  @media (max-width:480px){
    .topcrypto{
      .grid2{
        grid-template-columns:1fr;
        .crypto{
          height:50vw;
          width:70vw;
        }
      }
    }
    .topnews{
      .grid3{
        
        .article{
          width:80vw ;
        }
      }
    }
  }
  @media (max-width:350px){
    .stats{
      .grid{
        grid-template-columns:1fr 1fr;
      }
    }
    .topcrypto{
      .grid2{
        grid-template-columns:1fr;
        .crypto{
          height:60vw;
          width:70vw;
        }
      }
    }
  }
`