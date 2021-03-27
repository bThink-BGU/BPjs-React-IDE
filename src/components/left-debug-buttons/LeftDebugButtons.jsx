import React from "react";
import { Button, Space } from "antd";
import styled from "styled-components";

const StyledSpace = styled(Space)`
  padding-right: 14px;
  padding-top: 38px;
`;

const LeftDebugButtons = () => {
    return (
        <StyledSpace direction={"vertical"}>
            <Button>Click</Button>
            <Button>Click</Button>
            <Button>Click</Button>
            <Button>Click</Button>
        </StyledSpace>
    );
};

export default LeftDebugButtons;