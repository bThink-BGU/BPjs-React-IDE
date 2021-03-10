import React from "react";
import logo from "../../assets/logo.png";
import { StyledHeader, StyledLogo } from "./Header.styles";

const IdeHeader = () => {
  return (
      <StyledHeader>
        <StyledLogo src={logo}/>
      </StyledHeader>
  );
};

export default IdeHeader;