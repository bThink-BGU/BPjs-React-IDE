import React from "react";
import { Button, Space } from "antd";
import styled from "styled-components";

const StyledSpace = styled(Space)`
  padding-left: 80px;
  padding-bottom: 10px;
`;

const TopDebugButtons = () => {
    return (
        <StyledSpace direction={"horizontal"}>
            <Button>Click</Button>
            <Button>Click</Button>
            <Button>Click</Button>
            <Button>Click</Button>
        </StyledSpace>
    );
};

export default TopDebugButtons;