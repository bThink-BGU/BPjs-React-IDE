import styled from "styled-components";

export const IdeContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: hidden !important;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 50px);
`;

export const IdeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden !important;
  height: 100vh;
`;
