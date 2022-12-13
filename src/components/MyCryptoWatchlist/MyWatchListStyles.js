import styled from "styled-components";

export const MyWatchListStyles = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  width: 85vw;
  min-height:81vh;
  background:${props=>props.colors[0]};
  .header{
    h2{
      color:${props=>props.colors[5]};
      text-align:center;
    }
  }
  .cryptoList{
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    width:90%;
    margin:10px;
    color:${props=>props.colors[1]};
    padding:0px 10px 0px 10px;
    border:2px solid grey;
    border-radius:7px;
    background:${props=>props.colors[4]};
    .coin{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      margin:3px 3px;
      .description{
        color:${props=>props.colors[5]};
        font-weight:bold;
        text-align:center;
      }

    }
    .btn{
      button{
        border-radius: 25px;
        background-color: red;
        cursor: pointer;
        color: #fff;
        border: none;
        padding: 10px 20px 10px 20px;
        font-size:15px;
        font-weight:600;
        margin:10px;
        display: flex;
        align-items:center;
        &:hover{
          background-color: #c94747;
        }
      }
    }
  }
  @media (max-width:960px){
    .cryptoList{
      .coin{
        .description{
          font-size:14px;
        }
      }
      .btn{
        button{
          font-size:14px;
        }
      }
    }
  }
  @media (max-width:760px){
    width:auto;
  }
  @media (max-width:700px){
    .cryptoList{
      .coin{
        .description{
          font-size:12px;
        }
      }
      .btn{
        button{
          font-size:12px;
        }
      }
    }
  }
  @media (max-width:600px){
    .cryptoList{
      .coin{
        font-size:12px;
      }
      .btn{
        button{
          padding: 5px 10px 5px 10px;
        }
      }
    }
  }
  @media (max-width:520px){
    .cryptoList{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      .coin{
        font-size:16px;
        .description{
          font-size:16px;
        }
      }
      .btn{
        width:90%;
        display:flex;
        flex-direction:column;
        button{
          text-align:center;
          justify-content:center;
          padding: 10px 20px 10px 20px;
          font-size:17px;
          border-radius:7px;
        }
      }
    }
  }
`