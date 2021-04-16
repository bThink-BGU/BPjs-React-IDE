import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { CustomTitle } from "../title/title";

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
    return (
        <EventsHistoryContainer>
            <AddEventButton size={"small"}>+ Add Event</AddEventButton>
            <EventsHistoryContent>
                <CustomTitle level={5} color={"white"}>External Events</CustomTitle>
            </EventsHistoryContent>
        </EventsHistoryContainer>
    );
};

export default EventsHistory;