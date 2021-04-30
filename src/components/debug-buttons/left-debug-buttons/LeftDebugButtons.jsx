import React, { useContext } from "react";
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
import { ReactComponent as WaitForExternalEventsButton } from "../../../assets/external-events-on-button.svg";
import { ReactComponent as SkipForExternalEventsButton } from "../../../assets/external-events-off-button.svg";
import {
    muteBreakpoints,
    muteSyncState,
    nextSync,
    sendDebugReq,
    sendRunReq,
    skipExternalEvents,
    stop
} from '../../../utils/api'
import { DelayedToolTip } from "../common/tooltip";
import "../../../animations.scss";
import { ReactComponent as NextSyncStateButton } from "../../../assets/next-sync-state-button.svg";

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
    const ideProps = useContext(IDECTX);

    const handleMuteOrUnmuteBp = (mute) => {
        ideProps.setBpMuted(mute);
        muteBreakpoints(mute);
    }

    const handleMuteOrUnmuteSyncState = (mute) => {
        ideProps.setSyncStateMuted(mute);
        muteSyncState(mute);
    }

    const handleSkipOrWaitExternalEvents = (skip) => {
        ideProps.setSkipExternals(skip);
        skipExternalEvents(skip);
    }

    return (
        <StyledSpace direction={"vertical"} size={10}>
            <DelayedToolTip placement="top"
                            title={"Debug"}
                            color={"#7cba59"}>
                <DebugButton onClick={() => sendDebugReq(ideProps)}/>
            </DelayedToolTip>
            <DelayedToolTip placement="top"
                            title={"Run"}
                            color={"#7cba59"}>
                <RunButton onClick={() => sendRunReq(ideProps)}/>
            </DelayedToolTip>
            <DelayedToolTip placement="top"
                            title={"Next Sync State"}
                            color={"#7cba59"}>
                <NextSyncStateButton onClick={() => nextSync()}/>
            </DelayedToolTip>
            <DelayedToolTip placement="top"
                            title={"Stop"}
                            color={"#c45749"}>
                <StopButton onClick={() => stop()}/>
            </DelayedToolTip>
            <DelayedToolTip placement="top"
                            title={`${ideProps.bpMuted ? "unmute" : "mute"} breakpoints `}
                            color={"#c45749"}>
                {ideProps.bpMuted
                    ? <UnMuteBreakpointsButton onClick={() => handleMuteOrUnmuteBp(false)}/>
                    : <MuteBreakpointsButton onClick={() => handleMuteOrUnmuteBp(true)}/>}
            </DelayedToolTip>
            <DelayedToolTip placement="top"
                            title={`${ideProps.syncStateMuted ? "unmute" : "mute"} sync state `}
                            color={"#c45749"}>
                {ideProps.syncStateMuted
                    ? <UnMuteSyncStateButton onClick={() => handleMuteOrUnmuteSyncState(false)}/>
                    : <MuteSyncStateButton onClick={() => handleMuteOrUnmuteSyncState(true)}/>}
            </DelayedToolTip>

            <DelayedToolTip placement="top"
                            title={`${ideProps.skipExternals ? "wait for" : "dismiss"} external events `}
                            color={"#c45749"}>
                {ideProps.skipExternals
                    ? <WaitForExternalEventsButton onClick={() => handleSkipOrWaitExternalEvents(false)}/>
                    : <SkipForExternalEventsButton onClick={() => handleSkipOrWaitExternalEvents(true)}/>}
            </DelayedToolTip>
        </StyledSpace>
    );
};

export default LeftDebugButtons;
