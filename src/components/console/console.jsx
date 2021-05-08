import React, { useContext, useEffect, useRef } from "react";
import LayoutCtx from "../../pages/IDE/LayoutCtx";
import { ConsoleContainer, Log, StyledConsole } from "./console.styles";
import { CustomTitle } from "../title/title";
import { useConsoleText } from "./useConsoleText";
import scrollIntoView from 'scroll-into-view-if-needed';

const assembleLog = (consoleOutput) => {
    const isSpecialLog = consoleOutput.type === "warning" || consoleOutput.type === "error";
    return <Log isSpecial={isSpecialLog}
                showIcon={isSpecialLog}
                type={consoleOutput.type}
                banner={true}
                message={<pre>{consoleOutput.message}</pre>}/>;
}

export default function BPConsole() {

    const layoutCtx = useContext(LayoutCtx);
    const {activeBottomPanels} = layoutCtx;
    const {consoleText} = useConsoleText();

    const consoleEndRef = useRef()

    useEffect(() => {
        scrollIntoView(consoleEndRef.current, {
            scrollMode: 'if-needed',
            block: 'nearest',
            inline: 'nearest',
            behavior: "smooth"
        })
    }, [consoleText]);

    return (
        <ConsoleContainer activeBottomPanels={activeBottomPanels}>
            <CustomTitle level={4} color={"white"}>
                Console
            </CustomTitle>
            <StyledConsole>
                <div>
                    {consoleText
                        .filter(log => !!log)
                        .map(consoleOutput => assembleLog(consoleOutput))}
                    <div ref={consoleEndRef}/>
                </div>
            </StyledConsole>
        </ConsoleContainer>
    );
}

