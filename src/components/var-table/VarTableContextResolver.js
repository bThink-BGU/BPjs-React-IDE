export const mapStateToOptions = ({ progState }) => {
    return progState.threadsAndEnvs && progState.threadsAndEnvs.map(t => {
        return {
            value: t.name,
            label: t.name,
            children: Object.keys(t.env).map(envName => {
                return {
                    value: t.env[envName]['FUNCNAME'],
                    label: t.env[envName]['FUNCNAME'],
                }
            })
        }
    })

}

export const mapStateToCurrThread = ({ progState }) => {
    return progState && progState.currentRunningThread && progState.currentRunningThread.name
}
