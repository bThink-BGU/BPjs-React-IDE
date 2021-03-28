import styled, { css } from "styled-components";
import _ from "lodash";
import { BOTTOM_PANELS } from "../../pages/IDE/ide";
import { Typography } from 'antd';
const {Title} = Typography;

const getWidth = (activeBottomPanels) => {
    const terminalIsActive = _.includes(activeBottomPanels, BOTTOM_PANELS.CONSOLE);
    const debugIsActive = _.includes(activeBottomPanels, BOTTOM_PANELS.DEBUG);
    if (terminalIsActive && debugIsActive) {
        return css` width: 48%;`;
    } else if (debugIsActive && !terminalIsActive) {
        return css` width: 100%;`;
    }
};

export const TableWrapper = styled.div`
  height: 87.5% !important;
  border-radius: 7px;
  ${props => getWidth(props.activeBottomPanels)}

  table {
    box-shadow: 0 0 0 2px #1c272b;
    border-style: hidden !important;
  }

  .ant-cascader-picker {
    width: 100% !important;
  }

  .ant-table-thead > tr > th {
    color: white !important;
    background: #ff9b42 !important;
  }

  .ant-table-tbody > tr > th {
    color: black !important;
    background: #1c272b !important;
  }

  .thread-selector-title {
    color: white;
    width: 100%;
    background-color: #ff9b42;
  }
`;

export const StyledTitle = styled(Title)`
  color: white !important;
`;
