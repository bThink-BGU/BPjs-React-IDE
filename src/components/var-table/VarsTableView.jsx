import React from "react";
import { Empty } from "antd";
import ReactJson from "react-json-view";
import {
    RowLeftContainer,
    RowRightContainer, TableTitlesContainer,
    VarsTableContainer,
    VarsTableContentContainer,
    VarsTableRowContainer
} from "./VarTable.styles";
import { CustomTitle } from "../title/title";
import './table.scss'
/***
 * Vars to vals is a map holds the follwing keys:
 * varName: Varaialbe name
 * varVal: Varaialbe Value
 * isJson: the only type we supports is an object, all other types will display their native toString representation
 */
export default function VarTableView({varsToVals}) {
    const isStr = (ms) => typeof ms === "string" || ms instanceof String;
    const isNum = (ms) => typeof ms === "number" || ms instanceof Number;
    const isObject = (ms) => typeof ms === "object" || ms instanceof Object;

    const getVarValue = (v) => {
        return (isStr(v) || isNum(v)) ? v : isObject(v) ? <ReactJson theme='railscasts' src={v}/> : "null";
    };

    const tryParse = json => {
        try {
            return json === "null" ? json : JSON.parse(json);
        } catch (e) {
            console.log("HERE", e)
            return json
        }
    };

    const rows =
        !isStr(varsToVals) &&
        varsToVals &&
        Object.keys(varsToVals).map(k => {
            return {
                varName: k,
                varVal: getVarValue(tryParse(varsToVals[k])),
            };
        }).filter((v) => v.varName !== "FUNCNAME");

    const buildRows = (rows) => {
        return rows.map(row => {
            return (
                <VarsTableRowContainer>
                    <RowLeftContainer bordered={true}>{row.varName}</RowLeftContainer>
                    <RowRightContainer>{row.varVal}</RowRightContainer>
                </VarsTableRowContainer>
            );
        })
    };

    const buildTitleRow = () => {
        return (
            <TableTitlesContainer>
                <RowLeftContainer bordered={false}>
                    <CustomTitle level={5} color={"white"}>Var</CustomTitle>
                </RowLeftContainer>
                <RowRightContainer>
                    <CustomTitle level={5} color={"white"}>Val</CustomTitle>
                </RowRightContainer>
            </TableTitlesContainer>
        );
    };

    return (
        <VarsTableContainer>
            {buildTitleRow()}
            <VarsTableContentContainer>
                {rows
                    ? buildRows(rows)
                    : <Empty style={{paddingTop: "40px"}} description={"No variables have been found yet"}/>};
            </VarsTableContentContainer>
        </VarsTableContainer>
    );
}

