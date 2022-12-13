import styled from 'styled-components'
export const TableStyles = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  width: 98%;
  margin-left:5px;
  margin-right:5px;
  .header{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-bottom:10px;
    h2{
      text-align:center;
      color:${props=>props.colors[5]};
    }
    .moreInfo{
      margin-bottom:10px;
      color:${props=>props.colors[1]};
      text-align:center;
      font-weight:bold;
    }
    input{
      width: 50%;
      outline: none;
      border: 1px solid ${props=>props.colors[2]};
      height: 30px;
      border-radius:10px;
      text-align:center;
      font-size:1.2rem;
    }
  }
  .columns{
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:row;
    width: 100%;
    text-align:center;
    background: ${props=>props.colors[2]};
    color:${props=>props.colors[6]};
    font-weight:bold;
    padding-top:10px;
    padding-bottom:10px;
    .coin{
      width:20%;
    }
    .symbol{
      width:20%;
    }
    .price{
      width:20%;
    }
    .change{
      width:20%;
    }
    .volume{
      width:20%;
    }
    .mktcap{
      width:20%;
    }
  }
  .row{
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:row;
    width: 100%;
    border-bottom:1px solid silver;
    &:hover{
      background: ${props=>props.colors[7]};
    }
    .coin{
      display:flex;
      justify-content:space-between;
      text-align:center;
      align-items:center;
      flex-direction:row;
      width:20%;
      text-align:center;
      .image{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        width:30%;
        img{
          height: 35px;
          width: 35px;
          margin-bottom:5px;
          margin-top:5px;
        }
      }
      span{
        font-size:13px;
        margin-left:5px;
        width:30%;
      }
    }
    .symbol{
      display:flex;
      justify-content:center;
      align-items:center;
      width:20%;
    }
    .price{
      display:flex;
      justify-content:center;
      align-items:center;
      width:20%;
      
    }
    .change{
      display:flex;
      justify-content:center;
      align-items:center;
      width:20%;
      font-weight:bold;
    }
    .volume{
      display:flex;
      justify-content:center;
      align-items:center;
      width:20%;
    }
    .mktcap{
      display:flex;
      justify-content:center;
      align-items:center;
      width:20%;
    }
  }
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
  @media (max-width:860px){
    .columns{
      .coin{
        width:15vw;
        justify-content:start;
      }
    .symbol{
      width:15vw;
    }
    .price{
      width:15vw;
    }
    .change{
      width:15vw;
    }
    .volume{
      width:15vw;
    }
    .mktcap{
      width:15vw;
    }
    }
    .row{
      .coin{
        
        width:15vw;
        .name{
          display:none;
        }
      }
      .symbol{
        
        width:15vw;
      }
      .price{
        
        width:15vw;
      }
      .volume{
        
        width:15vw;
      }
      .change{
        
        width:15vw;
      }
      .mktcap{
        
        width:15vw;
      }
    }
  }
  @media (max-width:380px){
    margin-left:1px;
    .paginationBtns{
      display:flex;
      flex-direction:row;      
      margin-left:0px;
      
    }
    .row{
      .coin{
        font-size:13px;
        .image{
          img{
            height: 25px;
            width: 25px;
          }
        }
      }
      .mktcap{
        font-size:13px;
      }
      .change{
        font-size:13px;
      }
      .price{
        font-size:13px;
      }
      .volume{
        font-size:13px;
      }
      .symbol{
        font-size:13px;
      }
    }
    .columns{
      font-size:13px;
    }
  }
  @media (max-width:360px){
    .paginationBtns{
      font-size:9px;
      a{
        margin:2px;
      }
    }
    .row{
      font-size:10px;
      .coin{
        
        .image{
          img{
            height: 20px;
            width: 20px;
          }
        }
      }
      
      .volume{
        
        width:12vw;
      }
    }
    .columns{
      font-size:12px;
    }
  }
`