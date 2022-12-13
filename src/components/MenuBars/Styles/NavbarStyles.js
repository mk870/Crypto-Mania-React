import styled from 'styled-components'

export const NavbarStyles = styled.nav`
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  background:#080857;
  
  .container{
    display:flex;
    justify-content:center;
    flex-direction:column;
    background:#080857;
    width:100%;
    
    .controller{
      display:flex;
      justify-content:center;
      
      flex-direction:column;
      height:auto;
      width:100%;
      .logo{
        display:flex ;
        flex-direction:row;
        margin-bottom:10px;
        
        align-items:center;
        margin-left:10px;
        img{
          height:80px;
          width:100px;
          border-radius:10px;
          margin:5px;
          border:2px solid white;
        }
        h3{
          color:white;
          span{
            color:gold;
          }
        }
      }
      .menu{
      margin-left:10px;
      span{
        color:white;
        &:hover{
        color:red;
        }
      }
      
    }
    }
    
    
  }
  
  @media (max-width:530px) {
    .container{
      .controller{
        .logo{
          img{
            height: 60px;
            width:80px;
          }
        }
      }
    }
  }
`