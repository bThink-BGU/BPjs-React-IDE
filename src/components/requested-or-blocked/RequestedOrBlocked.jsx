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
`;

const RequestedOrBlocked = () => {
    return (
        <RequestedOrBlockedContainer>
            <CustomTitle level={5} color={"white"}>Requested/Blocked</CustomTitle>
        </RequestedOrBlockedContainer>
    );
}

export default RequestedOrBlocked;