import React, { useContext, useState } from "react";
import { Space } from "antd";
import styled from "styled-components";
import { ReactComponent as DebugButton } from "../../../assets/debug-button.svg";
import IDECTX from '../../../pages/IDE/IDECTX'
import { ReactComponent as RunButton } from "../../../assets/run-button.svg";
import { ReactComponent as StopButton } from "../../../assets/stop-button.svg";
import { ReactComponent as MuteBreakpointsButton } from "../../../assets/mute-breakpoings-button.svg";
import { ReactComponent as UnMuteBreakpointsButton } from "../../../assets/unmute-breakpoints-button.svg";
import { ReactComponent as MuteSyncStateButton } from "../../../assets/mute-sync-state-button.svg";
import { ReactComponent as UnMuteSyncStateButton } from "../../../assets/unmute-sync-state-button.svg";
import { muteBreakpoints, muteSyncState, sendDebugReq, stop } from '../../../utils/api'
import { DelayedToolTip } from "../common/tooltip";
import "../../../animations.scss";

const StyledSpace = styled(Space)`
  margin-right: 5px;
  margin-left: -10px;
  margin-top: 25px;
  height: 100%;
  padding: 10px;

  svg {
    transition: 0.5s;

    &:hover {
      cursor: pointer;
    }
  }
`;

const LeftDebugButtons = () => {
    const [bpMuted, setBpMuted] = useState(false);
    const [syncStateMuted, setSyncStateMuted] = useState(false);
    const layoutContext = useContext(IDECTX);

    const handleMuteOrUnmuteBp = (mute) => {
        setBpMuted(mute);
        muteBreakpoints(mute);
    }

    const handleMuteOrUnmuteSyncState = (mute) => {
        setSyncStateMuted(mute);
        muteSyncState(mute);
    }

    return (
        <StyledSpace direction={"vertical"}>
            <DelayedToolTip placement="top"
                            title={"Debug"}
                            color={"#7cba59"}>
                <DebugButton onClick={() => sendDebugReq(layoutContext.prog, layoutContext.bps)}/>
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
            <DelayedToolTip placement="top"
                            title={`${bpMuted ? "unmute" : "mute"} breakpoints `}
                            color={"#c45749"}>
                {bpMuted
                    ? <UnMuteBreakpointsButton onClick={() => handleMuteOrUnmuteBp(false)}/>
                    : <MuteBreakpointsButton onClick={() => handleMuteOrUnmuteBp(true)}/>}
            </DelayedToolTip>
            <DelayedToolTip placement="top"
                            title={`${syncStateMuted ? "unmute" : "mute"} sync state `}
                            color={"#c45749"}>
                {syncStateMuted
                    ? <UnMuteSyncStateButton onClick={() => handleMuteOrUnmuteSyncState(false)}/>
                    : <MuteSyncStateButton onClick={() => handleMuteOrUnmuteSyncState(true)}/>}
            </DelayedToolTip>

        </StyledSpace>
    );
};

export default LeftDebugButtons;