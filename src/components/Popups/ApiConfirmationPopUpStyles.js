import styled from "styled-components";

export const ApiConfirmationPopupStyles = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  position: fixed;
  top:0%;
  width:70%;
  height: 10vh;
  border-radius:10px;
  text-align:center;
  background-color:${props=>props.bgcolors};
  color:white;
  animation: dropAnimation ease 0.6s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

    @keyframes dropAnimation {
      0%{
        transform:translateY(-100%);
        }
      100%{
        transform:translateY(10%);
        }
    }
    @media (max-width:460px){
      width: 90%;
    }
    @media (max-width:460px){
      width: 96%;
    }
`
