import React from "react";
import {
  ActionLineContainer,
  Time,
  TraceId,
  Endpoint,
  Status,
  APICalls,
  TimeTaken,
} from "./styles";
import { getDurationText } from "../../../../utils";

function getAPICallCount(types){
    return types.filter((type)=>type.includes("API_INITIATED")).length
}
function ActionLine({ action, onClick, active }) {
  return (
    <ActionLineContainer onClick={onClick} active={active}>
      <Time>{action.endTime}</Time>
      <TraceId active={active}>{action.traceId}</TraceId>
      <Endpoint>
        {action.logs.NODE_INITIATED.method} {action.logs.NODE_INITIATED.url}
      </Endpoint>
      <Status good={(action.logs.NODE_COMPLETE || action.logs.NODE_FAILED).responseCode === 200}>
        {(action.logs.NODE_COMPLETE || action.logs.NODE_FAILED).responseCode}
      </Status>
      <APICalls>{getAPICallCount(Object.keys(action.logs))} API Calls</APICalls>
      <TimeTaken>{getDurationText(action.timeTaken)}</TimeTaken>
    </ActionLineContainer>
  );
}

export default ActionLine;
