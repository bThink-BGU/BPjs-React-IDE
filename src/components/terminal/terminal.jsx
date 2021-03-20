import React, { useState, useContext, useEffect } from "react";
import LayoutCtx from "../../pages/IDE/LayoutCtx";
import { Console, Hook, Unhook } from "console-feed";
import ProgramStateCTX from "../state-context/StateContext";
import printoutsResolver from "./TerminalStateResolver"
import { BOTTOM_PANELS } from "../../pages/IDE/ide";
import _ from "lodash";

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

    const getWidth = () => {
        const terminalIsActive = _.includes(activeBottomPanels, BOTTOM_PANELS.TERMINAL);
        const debugIsActive = _.includes(activeBottomPanels, BOTTOM_PANELS.DEBUG);
        if(terminalIsActive && debugIsActive) {
            return "49%";
        }
        else if (!debugIsActive && terminalIsActive) {
            return "100%";
        }
    };

    const terminalStyle = {
        fontWeight: "bold",
        fontSize: "16px",
        height: "92.6%",
        borderRadius: "5px",
        overflowY: "scroll",
        backgroundColor: "rgb(49, 49, 49)",
        width: `${getWidth()}`
    };

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
        <div style={terminalStyle}>
            Console
            <Console logs={text} styles={{LOG_COLOR: "white", BASE_FONT_SIZE: "16px", LOG_BACKGROUND: "none"}}
                      variant={"dark"}/>
        </div>
    );
}

