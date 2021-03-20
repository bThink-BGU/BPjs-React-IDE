export const mapStateToOptions = ({ progState }) => {
    return progState.threadsAndEnvs && progState.threadsAndEnvs.map(t => {
        return {
            value: t.name,
            label: t.name,
            children: Object.keys(t.env).map(envName => {
                return {
                    value: envName,
                    label: envName,
                }
            })
        }
    })

}

export const mapStateToCurrThread = ({ progState }) => {
    return progState && progState.currentRunningThread && progState.currentRunningThread.name
}
