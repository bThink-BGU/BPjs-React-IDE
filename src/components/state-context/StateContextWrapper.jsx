import React from "react";
import ProgramStateCTX from "./StateContext";
import { mapDebugState, mapTerminalState } from "./StateMapper";

export default class StateManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progState: "empty state",
      terminalState: "WELCOME TO BPJS ONLINE IDE",
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
      console.log("connected to terminal socket");
    };
  }

  openDebugWebSocket() {
    this.wsDebug.onopen = () => {
      console.log("connected to debug socket");
    };
  }

  registerWebSocketHandler() {
    this.wsDebug.onmessage = (evt) => {
      const message = JSON.parse(evt.data);
      this.setState({ progState: mapDebugState(message) });
      console.log("got new state, this is the server newest state", message);
    };
    this.wsTerminal.onmessage = (evt) => {
      const message = JSON.parse(evt.data);
      this.setState({ terminalState: mapTerminalState(message) });
      console.log(
        "got new terminal message, this is the server newest terminal message",
        message
      );
    };
  }

  handleWebSocketClose() {
    this.wsDebug.onclose = () => {
      console.log("disconnected from debuger socket");
    };
    this.wsTerminal.onclose = () => {
      console.log("disconnected from terminal socket");
    };
  }

  render() {
    return (
      <ProgramStateCTX.Provider value={this.state.progState,this.state.terminalState}>
        {this.props.children}
      </ProgramStateCTX.Provider>
    );
  }
}
