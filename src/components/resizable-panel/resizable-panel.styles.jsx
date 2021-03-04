import styled, { css } from "styled-components";
import { Resizable } from "re-resizable";

const getCssForPosition = (position) => {
    return css`
        ${[position]}: 0px;}
    `
};

export const StyledResizablePanel = styled(Resizable)`
  display: block;
  position: absolute !important;
  overflow: hidden;
  background-color: ${props => props.color};
  ${props => props.positions.map(position => getCssForPosition(position))}
`