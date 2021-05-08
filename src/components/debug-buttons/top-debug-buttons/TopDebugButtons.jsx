import React from "react";
import { Space, Tag } from "antd";
import styled from "styled-components";
import { ReactComponent as StepOutButton } from "../../../assets/step-out-button.svg";
import { ReactComponent as StepIntoButton } from "../../../assets/step-into-button.svg";
import { ReactComponent as StepOverButton } from "../../../assets/step-over-button.svg";
import { nextSync, sendContinueReq, stepInto, stepOut, stepOver } from '../../../utils/api'
import { DelayedToolTip } from "../common/tooltip";
import "../../../animations.scss";
import { ReactComponent as ContinueButton } from "../../../assets/continue-button.svg";
import { ReactComponent as NextSyncStateButton } from "../../../assets/next-sync-state-button.svg";

const StyledSpace = styled(Space)`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;

const ButtonsContainer = styled(Tag)`
  padding-top: 2px;
  height: 32px;
  margin-left: 58px;
  margin-bottom: 3px;
  opacity: 1 !important;
`

const TopDebugButtons = () => {
    return (
        <ButtonsContainer color={"#dfe2e6"}>
            <StyledSpace direction={"horizontal"}>
                <DelayedToolTip placement="top"
                                title={"Next Sync State"}
                                color={"#2a9bc4"}>
                    <NextSyncStateButton onClick={() => nextSync()}/>
                </DelayedToolTip>
                <DelayedToolTip placement="top"
                                title={"Continue"}
                                color={"#2a9bc4"}>
                    <ContinueButton onClick={() => sendContinueReq()}/>
                </DelayedToolTip>
                <DelayedToolTip placement="top"
                                title={"Step Out"}
                                color={"#2a9bc4"}>
                    <StepOutButton onClick={() => stepOut()}/>
                </DelayedToolTip>
                <DelayedToolTip placement="top"
                                title={"Step Into"}
                                color={"#2a9bc4"}>
                    <StepIntoButton onClick={() => stepInto()}/>
                </DelayedToolTip>
                <DelayedToolTip placement="top"
                                title={"Step Over"}
                                color={"#2a9bc4"}>
                    <StepOverButton onClick={() => stepOver()}/>
                </DelayedToolTip>
            </StyledSpace>
        </ButtonsContainer>
    );
};

export default TopDebugButtons;