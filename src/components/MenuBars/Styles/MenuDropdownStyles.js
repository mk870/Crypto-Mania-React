import styled from "styled-components";

export const MenuDropdownStyles = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  background:#080857;
  width:33%;
  position:absolute;
  z-index:20;
  animation: fadeInAnimation ease 0.6s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

    @keyframes fadeInAnimation {
      0%{
        transform:translateX(-100%);
        }
      100%{
        transform:translateX(0%);
        }
    }
  
  .links{
    
    .toggle{
      display:flex;
      justify-content:center;
      flex-direction:column;
      .shown{
        display:flex;
        color:white;
        padding:10px;
        align-items:center;
        justify-content:start;
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
    .predict{
      display:flex;
      justify-content:center;
      flex-direction:column;
      .shown{
        display:flex;
        color:white;
        padding:10px;
        align-items:center;
        justify-content:start;
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
    .link{
      display:flex;
      color:white;
      padding:10px;
      align-items:center;
      justify-content:start;
      span{
        margin-left:5px;
        font-size:17px;
      }
      &:hover{
        cursor:pointer;
        background: #6769e6;
      }
    }
    .select{
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      margin-bottom:10px;
    }
  }
  @media (max-width:560px) {
    width:40%;
  }
  @media (max-width:430px) {
    width:50%;
  }
  
`