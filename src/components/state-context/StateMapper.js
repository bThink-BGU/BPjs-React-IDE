export const mapDebugState = (stateFromServer) => {
    console.log(stateFromServer)
    return {
        threadsAndEnvs: stateFromServer && stateFromServer.bThreadInfoList &&
            stateFromServer.bThreadInfoList.map(t => {
                return { name: t && t.name, env:t && t.env }
            }),
        currentRunningThread: { name: stateFromServer.currentRunningBT },
        currentLine: stateFromServer.currentLineNumber,
        eventsHistory: Object.entries(stateFromServer.eventsHistory).map(([key, value]) => {return {name: value.name,timeStamp: key}}),
        externalEvents:
            stateFromServer.eventsStatus &&
             stateFromServer.eventsStatus.externalEvents &&
             Object.entries(stateFromServer.eventsStatus.externalEvents).map(([key, value]) => {return {name: value.name}})

    }
}

export const mapTerminalState = (terminalStateFromServer) => {
    return {
        outputs: terminalStateFromServer.message
    }
}


