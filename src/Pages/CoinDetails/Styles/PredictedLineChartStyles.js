import styled from "styled-components";

export const PredictedLineChartStyles = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  color:${props=>props.colors[1]};
  .header{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  }
  .chart{
    background:white;
  }
  .warning{
    text-align:center;
    span{
      color:red;
      font-weight:bold;
    }
  }

`