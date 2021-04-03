import React, { useEffect, useState, useContext } from "react";
import { Hook } from "console-feed";
import printoutsResolver from "./ConsoleStateResolver";
import ProgramStateCTX from "../state-context/StateContext";

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

export const useConsoleText = () => {
    const [text, setText] = useState([]);
    const terminalState = useContext(ProgramStateCTX);

    useEffect(() => {
        Hook(
            window.console,
            (log) => setText((currLogs) => [...currLogs, log]),
            false
        )
        console.log(initialBpjsText);
        // return () => Unhook(window.console)
    }, [])

    useEffect(() => {
        console.log(printoutsResolver(terminalState))
    }, [terminalState.terminalState]);

    return {consoleText: text};
};

