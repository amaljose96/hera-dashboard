import styled from "styled-components";
import { getColor } from "../../../../colors";
export const ActionSummaryContainer = styled.div`
  margin: 10px;
  box-sizing: border-box;
  padding:10px;
  background-image: linear-gradient(to bottom right, ${getColor()}22, ${getColor()}33);
`;
export const Title = styled.div`
    font-weight:bold;
    font-size:18px;
    
`;
export const Info = styled.div`
    margin:5px 0px;
    width:100%;
    word-wrap:break-word;
    overflow-x:scroll;

`;
export const Label = styled.div`
    font-size:12px;
    font-weight:bold;
`;
export const Value = styled.div`   
    font-size:14px;
`;