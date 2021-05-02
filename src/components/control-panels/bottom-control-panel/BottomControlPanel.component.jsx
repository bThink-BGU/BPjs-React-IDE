import React, { useContext } from "react";
import styled from "styled-components";
import BPConsole from "../../console/console";
import EnvSelector from "../../../components/var-table/EnvSelector";
import LayoutCtx from "../../../pages/IDE/LayoutCtx";
import { BOTTOM_PANELS } from "../../../pages/IDE/ide";
import _ from "lodash";
import { Divider, Space, Tag } from "antd";
import TopDebugButtons from "../../debug-buttons/top-debug-buttons/TopDebugButtons";
import LeftDebugButtons from "../../debug-buttons/left-debug-buttons/LeftDebugButtons";
import { useConsoleText } from "../../console/useConsoleText";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import ProgramStateCTX from "../../state-context/StateContext";
import "../../../animations.scss";

const StyledBottomControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 38px;
  padding: 10px 30px 508px 20px;
  height: 400px;
  width: 100%;
  background-color: #353d45;
  border-top: 5px solid orange;

  .sync-state-on {
    opacity: 1;
    transition: opacity 0.4s;
    box-shadow: orange -4px 9px 25px -6px;
  }

  .sync-state-off {
    opacity: 0;
    transition: opacity 0.4s;
  }
`;

const PanelsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
`;

const BottomControlPanel = () => {

    const layoutCtx = useContext(LayoutCtx);
    const {progState} = useContext(ProgramStateCTX);

    const {activeBottomPanels} = layoutCtx;
    const {consoleText} = useConsoleText();

    const isActive = (panel) => _.includes(activeBottomPanels, panel);

    return (
        activeBottomPanels.length !== 0 &&
        <StyledBottomControlPanel>
            <Space size={50}>
                <TopDebugButtons/>
                {<Tag className={`sync-state-${progState.isSyncState ? "on" : "off"}`}
                      icon={<ExclamationCircleOutlined/>}
                      color="warning">
                    In Sync State
                </Tag>}
            </Space>
            <PanelsContainer>
                <LeftDebugButtons/>
                {<EnvSelector/>}
                {isActive(BOTTOM_PANELS.DEBUG) && isActive(BOTTOM_PANELS.CONSOLE) &&
                <Divider style={{
                    height: "300px",
                    width: "2px",
                    backgroundColor: "#ff9b42",
                    marginTop: "40px"
                }} type="vertical"/>}
                {<BPConsole/>}
            </PanelsContainer>
        </StyledBottomControlPanel>
    );
};

export default BottomControlPanel;
