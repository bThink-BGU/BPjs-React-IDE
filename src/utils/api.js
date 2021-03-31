import axios from 'axios'
axios.defaults.headers.common["Access-Control-Allow-Origin"] =  "*"
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true
export const setUserId = (uid) => axios.defaults.headers.common['userId'] = uid;

export const sendDebugReq = () => {
    axios.post("http://localhost:8080/bpjs/debug",
        {
            "sourceCode": "aaa",
            "skipSyncStateToggle": true,
            "skipBreakpointsToggle": false,
            "breakpoints": [14, 3, 34]
        })
}