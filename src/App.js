import React  ,{ useState } from "react";
import './App.css';
import AceEditor from "react-ace"; // do not remove this import.
import Editor from "./components/code-editor/code-editor.component";
import { StyledResizablePanel } from "./components/resizable-panel/resizable-panel.styles";
import StateManager from './components/state-context/StateContextWrapper'
import VarTable from './components/var-table/VarsTableContainer'
function App() {
    
    const [progState, setProgState] = useState({});
    
    return (
        
        <div>
        <StateManager>
            <StyledResizablePanel
                defaultSize={{
                    width: 100,
                    height: "100%",
                }}
                maxWidth={"100%"}
                positions={["left", "bottom"]}
                color={"#aacaf782"}
            >
                SIDER
            </StyledResizablePanel>

            <Editor/>

            <StyledResizablePanel
                defaultSize={{
                    width: "100%",
                    height: "300",
                }}
                maxHeight={"99vh"}
                maxWidth={"100%"}
                positions={["left", "bottom"]}
                color={"#65ba6782"}
            >
                
            </StyledResizablePanel>
            <VarTable/>
            </StateManager>
        </div>
    );
}

export default App;
