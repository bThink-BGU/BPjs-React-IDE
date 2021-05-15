import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Button, Empty } from "antd";
import ProgramStateCTX from "../state-context/StateContext";
import { CustomTitle } from "../title/title";
import { Input } from "antd";
import "./event-history.scss";
import { EventRow } from "../event-row/EventRow";
import * as API from "../../utils/api";
import { PlusSquareOutlined } from "@ant-design/icons";
import { AnimatedList } from "react-animated-list";

const EventsHistoryContainer = styled.div`
  opacity: ${props => props.shouldFadePanel ? "0" : "1"};
  transition: opacity 0.2s;
  width: 90%;
`;

const EventsHistoryContent = styled.div`
  width: 100%;
  background-color: #353d45;
  margin-top: 10px;
  border-radius: 3px;
  padding: 10px;
  max-height: 200px;
  min-height: 200px;
  overflow: hidden;

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

const AddEventButton = styled(Button)`
  color: white;
  background: none;
  border: none;
  font-size: 17px;

  &:hover {
    color: orange;
    background: none;
    font-size: 19px;
  }

  &:focus {
    color: orange;
    background: none;
  }
`;

const ButtonInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const EventsHistory = ({shouldFadePanel}) => {
    const [showInput, inputToggle] = useState(false);
    const [input, setInput] = useState("");
    const {progState} = useContext(ProgramStateCTX);
    const addEventApi = async () => {
        await API.addExternalEvent(input)
        setInput("")
    };
    return (
        <EventsHistoryContainer shouldFadePanel={shouldFadePanel}>
            <ButtonInputContainer>
                <AddEventButton size={"small"}
                                onClick={() => inputToggle(!showInput)}
                                className={`add-event-button-${!showInput ? "visible" : "invisible"}`}>
                    + Add Event
                </AddEventButton>
                <Input
                    className={`add-event-input-${showInput ? "visible" : "invisible"}`}
                    onChange={(i) => setInput(i.target.value)}
                    value={input}
                    onKeyDown={(e) => e.key === "Escape" && inputToggle(!showInput)}
                    style={{
                        backgroundColor: "#353d45",
                        borderColor: "#ff9e35",
                        color: "white",
                    }}
                    suffix={
                        <PlusSquareOutlined
                            style={{color: "#ff9e35"}}
                            onClick={addEventApi}
                        />
                    }
                    onPressEnter={addEventApi}
                />
            </ButtonInputContainer>
            <EventsHistoryContent>
                <CustomTitle level={5} color={"white"}>
                    External Events
                </CustomTitle>
                <div className={"divvvv"} style={{height: "75%", overflowY: "auto"}}>
                    {progState.eventsHistory?.length > 0 ?
                        <AnimatedList animation={"grow"}>
                            {progState.externalEvents.map((ee, i) => (
                                <EventRow
                                    key={i}
                                    name={ee.name}
                                    clickAble={false}
                                    withX={true}
                                    onClick={() => {
                                    }}
                                />
                            ))}
                        </AnimatedList> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>}
                </div>
            </EventsHistoryContent>
        </EventsHistoryContainer>
    );
};

export default EventsHistory;
