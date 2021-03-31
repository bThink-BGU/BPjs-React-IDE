import React, { useState, useEffect, createRef, useContext } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/ext-beautify";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript";

import "ace-builds/src-noconflict/theme-ambiance"
import "ace-builds/src-noconflict/theme-chaos"
import "ace-builds/src-noconflict/theme-chrome"
import "ace-builds/src-noconflict/theme-clouds"
import "ace-builds/src-noconflict/theme-clouds_midnight"
import "ace-builds/src-noconflict/theme-cobalt"
import "ace-builds/src-noconflict/theme-crimson_editor"
import "ace-builds/src-noconflict/theme-dawn"
import "ace-builds/src-noconflict/theme-dracula"
import "ace-builds/src-noconflict/theme-dreamweaver"
import "ace-builds/src-noconflict/theme-eclipse"
import "ace-builds/src-noconflict/theme-github"
import "ace-builds/src-noconflict/theme-gob"
import "ace-builds/src-noconflict/theme-gruvbox"
import "ace-builds/src-noconflict/theme-idle_fingers"
import "ace-builds/src-noconflict/theme-iplastic"
import "ace-builds/src-noconflict/theme-katzenmilch"
import "ace-builds/src-noconflict/theme-kr_theme"
import "ace-builds/src-noconflict/theme-kuroir"
import "ace-builds/src-noconflict/theme-merbivore"
import "ace-builds/src-noconflict/theme-merbivore_soft"
import "ace-builds/src-noconflict/theme-mono_industrial"
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-nord_dark"
import "ace-builds/src-noconflict/theme-pastel_on_dark"
import "ace-builds/src-noconflict/theme-solarized_dark"
import "ace-builds/src-noconflict/theme-solarized_light"
import "ace-builds/src-noconflict/theme-sqlserver"
import "ace-builds/src-noconflict/theme-terminal"
import "ace-builds/src-noconflict/theme-textmate"
import "ace-builds/src-noconflict/theme-tomorrow"
import "ace-builds/src-noconflict/theme-tomorrow_night"
import "ace-builds/src-noconflict/theme-tomorrow_night_blue"
import "ace-builds/src-noconflict/theme-tomorrow_night_bright"
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties"
import "ace-builds/src-noconflict/theme-twilight"
import "ace-builds/src-noconflict/theme-vibrant_ink"
import "ace-builds/src-noconflict/theme-xcode"

import "./code-editor.css";
import { setBpjsMode, editorThemes } from "./editor-setting";
import LayoutCtx from "../../pages/IDE/LayoutCtx";
import styled from "styled-components";
import _ from "lodash";

const BP_TAP = "guttermousedown";

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

function Editor() {
    const [currThemeIdx, setCurrThemeIdx] = useState(2);
    const [prog, setProg] = useState("");
    const [editorRef, setEditorRef] = useState(null);
    const [breakPoints, setBreakPoints] = useState([]);
    const [currLine, setCurrLine] = useState(11);

    const layoutContext = useContext(LayoutCtx);
    const {activeBottomPanels} = layoutContext;

    const onChange = (newValue) => {
        setProg(newValue);
    }

    const handleBreakPointTap = (e, updateBreakpoints) => {
        const target = e.domEvent.target;

        if (target.className.indexOf("ace_gutter-cell") === -1) {
            return;
        }
        const row = e.getDocumentPosition().row;
        const breakpoints = e.editor.session.getBreakpoints(row, 0);

        if (typeof breakpoints[row] === typeof undefined) {
            e.editor.session.setBreakpoint(row);
        } else {
            e.editor.session.clearBreakpoint(row);
        }
        updateBreakpoints(breakpoints)
        e.stop();
    };

    const setCleanBreakpoints = (breakpoints) => {
        setBreakPoints(Object.keys(breakpoints)
            .map(breakPoint => parseInt(breakPoint)))
    };

    useEffect(() => {
        if (editorRef && editorRef.current) {
            const {editor, editor: {session}} = editorRef.current;
            setBpjsMode(editor, session);
            editor.setAutoScrollEditorIntoView(true);

            editor.on(BP_TAP, (e) => {
                handleBreakPointTap(e, setCleanBreakpoints)
            });
        }
    }, [editorRef]);

    useEffect(() => {
        const editorRef = createRef()
        setEditorRef(editorRef)
    }, []);

    const editorStyle = {
        width: "100%",
    };

    return (
        <EditorContainer>
            <AceEditor
                height={`calc(100vh - ${_.isEmpty(activeBottomPanels) ? "89px" : "503px"})`}
                ref={editorRef}
                value={prog}
                mode={"javascript"}
                theme={editorThemes[currThemeIdx]}
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                enableSnippets={true}
                highlightActiveLine={false}
                setOptions={{useWorker: false}}
                editorProps={{
                    $blockScrolling: true,
                    $useWorker: false
                }}
                style={editorStyle}
            />
        </EditorContainer>
    );
};

export default Editor;
