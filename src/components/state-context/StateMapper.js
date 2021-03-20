export const mapDebugState = (stateFromServer) => {
    var newState = {
        vars: stateFromServer.varsFromServer
    }
    return newState
}

export const mapTerminalState = (terminalStateFromServer) => {
    var newState = {
        terminalState: terminalStateFromServer.message
    }
    return newState
}
