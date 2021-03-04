import "ace-builds/src-min-noconflict/mode-javascript";
import ace from "ace-builds"

class BpjsHighlightRules extends ace.require("ace/mode/javascript_highlight_rules").JavaScriptHighlightRules {
    constructor() {
        super();
        let JSRules = this.getRules();
        JSRules.no_regex = bpjsHighlightRules.concat(JSRules.no_regex);
        this.$rules = JSRules;
    }
}

class BpjsMode extends ace.require("ace/mode/javascript").Mode {
    constructor() {
        super();
        this.HighlightRules = BpjsHighlightRules;
    }
}

const registerSnippets = function (editor, session, mode, snippets) {
    const snippetText = createSnippets(snippets)
    const snippetManager = ace.require('ace/snippets').snippetManager

    const id = session.$mode.$id || '';
    const m = snippetManager.files[id]

    m.scope = mode
    m.snippetText = snippetText
    m.snippet = snippetManager.parseSnippetFile(snippetText, m.scope)

    snippetManager.register(m.snippet, m.scope)
}

const createSnippets = (snippets) => {
    return (Array.isArray(snippets) ? snippets : [snippets])
        .map(({name, code}) =>
            [
                'snippet ' + name,
                code
                    .split('\n')
                    .map(c => '\t' + c)
                    .join('\n'),
            ].join('\n')
        )
        .join('\n')
}

const bpjsSnippets = [
    {
        name: "bp.registerBThread",
        code: "bp.registerBThread(\"Your bt name\", () => {\n\n});",
    },
    {
        name: "bp.sync({waitFor: add your event});",
        code: "bp.sync({waitFor: add your event});",
    },
    {
        name: "bp.sync({request: add your event});",
        code: `bp.sync({request: add your event});`,
    },
    {
        name: "bp.sync({waitFor: bp.Event(\"\")});",
        code: "bp.sync({waitFor: bp.Event(\"\")});",
    },
    {
        name: "bp.sync({request: bp.Event(\"\")});",
        code: `bp.sync({request: bp.Event(\"\")});`,
    },
    {
        name: "bp.Event",
        code: "bp.Event(\"\")"
    }
];

const bpjsHighlightRules = [
    {
        token: "keyword",
        regex: "bp"
    },
    {
        token: "comment",
        regex: /(\.)(sync|Event|registerBThread)\b/
    },
    {
        token: "keyword.operator",
        regex: /(block|request|waitFor)\b/
    }
];

export const editorThemes = [
    "ambiance",
    "chaos",
    "chrome",
    "clouds",
    "clouds_midnight",
    "cobalt",
    "crimson_editor",
    "dawn",
    "dracula",
    "dreamweaver",
    "eclipse",
    "github",
    "gob",
    "gruvbox",
    "idle_fingers",
    "iplastic",
    "katzenmilch",
    "kr_theme",
    "kuroir",
    "merbivore",
    "merbivore_soft",
    "mono_industrial",
    "monokai",
    "nord_dark",
    "pastel_on_dark",
    "solarized_dark",
    "solarized_light",
    "sqlserver",
    "terminal",
    "textmate",
    "tomorrow",
    "tomorrow_night",
    "tomorrow_night_blue",
    "tomorrow_night_bright",
    "tomorrow_night_eighties",
    "twilight",
    "vibrant_ink",
    "xcode"
]

export const setBpjsMode = function (editor, session) {
    registerSnippets(editor, session, "javascript", bpjsSnippets)
    session.setMode(new BpjsMode())
}



