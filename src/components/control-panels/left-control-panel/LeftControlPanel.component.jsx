import React from "react";
import { PanelDivider } from "../panel-divider/PanelDivider";
import { handleStyle, StyledLeftControlPanel, StyledResizableContainer } from "./LeftControlPanel.styles";
import EventsHistory from "../../event-history/EventsHistory.component";
import RequestedOrBlocked from "../../requested-or-blocked/RequestedOrBlocked";
import Trace from "../../trace/trace";

const LeftControlPanel = () => {

    return (
        <StyledResizableContainer
            enable={{right: true}}
            handleStyles={handleStyle}
            defaultSize={{width: 450}}
            maxWidth={500}>
            <PanelDivider direction={"vertical"}/>
            <StyledLeftControlPanel>
                <EventsHistory/>
                <RequestedOrBlocked/>
                <Trace/>
            </StyledLeftControlPanel>
        </StyledResizableContainer>
    );
};

export default LeftControlPanel;