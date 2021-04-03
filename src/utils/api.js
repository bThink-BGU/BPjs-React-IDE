import axios from 'axios'

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true
export const setUserId = (uid) => axios.defaults.headers.common['userId'] = uid;

export const sendDebugReq = (code) => {
    axios.post("http://localhost:8080/bpjs/debug",
        {
            "sourceCode": code,
            "skipSyncStateToggle": true,
            "skipBreakpointsToggle": false,
            "breakpoints": [1]
        })
};

export const stop = () => {
    axios.get("http://localhost:8080/bpjs/stop")
};

export const stepOut = () => {
    axios.get("http://localhost:8080/bpjs/stepOut")
};

export const stepInto = () => {
    axios.get("http://localhost:8   080/bpjs/stepInto")
};

export const stepOver = () => {
    axios.get("http://localhost:8080/bpjs/stepOver")
};

export const cont = () => {
    axios.get("http://localhost:8080/bpjs/continue")
};

export const nextSync = () => {
    axios.get("http://localhost:8080/bpjs/nextSync")
};