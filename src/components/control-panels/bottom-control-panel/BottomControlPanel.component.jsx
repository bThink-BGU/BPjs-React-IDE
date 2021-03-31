import React, { useContext } from "react";
import styled from "styled-components";
import BPTerminal from "../../terminal/terminal";
import EnvSelector from "../../../components/var-table/EnvSelector";
import VarTableView from "../../var-table/VarsTableView";
import LayoutCtx from "../../../pages/IDE/LayoutCtx";
import { BOTTOM_PANELS } from "../../../pages/IDE/ide";
import _ from "lodash";
import { Divider } from "antd";
import TopDebugButtons from "../../top-debug-buttons/TopDebugButtons";
import LeftDebugButtons from "../../left-debug-buttons/LeftDebugButtons";

const StyledBottomControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 38px;
  padding: 10px 30px 10px 20px;
  height: 415px;
  width: 100%;
  background-color: #1b272b;
  border-top: 5px solid orange;
`;

const PanelsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 80px);

`;

const BottomControlPanel = () => {

    const layoutCtx = useContext(LayoutCtx);
    const {activeBottomPanels} = layoutCtx;

    const isActive = (panel) => _.includes(activeBottomPanels, panel);

    return (
        activeBottomPanels.length !== 0 &&
        <StyledBottomControlPanel>
            <TopDebugButtons/>
            <PanelsContainer>
                <LeftDebugButtons/>
                {isActive(BOTTOM_PANELS.DEBUG) && <EnvSelector/>}
                {isActive(BOTTOM_PANELS.DEBUG) && isActive(BOTTOM_PANELS.CONSOLE) &&
                <Divider style={{
                    height: "250px",
                    backgroundColor: "#ff9b42",
                    marginTop: "40px"
                }} type="vertical"/>}
                {isActive(BOTTOM_PANELS.CONSOLE) && <BPTerminal/>}
            </PanelsContainer>
        </StyledBottomControlPanel>
    );
};

export default BottomControlPanel;
