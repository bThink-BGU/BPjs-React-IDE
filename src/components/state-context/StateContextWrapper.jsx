import React from "react";
import ProgramStateCTX from "./StateContext";
import { mapDebugState, mapTerminalState } from "./StateMapper";

export default class StateManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progState: "empty state",
      terminalState: {outputs: "WELCOME TO BPJS ONLINE IDE"},
    };
    this.wsDebug = new WebSocket("ws://localhost:4545");
    this.wsTerminal = new WebSocket("ws://localhost:4546");
  }

  componentDidMount() {
    this.openDebugWebSocket();
    this.openDebugWebSocket();
    this.registerWebSocketHandler();
    this.handleWebSocketClose();
  }
  openTermnialWebSocket() {
    this.wsTerminal.onopen = () => {
    };
  }

  openDebugWebSocket() {
    this.wsDebug.onopen = () => {
    };
  }

  registerWebSocketHandler() {
    this.wsDebug.onmessage = (evt) => {
      const message = JSON.parse(evt.data);
      this.setState({ progState: mapDebugState(message) });
    };
    this.wsTerminal.onmessage = (evt) => {
      const message = JSON.parse(evt.data);
      this.setState({ terminalState: mapTerminalState(message) });
    };
  }

  handleWebSocketClose() {
    this.wsDebug.onclose = () => {
    };
    this.wsTerminal.onclose = () => {
    
    };
  }

  render() {
    return (
      <ProgramStateCTX.Provider value={{progState: this.state.progState,terminalState: this.state.terminalState}}>
        {this.props.children}
      </ProgramStateCTX.Provider>
    );
  }
}
