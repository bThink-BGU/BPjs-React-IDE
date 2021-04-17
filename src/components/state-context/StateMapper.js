export const mapDebugState = (stateFromServer) => {
    console.log(stateFromServer.eventsHistory)
    return {
        threadsAndEnvs: stateFromServer && stateFromServer.bThreadInfoList &&
            stateFromServer.bThreadInfoList.map(t => {
                return { name: t.name, env: t.env }
            }),
        currentRunningThread: { name: stateFromServer.currentRunningBT },
        currentLine: stateFromServer.currentLineNumber,
        eventsHistory: Object.entries(stateFromServer.eventsHistory).map(([key, value]) => {return {name: value.name,timeStamp: key}})

    }
}

export const mapTerminalState = (terminalStateFromServer) => {
    return {
        outputs: terminalStateFromServer.message
    }
}


