import React from "react";
import { ActionsListContainer } from "./styles";
import ActionLine from "./ActionLine";

function ActionsList({ actions, selectedAction, setSelectedAction }) {
  return (
    <ActionsListContainer>
      {Object.values(actions)
        .sort((b, a) => {
          return (
            (a.logs.NODE_COMPLETE || a.logs.NODE_FAILED).accurateTime -
            (b.logs.NODE_COMPLETE || b.logs.NODE_FAILED).accurateTime
          );
        })
        .map((action) => {
          return (
            <ActionLine
              action={action}
              onClick={() => setSelectedAction(action)}
              active={action.traceId === selectedAction.traceId}
            />
          );
        })}
    </ActionsListContainer>
  );
}

export default ActionsList;
