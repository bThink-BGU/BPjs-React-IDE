import React, { useState } from "react";
import StateManager from "../../components/state-context/StateContextWrapper";
import Editor from "../../components/code-editor/CodeEditor.component";
import LeftControlPanel from "../../components/control-panels/left-control-panel/LeftControlPanel.component";
import BottomControlPanel from "../../components/control-panels/bottom-control-panel/BottomControlPanel.component";
import {
  IdeContainer,
  IdeContentContainer,
  RightContainer,
} from "./ide.styles";
import IdeHeader from "../../components/header/Header.component";
import ControlButtons from "../../components/control-panels/bottom-control-panel/control-buttons/ControlButtons";
import LayoutCtx from "./LayoutCtx";
import IDECTX from "./IDECTX";
export const BOTTOM_PANELS = {
  CONSOLE: "console",
  DEBUG: "debug",
};

function IDE() {
  const [activeBottomPanels, setActiveBottomPanels] = useState([]);

  const [prog, setProg] = useState("");
  const layoutProperties = {
    activeBottomPanels,
    setActiveBottomPanels,
  };

  return (
    <LayoutCtx.Provider value={layoutProperties}>
      <IDECTX.Provider value={prog}>
        <IdeContainer>
          <IdeHeader />
          <IdeContentContainer>
            <LeftControlPanel />
            <RightContainer>
              <Editor setProg={setProg} />
              <BottomControlPanel />
            </RightContainer>
          </IdeContentContainer>
          <ControlButtons />
        </IdeContainer>
      </IDECTX.Provider>
    </LayoutCtx.Provider>
  );
}

export default IDE;
