export const mapState = (stateFromServer) => {
    var newState = {
        vars: stateFromServer.vars
    }
    return newState
}