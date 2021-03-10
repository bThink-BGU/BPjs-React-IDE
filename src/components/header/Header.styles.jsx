import { Layout } from "antd";
import styled from "styled-components";

const {Header} = Layout;

export const StyledHeader = styled(Header)`
  height: 50px;
  background-color: #ff9b43;
  //background: rgb(255,155,67);
  //background: linear-gradient(90deg, rgba(255,155,67,1) 0%, rgba(255,155,67,0.8295693277310925) 82%, rgba(238,236,227,1) 98%);
`;

export const StyledLogo = styled.img`
  position: absolute;
  left: 10px;
  height: 48px;
`;
