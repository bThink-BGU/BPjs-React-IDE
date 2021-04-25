import React, { useContext } from "react";
import ProgramStateCTX from "../state-context/StateContext";
import styled from "styled-components";
import { CustomTitle } from "../title/title";
import * as API from "../../utils/api";
import { EventRow } from "../event-row/EventRow";
const TraceContainer = styled.div`
  width: 90%;
  min-height: 200px;
  max-height: 200px;
  overflow-y: auto;
  background-color: #353d45;
  margin-top: 30px;
  border-radius: 3px;
  padding: 10px;    
  ::-webkit-scrollbar {
    height: 12px;
    width: 6px;
    background: #23272b;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff9e35;
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.75);
  }
`;

const Trace = () => {
  const { progState } = useContext(ProgramStateCTX);
  const confirmMsg = "Are u sure you want to travel back in time?";
  return (
    <TraceContainer>
      <CustomTitle
        style={{
          position: "sticky",
          top: "-10px",
          minHeight: "25px;",
          padding: "5px 0px 5px 0px",
          backgroundColor: "#363d46",
        }}
        level={5}
        color={"white"}
      >
        Trace
      </CustomTitle>
      {progState.eventsHistory &&
        progState.eventsHistory.map((eh) => (
          <EventRow
            name={eh.name}
            clickAble
            withConfirmation
            afterConfirmMsg={`Back To The Time Where \n  Event: \"${eh.name}\" \n Came Out To The World!`}
            confirmMsg={`Are you sure you want to cancel the event \"${eh.name}\" selection?`}
            onClick={() => API.backToSnapShot(eh.timeStamp)}
          />
        ))}

{/* please keep this comment as this is very easy to development! */}
      {["a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c"].map(
        (eh) => (
          <EventRow
            name={eh}
            clickAble={false}
            afterConfirmMsg={`Back To ${eh}`}
            onClick={() => console.log("clicked")}
            confirmMsg={confirmMsg}
          />
        )
      )}
    </TraceContainer>
  );
};

export default Trace;
