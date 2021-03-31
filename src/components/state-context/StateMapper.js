export const mapDebugState = (stateFromServer) => {
    var newState = {
        threadsAndEnvs:stateFromServer&& stateFromServer.bThreadInfoList &&  stateFromServer.bThreadInfoList.map(t => {return {name: t.name, env: t.env }}),
        currentRunningThread: {name: stateFromServer.currentRunningBT}    
    }
    return newState
}
//example state:
// const s2 = {"bThreadInfoList":[
//     {"name":"bt-world","env":{"0":{"myvar1":"330.0","myvar2":"20.0","z":"null","FUNCNAME":"BTMain"}},"wait":null,"blocked":null,"requested":[{"name":"aba"}]},
//     {"name":"bt-hello1","env":{"0":{"x":"550.0","y":"100.0","z":"null","FUNCNAME":"BTMain"}},"wait":null,"blocked":null,"requested":[{"name":"aba"}]}],
//     "eventsStatus":{"wait":[],"blocked":[],"requested":[{"name":"aba"}]},
//     "chosenEvent":null,"currentRunningBT":"bt-hello1","currentLineNumber":null}
    
// const s1 = {"bThreadInfoList":[
    //     {"name":"bt-world","env":{"0":{"myvar1":"10.0","myvar2":"20.0","z":"null","FUNCNAME":"BTMain"}},"wait":null,"blocked":null,"requested":[{"name":"aba"}]},
    //     {"name":"bt-hello1","env":{"0":{"x":"50.0","y":"100.0","z":"null","FUNCNAME":"BTMain"}},"wait":null,"blocked":null,"requested":[{"name":"aba"}]}],"eventsStatus":{"wait":[],"blocked":[],"requested":[{"name":"aba"}]},
    //     "chosenEvent":null,"currentRunningBT":"bt-world","currentLineNumber":null}
    
    // const s2 = {"bThreadInfoList":[
    //     {"name":"bt-world","env":{"0":{"myvar1":"330.0","myvar2":"20.0","z":"null","FUNCNAME":"BTMain"}},"wait":null,"blocked":null,"requested":[{"name":"aba"}]},
    //     {"name":"bt-hello1","env":{"0":{"x":"550.0","y":"100.0","z":"null","FUNCNAME":"BTMain"}},"wait":null,"blocked":null,"requested":[{"name":"aba"}]}],"eventsStatus":{"wait":[],"blocked":[],"requested":[{"name":"aba"}]},
    //     "chosenEvent":null,"currentRunningBT":"bt-hello1","currentLineNumber":null}

export const mapTerminalState = (terminalStateFromServer) => {
    var newState = {
        outputs: terminalStateFromServer
    }
    return newState
}


    