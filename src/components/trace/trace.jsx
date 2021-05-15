import React, { useContext } from "react";
import ProgramStateCTX from "../state-context/StateContext";
import styled from "styled-components";
import { CustomTitle } from "../title/title";
import * as API from "../../utils/api";
import { EventRow } from "../event-row/EventRow";
import { AnimatedList } from "react-animated-list";
import { Empty,Badge } from "antd";

const TraceContainer = styled.div`
  opacity: ${props => props.shouldFadePanel ? "0" : "1"};
  width: 90%;
  min-height: 200px;
  max-height: 200px;
  overflow: hidden;
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

  .ant-popover-buttons .ant-btn-primary {
    background: #ff9e35;
  }
`;

const Trace = ({shouldFadePanel}) => {
        const {progState} = useContext(ProgramStateCTX);
        const confirmMsg = "Are u sure you want to travel back in time?";
        return (
            <TraceContainer shouldFadePanel={shouldFadePanel}>
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
                <div style={{height: "75%", overflowY: "auto"}}>
                {progState.currentEvent ? (
              
              <EventRow alertDot name={progState.currentEvent} />
            
          ) : null}
                    {progState.eventsHistory?.length > 0 ?
                        <AnimatedList animation={"grow"}>
                            {progState.eventsHistory.map((eh, i) => (
                                <EventRow
                                    key={i}
                                    name={eh.name}
                                    clickAble
                                    withX
                                    withConfirmation
                                    afterConfirmMsg={`Back To The Time Where \n  Event: \"${eh.name}\" \n Came Out To The World!`}
                                    confirmMsg={`Are you sure you want to cancel the event \"${eh.name}\" selection?`}
                                    onClick={() => API.backToSnapShot(eh.timeStamp)}
                                />
                            ))}
                        </AnimatedList> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>}
                </div>
            </TraceContainer>
        );
    }
;

export default Trace;
