import React, { useState, useEffect, createRef } from "react";
import ProgramStateCTX from "../state-context/StateContext";
import getVars from './VarTableContextResolver'
import { Table } from 'antd';
import ReactJson from 'react-json-view'

/***
 * Vars to vals is a map holds the follwing keys:
 * varName: Varaialbe name
 * varVal: Varaialbe Value
 * isJson: the only type we supports is an object, all other types will display their native toString representation
 */

export default function VarTableView({ varsToVals }) {
    const columns = [
        {
            title: 'Variable Name',
            dataIndex: 'varName',
        },
        {
            title: 'Value',
            dataIndex: 'varVal',
        },
    ];
    const rows = varsToVals && Object.keys(varsToVals).map((k, index) => {
        return {
            key: index,
            varName: k,
            varVal: <ReactJson src={varsToVals[k]} />
        }
    })
    return (
        <div style={{width:"400px"}}>
            Vars <br />
            <Table columns={columns} dataSource={rows} size="small" />
        </div>
    )
}



function extractValue(value) {
    if(isJson(value))  return  (<ReactJson src={value} />)
    else return  value
}


function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}