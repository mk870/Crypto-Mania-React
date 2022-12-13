import styled from "styled-components";

export const Button2 = styled.button`
  border-radius: 25px;
  background-color: ${props=>props.colors[2]};
  cursor: pointer;
  color: ${props=>props.colors[6]};
  border:1px solid ${props=>props.colors[2]};
  padding: 10px 20px 10px 20px;
  font-size:15px;
  font-weight:600;
  margin:10px;
  display: flex;
  align-items:center;
  &:hover{
    color:${props=>props.colors[2]};
    background: ${props=>props.colors[6]}
  }
  @media (max-width:410px){
    font-size:12px;
    padding:7px;
    border-radius: 10px;
  }
`