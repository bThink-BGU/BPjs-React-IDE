import React from "react";
import styled from "styled-components";
import { CustomTitle } from "../title/title";

const RequestedOrBlockedContainer = styled.div`
  width: 90%;
  min-height: 200px;
  background-color: #353d45;
  margin-top: 30px;
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

const RequestedOrBlocked = () => {
    return (
        <RequestedOrBlockedContainer>
            <CustomTitle level={5} color={"white"}>Requested/Blocked</CustomTitle>
        </RequestedOrBlockedContainer>
    );
}

export default RequestedOrBlocked;