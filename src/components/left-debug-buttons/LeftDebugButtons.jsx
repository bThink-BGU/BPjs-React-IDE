import React from "react";
import { Space, Tooltip } from "antd";
import styled from "styled-components";
import { ReactComponent as DebugButton } from "../../assets/debug-button.svg";
import { ReactComponent as RunButton } from "../../assets/run-button.svg";
import { ReactComponent as StopButton } from "../../assets/stop-button.svg";
import { ReactComponent as NextSyncStateButton } from "../../assets/next-sync-state-button.svg";
import { sendDebugReq } from '../../utils/api'
//2a9bc4
const StyledSpace = styled(Space)`
  margin-right: 5px;
  margin-left: -10px;
  margin-top: 25px;
  height: 100%;
  padding: 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const LeftDebugButtons = () => {
    return (
        <StyledSpace direction={"vertical"}>
            <Tooltip placement="top" title={"Debug"} color={"#7cba59"}>
                <DebugButton onClick={()=>sendDebugReq()}/>
            </Tooltip>
            <Tooltip placement="top" title={"Run"} color={"#7cba59"}>
                <RunButton/>
            </Tooltip>
            <Tooltip placement="top" title={"Next Sync State"} color={"#7cba59"}>
                <NextSyncStateButton/>
            </Tooltip>
            <Tooltip placement="top" title={"Stop"} color={"#c45749"}>
                <StopButton/>
            </Tooltip>
        </StyledSpace>
    );
};

export default LeftDebugButtons;