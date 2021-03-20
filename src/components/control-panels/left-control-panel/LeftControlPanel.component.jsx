import React from "react";
import styled from "styled-components";
import { Resizable } from "re-resizable";
import { PanelDivider } from "../panel-divider/PanelDivider";
import { handleStyle, StyledLeftControlPanel, StyledResizableContainer } from "./LeftControlPanel.styles";

const LeftControlPanel = () => {

    return (
        <StyledResizableContainer enable={{right: true}} handleStyles={handleStyle}>
            <PanelDivider direction={"vertical"}/>
            <StyledLeftControlPanel>
            גגש
            </StyledLeftControlPanel>
        </StyledResizableContainer>
    );
};

export default LeftControlPanel;