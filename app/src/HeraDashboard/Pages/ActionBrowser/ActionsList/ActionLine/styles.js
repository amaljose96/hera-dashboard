import styled from "styled-components";
import { getColor } from "../../../../colors";

export const ActionLineContainer = styled.div`
  margin: 5px;
  padding: 10px;
  display: flex;
  background-image: linear-gradient(to right, ${getColor()}33, ${getColor()}44);
  align-items: center;
  border-radius: 5px;
  white-space: nowrap;
  ${(props) =>
    props.active &&
    `
    background-image: linear-gradient(to right, #fff, #eee);
  font-weight:bold;`}
`;

export const Time = styled.div`
  width: 10vw;
  font-size: 12px;
  white-space: nowrap;
`;
export const TraceId = styled.div`
  font-family: monospace;
  margin-right: 1vw;
  white-space: nowrap;
`;
export const Endpoint = styled.div`
  width: 30vw;
  overflow-y: scroll;
  white-space: nowrap;
  margin: 0 1vw;
  white-space: nowrap;
`;
export const Status = styled.div`
  width: 2vw;
  color: ${(props) => (props.good ? "#060" : "#d00")};
  white-space: nowrap;
`;
export const APICalls = styled.div`
  width: 5vw;
  white-space: nowrap;
`;
export const TimeTaken = styled.div`
  width: 2vw;
  white-space: nowrap;
`;
