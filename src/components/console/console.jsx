import React, { useContext } from "react";
import LayoutCtx from "../../pages/IDE/LayoutCtx";
import { Console } from "console-feed";
import { consoleStyle, ConsoleWrapper, StyledConsole, StyledTitle } from "./console.styles";



export default function BPConsole({consoleText}) {

    const layoutCtx = useContext(LayoutCtx);
    const {activeBottomPanels} = layoutCtx;
    //our terminal is listening to console.log so any printout with console.log file will be displayed in the ui

    return (
        <ConsoleWrapper activeBottomPanels={activeBottomPanels}>
            <StyledTitle level={4}>
                Console
            </StyledTitle>
            <StyledConsole>
                <Console logs={consoleText}
                         styles={consoleStyle}
                         variant={"dark"}/>
            </StyledConsole>
        </ConsoleWrapper>
    );
}

