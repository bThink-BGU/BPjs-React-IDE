import styled, { css } from "styled-components";
import { Resizable } from "re-resizable";

export const LeftControlPanelContent = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  ${props => `height: calc(100vh - ${props.bottomPanelHeight + 20}px)`};
  background-color: green;
  width: 90%;
  margin: 20px 20px;
  padding: 20px 20px;
`;

export const StyledLeftControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  width: 100%;
  height: calc(100vh - 50px);
  background-color: rgb(35, 39, 43);
`;

export const StyledResizableContainer = styled(Resizable)`
  display: flex;
  align-items: center;
  justify-content: center;
`;




export const handleStyle = {
    right: {
        right: "0px"
    }
};
