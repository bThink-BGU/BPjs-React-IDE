import React, { useState } from "react";
import StateManager from "../../components/state-context/StateContextWrapper";  
import Editor from "../../components/code-editor/CodeEditor.component";
import LeftControlPanel from "../../components/control-panels/left-control-panel/LeftControlPanel.component";
import BottomControlPanel from "../../components/control-panels/bottom-control-panel/BottomControlPanel.component";
import IdeDimensionCTX from "./IdeDimensionCtx";
import { IdeContainer, RightContainer } from "./ide.styles";
import IdeHeader from "../../components/header/Header.component";

function IDE() {

    const [bottomPanelHeight, setBottomPanelHeight] = useState(300);
    const [rightPanelWidth, setRightPanelWidth] = useState(400);
    const [leftPanelWidth, setLeftPanelWidth] = useState(400);

    const ideDimensionsCtxValue = {
        bottomPanelHeight,
        setBottomPanelHeight,
        rightPanelWidth,
        setRightPanelWidth,
        leftPanelWidth,
        setLeftPanelWidth
    };

    return (
        <StateManager>
            <IdeDimensionCTX.Provider value={ideDimensionsCtxValue}>
                <IdeHeader/>
                <IdeContainer>
                    <LeftControlPanel/>
                    <RightContainer>
                        <Editor/>
                        <BottomControlPanel/>
                    </RightContainer>
                    
                </IdeContainer>
            
            </IdeDimensionCTX.Provider>
            
        </StateManager>
    );  
}

export default IDE;
