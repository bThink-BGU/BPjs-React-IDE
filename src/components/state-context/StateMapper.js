export const mapDebugState = (stateFromServer) => {
    return {
        threadsAndEnvs: stateFromServer && stateFromServer.bThreadInfoList &&
            stateFromServer.bThreadInfoList.map(t => {
                return { name: t.name, env: t.env }
            }),
        currentRunningThread: { name: stateFromServer.currentRunningBT },
        currentLine: stateFromServer.currentLineNumber
        
    }
}

export const mapTerminalState = (terminalStateFromServer) => {
    return {
        outputs: terminalStateFromServer.message
    }
}


