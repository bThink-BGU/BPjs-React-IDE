import React from "react";
import { Space } from "antd";
import styled from "styled-components";
import { ReactComponent as StepOutButton } from "../../../assets/step-out-button.svg";
import { ReactComponent as StepIntoButton } from "../../../assets/step-into-button.svg";
import { ReactComponent as StepOverButton } from "../../../assets/step-over-button.svg";
import { stepInto, stepOut, stepOver } from '../../../utils/api'
import { DelayedToolTip } from "../common/tooltip";
import "../../../animations.scss";

const StyledSpace = styled(Space)`
  margin-left: 30px;
  margin-bottom: 10px;
  width: 100%;

  svg {
    width: 25px;
    height: 25px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const TopDebugButtons = () => {
    return (
        <StyledSpace direction={"horizontal"}>
            <DelayedToolTip placement="top"
                            title={"Step Out"}
                            color={"#2a9bc4"}>
                <StepOutButton className={"hvr-icon-grow"} onClick={() => stepOut()}/>
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
    );
};

export default TopDebugButtons;