import React, { useEffect, useState, useContext } from "react";
import printoutsResolver from "./ConsoleStateResolver";
import ProgramStateCTX from "../state-context/StateContext";

export const initialBpjsText = " /$$$$$$$  /$$$$$$$   /$$$$$  /$$$$$$ \n" +
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
    const [text, setText] = useState([{message: initialBpjsText, type: "info"}]);
    const terminalState = useContext(ProgramStateCTX);

    useEffect(() => {
        setText(prevText => [...prevText, printoutsResolver(terminalState)]);
    }, [terminalState.terminalState]);

    return {consoleText: text, updateConsoleText: setText};
};

