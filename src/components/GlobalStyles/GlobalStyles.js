import { createGlobalStyle } from "styled-components";


export const Globalstyles = createGlobalStyle`
  body{
    font-family: 'Poppins',Verdana, Geneva, Tahoma, sans-serif;
    color:black;
    margin:0;
    top:0;
    left:0;
    right:0;
    bottom:0;
    padding:0;
  }
  .container{
    display:flex;
    flex-direction:row;
    background:${props=>props.colors[0]};
  }
  @media (max-width:760px){
    .container{
      display:flex;
      flex-direction:column;
      justify-content:center;
      
    }
  }
  `