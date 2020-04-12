import React, { useState } from "react";
import { LogLineContainer, LogHeader, Time, Type, LogBody } from "./styles";
import { printDateTime } from "../../../../../utils";
import { Info, Label, Value } from "../../ActionSummary/styles";
import ReactJson from "react-json-view";

function getResponseBody(log) {
  return (
    <>
      <Info>
        <Label>Response Code</Label>
        <Value>{log.responseCode}</Value>
      </Info>

      <Info>
        <Label>Response</Label>
        <Value>
          {typeof log.response === "string" ? (
            log.response
          ) : (
            <ReactJson src={log.response} />
          )}
        </Value>
      </Info>
    </>
  );
}

function LogLine({ log }) {
  const [collapsed, setCollapsedState] = useState(true);
  return (
    <LogLineContainer>
      <LogHeader
        onClick={() => {
          setCollapsedState(!collapsed);
        }}
      >
        <Time>{printDateTime(log.accurateTime)}</Time>
        <Type>{log.type}</Type>
      </LogHeader>
      {!collapsed && (
        <LogBody>
          <Info>
            <Label>Method</Label>
            <Value>{log.method}</Value>
          </Info>
          <Info>
            <Label>URL</Label>
            <Value>{log.url}</Value>
          </Info>

          <Info>
            <Label>Headers</Label>
            <Value>
              {" "}
              {typeof log.headers === "string" ? (
                log.headers
              ) : (
                <ReactJson src={log.headers} />
              )}
            </Value>
          </Info>

          <Info>
            <Label>Request</Label>
            <Value>
              {" "}
              {typeof log.request === "string" ? (
                log.request
              ) : (
                <ReactJson src={log.request} />
              )}
            </Value>
          </Info>

          {(log.type.includes("COMPLETE") || log.type.includes("FAILED")) &&
            getResponseBody(log)}
        </LogBody>
      )}
    </LogLineContainer>
  );
}
export default LogLine;
