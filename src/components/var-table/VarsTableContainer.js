import React, { useContext } from "react";
import ProgramStateCTX from "../state-context/StateContext";
import getVars from './VarTableContextResolver'
import VarTableView from './VarsTableView'


export default function VarTable() {

    const programStateCtx = useContext(ProgramStateCTX);

    return (
        <div>
            {getVars(programStateCtx).vars &&
            <VarTableView varsToVals={getVars(programStateCtx).vars}/>}
        </div>
    )
}



