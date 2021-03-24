import React, { useContext } from "react";
import styled from "styled-components";
import BPTerminal from "../../terminal/terminal";
import EnvSelector from "../../../components/var-table/EnvSelector";
import VarTableView from "../../var-table/VarsTableView";
import LayoutCtx from "../../../pages/IDE/LayoutCtx";
import { BOTTOM_PANELS } from "../../../pages/IDE/ide";
import _ from "lodash";
import { Divider } from "antd";

const StyledBottomControlPanel = styled.div`
  position: fixed;
  bottom: 38px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 10px 20px 10px 20px;
  width: 100%;
  height: 355px;
  background-color: #1b272b;
`;

const BottomControlPanel = () => {

    const layoutCtx = useContext(LayoutCtx);
    const {activeBottomPanels} = layoutCtx;

    const isActive = (panel) => _.includes(activeBottomPanels, panel);

    return (
        activeBottomPanels.length !== 0 &&
        <StyledBottomControlPanel>
            {isActive(BOTTOM_PANELS.DEBUG) && <VarTableView/>}
            {isActive(BOTTOM_PANELS.DEBUG) && isActive(BOTTOM_PANELS.TERMINAL) && <Divider style={{
                height: "320px",
                backgroundColor: "#ff9b42",
                marginTop: "15px"
            }} type="vertical"/>}
            {isActive(BOTTOM_PANELS.TERMINAL) && <BPTerminal/>}
        </StyledBottomControlPanel>
    );
};

export default BottomControlPanel;
