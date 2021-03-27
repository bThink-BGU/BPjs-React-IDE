import React, { useContext } from "react";
import { Table } from "antd";
import ReactJson from "react-json-view";
import LayoutCtx from "../../pages/IDE/LayoutCtx";
import { TableWrapper, StyledTitle } from "./VarTable.styles";

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

    return (
        <TableWrapper activeBottomPanels={activeBottomPanels}>
            <StyledTitle level={4}>Variables</StyledTitle>
            <Table
                scroll={{y: 210}}
                style={{
                    width: "100% !important",
                    height: "100%"
                }}
                columns={columns}
                pagination={false}
                className="antdTable"
                dataSource={rows}
                size="small"
            />
        </TableWrapper>
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
