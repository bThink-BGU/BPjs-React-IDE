import React, { useContext } from "react";
import { Table } from "antd";
import ReactJson from "react-json-view";
import "./table.scss";
import LayoutCtx from "../../pages/IDE/LayoutCtx";
import _ from "lodash";
import { BOTTOM_PANELS } from "../../pages/IDE/ide";

/***
 * Vars to vals is a map holds the follwing keys:
 * varName: Varaialbe name
 * varVal: Varaialbe Value
 * isJson: the only type we supports is an object, all other types will display their native toString representation
 */

export default function VarTableView({varsToVals}) {
    const layoutCtx = useContext(LayoutCtx);
    const {activeBottomPanels} = layoutCtx;

    const columns = [
        {
            title: "Variable Name",
            dataIndex: "varName",
        },
        {
            title: "Value",
            dataIndex: "varVal",
        },
    ];
    const vals = JSON.parse(
        '{"field":{"a":1,"b":2},"field2":{"a":1,"b":2},"field3":"String Value of a var"}'
    );

    const rows = Object.keys(vals).map((k, index) => {
        return {
            key: index,
            varName: k,
            varVal: k !== "field3" ? <ReactJson src={vals[k]}/> : vals[k],
        };
    });

    const getWidth = () => {
        const terminalIsActive = _.includes(activeBottomPanels, BOTTOM_PANELS.TERMINAL);
        const debugIsActive = _.includes(activeBottomPanels, BOTTOM_PANELS.DEBUG);
        if(terminalIsActive && debugIsActive) {
            return "49%";
        }
        else if (!terminalIsActive && debugIsActive) {
            return "100%";
        }
    };

    return (
        <Table
            style={{
                width: `${getWidth()}`,
                height: "80%"
            }}
            columns={columns}
            pagination={false}
            className="antdTable"
            dataSource={rows}
            size="small"
        />
    );
}

function extractValue(value) {
    if (isJson(value)) return <ReactJson src={value}/>;
    else return value;
}

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
