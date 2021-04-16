import {React, useContext } from "react";
import { Space } from "antd";
import styled from "styled-components";
import { ReactComponent as DebugButton } from "../../../assets/debug-button.svg";
import IDECTX from '../../../pages/IDE/IDECTX'
import { ReactComponent as RunButton } from "../../../assets/run-button.svg";
import { ReactComponent as StopButton } from "../../../assets/stop-button.svg";
import { ReactComponent as NextSyncStateButton } from "../../../assets/next-sync-state-button.svg";
import { sendDebugReq, nextSync, stop } from '../../../utils/api'
import { DelayedToolTip } from "../common/tooltip";
import "../../../animations.scss";

const StyledSpace = styled(Space)`
  margin-right: 5px;
  margin-left: -10px;
  margin-top: 25px;
  height: 100%;
  padding: 10px;

  svg {
    width: 20px;
    height: 20px;
    transition: 0.5s;
    
    &:hover {
      cursor: pointer;
    }
  }
`;

const LeftDebugButtons = () => {
  const layoutContext = useContext(IDECTX);
    return (
        <StyledSpace direction={"vertical"}>
            <DelayedToolTip placement="top"
                            title={"Debug"}
                            color={"#7cba59"}>
                <DebugButton onClick={() => sendDebugReq(layoutContext.prog,layoutContext.bps)}/>
            </DelayedToolTip>
            <DelayedToolTip placement="top"
                            title={"Run"}
                            color={"#7cba59"}>
                <RunButton/>
            </DelayedToolTip>
            <DelayedToolTip placement="top"
                            title={"Stop"}
                            color={"#c45749"}>
                <StopButton onClick={() => stop()}/>
            </DelayedToolTip>
        </StyledSpace>
    );
};

export default LeftDebugButtons;