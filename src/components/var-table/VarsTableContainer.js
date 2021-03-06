import React, { useState, useEffect, createRef } from "react";
import ProgramStateCTX from "../state-context/StateContext";
import { Table } from 'antd';
import getVars from './VarTableContextResolver'
import VarTableView from './VarsTableView'


export default function VarTable() {

    return (
        <div>
            <ProgramStateCTX.Consumer >
                {
                value => 
                     getVars(value).vars &&
                     <VarTableView varsToVals={getVars(value).vars} />
                }
                </ProgramStateCTX.Consumer>
        </div>
    )
}



