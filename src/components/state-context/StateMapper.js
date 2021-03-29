export const mapDebugState = (stateFromServer) => {
    console.log("mapDebugState", stateFromServer)
    return {
        threadsAndEnvs: stateFromServer && stateFromServer.bThreadInfoList && stateFromServer.bThreadInfoList.map(t => {
            return { name: t.name, env: t.env }
        }),
        currentRunningThread: { name: stateFromServer.currentRunningBT }
    }
}
//example state:
// const s2 = {"bThreadInfoList":[
//     {"name":"bt-world","env":{"0":{"myvar1":"330.0","myvar2":"20.0","z":"null","FUNCNAME":"BTMain"}},"wait":null,"blocked":null,"requested":[{"name":"aba"}]},
//     {"name":"bt-hello1","env":{"0":{"x":"550.0","y":"100.0","z":"null","FUNCNAME":"BTMain"}},"wait":null,"blocked":null,"requested":[{"name":"aba"}]}],
//     "eventsStatus":{"wait":[],"blocked":[],"requested":[{"name":"aba"}]},
//     "chosenEvent":null,"currentRunningBT":"bt-hello1","currentLineNumber":null}
    


export const mapTerminalState = (terminalStateFromServer) => {
    return {
        outputs: terminalStateFromServer.message
    }
}


    