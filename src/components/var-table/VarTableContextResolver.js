const getVars = (clientState) => {
    console.log("got as client",JSON.stringify(clientState))
    return {vars: clientState.vars}
}

export default getVars 