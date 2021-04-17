import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { CustomTitle } from "../title/title";
import { Input } from "antd";
import "./input-css.scss";
import * as API from "../../utils/api";
import { PlusSquareOutlined } from "@ant-design/icons";
const EventsHistoryContainer = styled.div`
  width: 90%;
`;

const EventsHistoryContent = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: #353d45;
  margin-top: 10px;
  border-radius: 3px;
  padding: 10px;
  max-height: 200px;
  overflow-y: auto;
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

const EventsHistory = () => {
  const [showInput, inputToggle] = useState(false);
  const [input, setInput] = useState("");
  const addEventApi = async () => {
    await API.addExternalEvent(input)
    setInput("")
  };
  return (
    <EventsHistoryContainer>
      {showInput ? (
        <Input
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
              style={{ color: "#ff9e35" }}
              onClick={addEventApi}
            />
          }
          onPressEnter={addEventApi}
        />
      ) : (
        <AddEventButton size={"small"} onClick={() => inputToggle(!showInput)}>
          + Add Event
        </AddEventButton>
      )}

      <EventsHistoryContent>
        <CustomTitle level={5} color={"white"}>
          External Events
        </CustomTitle>
      </EventsHistoryContent>
    </EventsHistoryContainer>
  );
};

export default EventsHistory;
