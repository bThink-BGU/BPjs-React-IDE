import { Cascader } from "antd";
import React, { useContext,useState } from "react";
import VarTableView from "./VarsTableView";
import {mapStateToOptions,mapStateToCurrThread} from './VarTableContextResolver'
import ProgramStateCTX from "../state-context/StateContext";
import "./table.scss";
import {
  handleStyle,
  StyledResizableContainerFlexHorizon,
} from "./StyledContainers";

function onChange(value) {
  console.log(value);
}

export default function EnvSelector() {
  const programStateCtx = useContext(ProgramStateCTX);
  const optionsFromState = mapStateToOptions(programStateCtx)
  const currThread = mapStateToCurrThread(programStateCtx)
  console.log('optionsis',optionsFromState)
  console.log('curr',currThread)
  return (
    <StyledResizableContainerFlexHorizon
      enable={{ right: true, left: false }}
      handleStyles={handleStyle}
    >
      <span className="thread-selector-title">
        &nbsp; Thread Selector
        <Cascader
          defaultValue={[0,0]}
          options={optionsFromState}
          className="selectors"
          onChange={onChange}
          placeholder="Please select"
        />
      </span>
      <VarTableView varsToVals={"hi"} />
    </StyledResizableContainerFlexHorizon>
  );
}
