import React from "react";
import styled from "styled-components";
import { Resizable } from "re-resizable";
import { PanelDivider } from "../panel-divider/PanelDivider";
import { handleStyle } from "./BottomControlPanel.styles";
import BPTerminal from "../../terminal/terminal";
import EnvSelector from "../../../components/var-table/EnvSelector";

const StyledResizableContainer = styled(Resizable)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLeftControlPanel = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  padding-top: 10px;
  width: 100%;
  height: 100%;
  background-color: #1b272b;
`;

const BottomControlPanel = () => {
  return (
    <StyledResizableContainer
      maxWidth={"100%"}
      enable={{ top: true }}
      handleStyles={handleStyle}
    >
      <StyledLeftControlPanel>
        <EnvSelector />
      </StyledLeftControlPanel>

      <PanelDivider direction={"horizontal"} />

      <StyledLeftControlPanel>
        <BPTerminal />
      </StyledLeftControlPanel>
    </StyledResizableContainer>
  );
};

export default BottomControlPanel;
