import React from "react";
import ProgramStateCTX from "./StateContext";
import { mapDebugState, mapTerminalState } from "./StateMapper";
import { Client } from "@stomp/stompjs";

export default class StateManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progState: "empty state",
      terminalState: { outputs: "WELCOME TO BPJS ONLINE IDE" },
    };
  }

  componentDidMount() {
    this.client = new Client();
    this.client.configure({
      brokerURL: "ws://localhost:8080/ws",
      onConnect: (msg) => {
        console.log("onConnect", msg);

        this.client.subscribe("/user/console/update", (message) => {
          if (message && message.body)
            this.setState({ terminalState: mapTerminalState(JSON.parse(message.body)) });
        });

        this.client.subscribe("/user/state/update", (message) => {
          if (message && message.body)
            this.setState({ progState: mapDebugState(JSON.parse(message.body)) });
        });

        this.client.publish({destination: "/bpjs/subscribe"});
      }
    });

    this.client.activate();
  }

  render() {
    return (
      <ProgramStateCTX.Provider
        value={{
          progState: this.state.progState,
          terminalState: this.state.terminalState,
        }}
      >
        {this.props.children}
      </ProgramStateCTX.Provider>
    );
  }
}
