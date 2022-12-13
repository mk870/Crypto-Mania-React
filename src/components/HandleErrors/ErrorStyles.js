import styled from 'styled-components'

export const ErrorStyles = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  text-align:center;
  height:85vh;
  width:80%;
  .error{
    color:red;
  }
  h1{
    color:red;
  }
  @media (max-width:760px){
    height:60vh;
    width:auto;
  }
`