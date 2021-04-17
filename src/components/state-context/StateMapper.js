export const mapDebugState = (stateFromServer) => {
    console.log(stateFromServer)
    return {
        threadsAndEnvs: stateFromServer && stateFromServer.bThreadInfoList &&
            stateFromServer.bThreadInfoList.map(t => {
                return { name: t.name, env: t.env }
            }),
        currentRunningThread: { name: stateFromServer.currentRunningBT },
        currentLine: stateFromServer.currentLineNumber,
        eventsHistory: Object.entries(stateFromServer.eventsHistory).map(([key, value]) => value.name)

    }
}

export const mapTerminalState = (terminalStateFromServer) => {
    return {
        outputs: terminalStateFromServer.message
    }
}


