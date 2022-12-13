import styled from 'styled-components'

export const NewsStyles = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width: 80vw;
  background:${props=>props.colors[0]};
  .header{
    margin-bottom:20px;
    text-align:center;
    h2{
      color:${props=>props.colors[5]};
      text-align:center;
    }
    .moreInfo{
      margin-bottom:10px;
      color:${props=>props.colors[1]};
      
      font-weight:bold;
    }
  }
  .grid{
    display:grid;
    grid-gap:15px;
    grid-template-columns:1fr 1fr ;
    margin-left:10px;
    margin-right:10px;
    margin-bottom:10px;
    .article{
      display:flex;
      align-items:center;
      flex-direction:column;
      padding:5px;
      box-shadow: ${props=>props.colors[4]};
      width:37vw;
      background: ${props=>props.colors[3]};

      transition: all 300ms ease-in-out;
      &:hover{
          transform: scale(1.03);
        }
      a{
        text-decoration:none;
        color:${props=>props.colors[1]};
        padding:5px ;
        .title{
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-direction:row;
          img{
            height:150px;
            width: 220px;
            margin-left:5px;
          }
        }
        .provider{
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
          span{
            font-weight:bold;
          }
          .sources{
            width: 100%;
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:row;
          }
        }
      }
    }
  }
  @media (max-width:990px){
    .grid{
      .article{
        
        a{
          .title{
            img{
              height:100px;
              width: 150px;
            }
          }
          .provider{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
          }
        }
      }
    }
  }
  @media (max-width:800px){
    .grid{
      grid-template-columns:1fr;
      .article{
        width:70vw;
        a{
          .title{
            
            img{
              height:100px;
              width: 150px;
            }
          }
          .provider{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
          }
        }
      }
    }
  }
  @media (max-width:760px){
    width:auto;
  }
  @media (max-width:500px){
    .grid{
      grid-template-columns:1fr;
      .article{
        width:85vw;
        text-align:center;
        a{
          .title{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            text-align:center;
            img{
              height:200px;
              width: 250px;
            }
          }
          p{
            text-align:center;
          }
          .provider{
            .sources{
              display:flex;
              justify-content:center;
              align-items:center;
              flex-direction:column;
            }
            
          }
        }
      }
    }
  }
`