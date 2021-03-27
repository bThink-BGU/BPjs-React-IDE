import React from "react";
import { PanelDivider } from "../panel-divider/PanelDivider";
import { handleStyle, StyledLeftControlPanel, StyledResizableContainer } from "./LeftControlPanel.styles";

const LeftControlPanel = () => {

    return (
        <StyledResizableContainer
            enable={{right: true}}
            handleStyles={handleStyle}
            defaultSize={{width: 10}}>
            <PanelDivider direction={"vertical"}/>
            <StyledLeftControlPanel>
                גגש
            </StyledLeftControlPanel>
        </StyledResizableContainer>
    );
};

export default LeftControlPanel;