import React from "react";
import logo from "../../assets/logo.png";
import { StyledHeader, StyledLogo } from "./Header.styles";
import ThemePicker from "../theme-picker/ThemePicker.component";

const IdeHeader = () => {
    return (
        <StyledHeader>
            <StyledLogo src={logo}/>
            <ThemePicker/>
        </StyledHeader>
    );
};

export default IdeHeader;