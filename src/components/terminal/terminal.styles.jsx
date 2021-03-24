import { Typography } from 'antd';
import _ from "lodash";
import { BOTTOM_PANELS } from "../../pages/IDE/ide";
import styled, { css } from "styled-components";

const {Title} = Typography;

const getWidth = (activeBottomPanels) => {
    const terminalIsActive = _.includes(activeBottomPanels, BOTTOM_PANELS.TERMINAL);
    const debugIsActive = _.includes(activeBottomPanels, BOTTOM_PANELS.DEBUG);
    if (terminalIsActive && debugIsActive) {
        return css` width: 48% `;
    } else if (!debugIsActive && terminalIsActive) {
        return css` width: 100% `;
    }
};

export const consoleStyle = {
    LOG_COLOR: "white",
    BASE_FONT_SIZE: "16px",
    LOG_BACKGROUND: "none"
};

export const StyledConsole = styled.div`
  font-weight: bold;
  font-size: 16px;
  overflow-y: scroll;
  background-color: rgb(49, 49, 49);
  width: 100%;
  height: 100%;
`;

export const StyledTitle = styled(Title)`
  color: white !important;
`;

export const ConsoleWrapper = styled.div`
  height: 88%;
  border-radius: 7px;
  ${props => getWidth(props.activeBottomPanels)}
`;
