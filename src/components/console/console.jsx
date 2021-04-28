import React, { useContext } from "react";
import LayoutCtx from "../../pages/IDE/LayoutCtx";
import { ConsoleContainer, Log, StyledConsole } from "./console.styles";
import { CustomTitle } from "../title/title";
import { useConsoleText } from "./useConsoleText";

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

    return (
        <ConsoleContainer activeBottomPanels={activeBottomPanels}>
            <CustomTitle level={4} color={"white"}>
                Console
            </CustomTitle>
            <StyledConsole>
                {consoleText
                    .filter(log => !!log)
                    .map(consoleOutput => assembleLog(consoleOutput))}
            </StyledConsole>
        </ConsoleContainer>
    );
}

