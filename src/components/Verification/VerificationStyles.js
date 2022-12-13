import styled from 'styled-components'

export const VerificationStyles = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  text-align:center;
  width:80%;
  height:81vh;
  h3{
    color:${props=>props.colors[5]};
  }
  @media (max-width:760px){
    width:100%;
  }
`