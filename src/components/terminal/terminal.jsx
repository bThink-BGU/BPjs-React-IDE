import React, { useState, useContext, useEffect } from "react";
import LayoutCtx from "../../pages/IDE/LayoutCtx";
import { Console, Hook, Unhook } from "console-feed";
import ProgramStateCTX from "../state-context/StateContext";
import printoutsResolver from "./TerminalStateResolver"
import { consoleStyle, ConsoleWrapper, StyledConsole, StyledTitle } from "./terminal.styles";

const initialBpjsText = " /$$$$$$$  /$$$$$$$   /$$$$$  /$$$$$$ \n" +
    "| $$__  $$| $$__  $$ |__  $$ /$$__  $$\n" +
    "| $$  \\ $$| $$  \\ $$    | $$| $$  \\__/\n" +
    "| $$$$$$$ | $$$$$$$/    | $$|  $$$$$$ \n" +
    "| $$__  $$| $$____//$$  | $$ \\____  $$\n" +
    "| $$  \\ $$| $$    | $$  | $$ /$$  \\ $$\n" +
    "| $$$$$$$/| $$    |  $$$$$$/|  $$$$$$/\n" +
    "|_______/ |__/     \\______/  \\______/ \n" +
    "                                      \n" +
    "Happy Debugging";


export default function BPTerminal() {

    const [text, setText] = useState([]);
    const layoutCtx = useContext(LayoutCtx);
    const {activeBottomPanels} = layoutCtx;
    const terminalState = useContext(ProgramStateCTX);
    //our terminal is listening to console.log so any printout with console.log file will be displayed in the ui

    useEffect(() => {
        Hook(
            window.console,
            (log) => setText((currLogs) => [...currLogs, log]),
            false
        )
        console.log(initialBpjsText);
        return () => Unhook(window.console)
    }, [])

    useEffect(() => {
        console.log(printoutsResolver(terminalState))
    }, [terminalState.terminalState])

    return (
        <ConsoleWrapper activeBottomPanels={activeBottomPanels}>
            <StyledTitle level={4}>
                Console
            </StyledTitle>
            <StyledConsole>
                <Console logs={text}
                         styles={consoleStyle}
                         variant={"dark"}/>
            </StyledConsole>
        </ConsoleWrapper>
    );
}

