import React, { useContext } from "react";
import LayoutCtx from "../../pages/IDE/LayoutCtx";
import { Console } from "console-feed";
import { consoleStyle, ConsoleWrapper, StyledConsole } from "./console.styles";
import { CustomTitle } from "../title/title";


export default function BPConsole({consoleText}) {

    const layoutCtx = useContext(LayoutCtx);
    const {activeBottomPanels} = layoutCtx;
    //our terminal is listening to console.log so any printout with console.log file will be displayed in the ui

    return (
        <ConsoleWrapper activeBottomPanels={activeBottomPanels}>
            <CustomTitle level={4} color={"white"}>
                Console
            </CustomTitle>
            <StyledConsole>
                <Console logs={consoleText}
                         styles={consoleStyle}
                         variant={"dark"}
                         filter={["log"]}/>
            </StyledConsole>
        </ConsoleWrapper>
    );
}

