import React from "react";
import styled from "styled-components";
import { CustomTitle } from "../title/title";

const TraceContainer = styled.div`
  width: 90%;
  min-height: 200px;
  background-color: #353d45;
  margin-top: 30px;
  border-radius: 3px;
  padding: 10px;
`;

const Trace = () => {
    return (
        <TraceContainer>
            <CustomTitle level={5} color={"white"}>Trace</CustomTitle>
        </TraceContainer>
    );
};

export default Trace;