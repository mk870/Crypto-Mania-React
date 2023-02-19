import styled from 'styled-components'

export const CryptoDashboardStyles = styled.div`
  background:${props=>props.colors[0]};
  color:${props=>props.colors[1]};
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80vw;
  

  padding-top:10px;
  .page{
    width:100%;
  }
  @media (max-width:760px){
    width:auto;
  }
`