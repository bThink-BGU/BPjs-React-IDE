import React, { useState,useContext } from "react";
import ProgramStateCTX from "../state-context/StateContext";
import printoutsResolver from "./TerminalStateResolver"
import Terminal from "terminal-in-react";
//Terminal component github [props and other api]
//https://github.com/nitin42/terminal-in-react
import { handleStyle, StyledLeftControlPanel, StyledResizableContainer } from "../control-panels/left-control-panel/LeftControlPanel.styles"
const ans =
  "Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n v v Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n v v Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n v v Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n v v Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n v v Some Very long long text \n Some Very long long text \n Some Very long long text \n Some Very long long text \n ";

  export default function BPTerminal() {
  const [text, setText] = useState(ans);
  const terminalState = useContext(ProgramStateCTX);
  //our terminal is listening to console.log so any printout with console.log file will be displayed in the ui
  console.log(printoutsResolver(terminalState))
  return (    
    
    // <div style={{width:"100%", height:"100vh"}}>
    
    <Terminal
        color="white"
        backgroundColor="#1a262b"
        watchConsoleLogging
        barColor="black"
        style={{ fontWeight: "bold", fontSize: "1em",maxHeight:"300px",minHeight:"100px",padding:"6px", borderRadius: "16px",border:"1px solid #ff9b42",overflow:"hidden" }}
        promptSymbol="🔥"
        allowTabs={false}
        hideTopBar={true}
        msg="WELCOME TO BPJS ONLINE IDE"
      />
    //   </div>
    

  );
}

