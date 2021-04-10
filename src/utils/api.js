import axios from 'axios'

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true
export const setUserId = (uid) => axios.defaults.headers.common['userId'] = uid;

const baseUrl = "http://localhost:8080"
export const sendDebugReq = (code) => {
    axios.post(`${baseUrl}/bpjs/debug`,
        {
            "sourceCode": code,
            "skipSyncStateToggle": true,
            "skipBreakpointsToggle": false,
            "breakpoints": [20]
        })
};

export const stop = () => {
    axios.get(`${baseUrl}/bpjs/stop`)
};

export const stepOut = () => {
    axios.get(`${baseUrl}/bpjs/stepOut`)
};

export const stepInto = () => {
    axios.get(`${baseUrl}/bpjs/stepInto`)
};

export const stepOver = () => {
    axios.get(`${baseUrl}/bpjs/stepOver`)
};

export const cont = () => {
    axios.get(`${baseUrl}/bpjs/continue`)
};

export const nextSync = () => {
    axios.get(`${baseUrl}/bpjs/nextSync`)
};