import React  ,{ useState } from "react";
import ProgramStateCTX from './StateContext'
import { mapState } from "./StateMapper";


export default class StateManager extends React.Component {
    constructor(props) {
        super(props)
        this.state={progState:"empty state"}
        this.ws = new WebSocket('ws://localhost:4545')
    }
    
    componentDidMount() {
        this.openWebSocket();
        this.registerWebSocketHandler();
        this.handleWebSocketClose();

    }
    
    openWebSocket() {
        this.ws.onopen = () => {
            console.log('connected');
        };
    }

    registerWebSocketHandler() {
        this.ws.onmessage = evt => {
            const message = JSON.parse(evt.data);
            this.setState({ progState: mapState(message) });
            console.log("got new state, this is the server newest state" ,message);
        };
    }

    handleWebSocketClose() {
        this.ws.onclose = () => {
            console.log('disconnected');
        };
    }


    render(){
       return <ProgramStateCTX.Provider value = {
            this.state.progState
        }>
            {this.props.children}
        </ProgramStateCTX.Provider>
        
    }
}