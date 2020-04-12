import React from "react";
import { ActionSummaryContainer, Title, Info, Label, Value } from "./styles";
import { printDateTime, getDurationText } from "../../../../utils";
import ReactJson from "react-json-view";
/**
 *
 * This shows following details:
 * The URL and method of node.
 * All subsequent API endpoints
 * Time taken
 * Request
 * Response
 */

function ActionSummary({ action }) {
  return (
    <ActionSummaryContainer>
      <Title>Action Summary</Title>
      <Info>
        <Label>Url</Label>
        <Value>
          {action.logs.NODE_INITIATED.method} {action.logs.NODE_INITIATED.url}
        </Value>
      </Info>

      <Info>
        <Label>Time Started</Label>
        <Value>{printDateTime(action.logs.NODE_INITIATED.accurateTime)}</Value>
      </Info>

      <Info>
        <Label>Time Ended</Label>
        <Value>
          {printDateTime(
            (action.logs.NODE_FAILED || action.logs.NODE_COMPLETE).accurateTime
          )}
        </Value>
      </Info>

      <Info>
        <Label>Time Taken</Label>
        <Value>
          {getDurationText(
            (action.logs.NODE_FAILED || action.logs.NODE_COMPLETE)
              .accurateTime - action.logs.NODE_INITIATED.accurateTime
          )}
        </Value>
      </Info>

      <Info>
        <Label>Request</Label>
        <Value>
          {typeof action.logs.NODE_INITIATED.request === "string" ? (
            action.logs.NODE_INITIATED.request
          ) : (
            <ReactJson src={action.logs.NODE_INITIATED.request} />
          )}
          <ReactJson src={action.logs.NODE_INITIATED.request} name={false} />
        </Value>
      </Info>

      <Info>
        <Label>Response Code</Label>
        <Value>
          {(action.logs.NODE_FAILED || action.logs.NODE_COMPLETE).responseCode}
        </Value>
      </Info>

      <Info>
        <Label>Response</Label>
        <Value>
          {typeof (action.logs.NODE_FAILED || action.logs.NODE_COMPLETE)
            .response === "string" ? (
            (action.logs.NODE_FAILED || action.logs.NODE_COMPLETE).response
          ) : (
            <ReactJson
              src={
                (action.logs.NODE_FAILED || action.logs.NODE_COMPLETE).response
              }
            />
          )}
        </Value>
      </Info>

      <Info>
        <Label>Intermediate APIs</Label>
        <Value>
          {Object.keys(action.logs).filter((log) =>
            log.includes("API_INITIATED")
          ).length === 0
            ? "None"
            : Object.values(action.logs)
                .filter((log) => log.type.includes("API_INITIATED"))
                .map((log) => {
                  return <div>{log.url}</div>;
                })}
        </Value>
      </Info>
    </ActionSummaryContainer>
  );
}
export default ActionSummary;
