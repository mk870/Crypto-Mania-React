import styled from 'styled-components'

export const SignupStyles = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  text-align:center;
  width:80%;
  min-height:81vh;
  .header{
    margin-top:15px;
    h2{color:${props=>props.colors[5]};}
  }
  .card{
    border:1px grey solid;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:2em;
    max-width:600px;
    margin-bottom:15px;
    padding:10px;
    
  
    form{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        max-width:500px;
        width: 40vw;
        label{
          font-weight:bold;
          font-size:18px;
          margin-bottom:10px;
          color:${props=>props.colors[1]};
        }
        input{
          font-size:15px;
          margin-bottom:1px;
          
          outline: none;
          border:1px solid grey;
          
          width:90%;
          height:25px;
          transition: 0.1s;
          border-radius:5px;
          text-align:center;
        }
        input:focus{
          border:2px solid ${props=>props.colors[5]};
        }
        p{
            color:red;
          }
        .submit{
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
          width: 90%;
          
        }
    }
  
  }
  @media (max-width:760px){
    width:100%;
    .card{
      width:80vw;
      form{
        .wrapper{
          input{
            width:60vw;
          }
          .submit{
              span{width:60vw;}
          }
        }
      }
    }
  }
  
`