import React from "react";
import './App.css';
import AceEditor from "react-ace"; // do not remove this import.
import Editor from "./components/code-editor/code-editor.component";
import { StyledResizablePanel } from "./components/resizable-panel/resizable-panel.styles";

function App() {
    return (
        <div>
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
                FOOTER
            </StyledResizablePanel>
        </div>
    );
}

export default App;
