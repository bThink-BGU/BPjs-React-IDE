const getVars = (clientState) => {
    console.log("got as client",clientState)
    return {vars: clientState.vars}
}

export default getVars