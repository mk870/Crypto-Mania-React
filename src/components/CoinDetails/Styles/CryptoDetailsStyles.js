import styled from 'styled-components'

export const CryptoDetailsStyles = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:80vw;
  background:${props=>props.colors[0]};
  .container{
    display:flex;
    flex-direction:column;
  }
  @media (max-width:760px){
    width:auto;
  }
`