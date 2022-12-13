import styled from "styled-components";

export const SelectPredictionStyles =styled.div`
  width: 90%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  text-align:center;
  border:1px solid silver;
  border-radius:20px;
  margin-top:10px;
  margin-bottom:10px;
  animation: fadeAnimation ease 0.6s;
      //animation-iteration-count: 1;
      //animation-fill-mode: forwards;

    @keyframes fadeAnimation {
      0%{
        transform:translateX(-100%);
        }
      100%{
        transform:translateX(0%);
        }
    }
  .container{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background:#080857;
    width: 80%;
    label{
      margin:5px;
      color:white;
      font-weight:bold;
    }
    .crypto{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      width:100%;
      .coin{
        display:flex;
        color:white;
        padding:10px;
        align-items:center;
        justify-content:center;
        width:100%;
        span{
          margin-left:5px;
          font-size:17px;
        }
        &:hover{
          cursor:pointer;
          background: #6769e6;
        }
      }
      
    }
  }
  @media (max-width:760px) {
    position: absolute;
    background:#080857;
  }
`