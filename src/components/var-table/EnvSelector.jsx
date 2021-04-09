import { Cascader } from "antd";
import React, { useContext, useState } from "react";
import VarTableView from "./VarsTableView";
import {
  mapStateToOptions,
  mapStateToCurrThread,
} from "./VarTableContextResolver";
import ProgramStateCTX from "../state-context/StateContext";
import "./table.scss";
import { TableWrapper, StyledTitle } from "./VarTable.styles";
import LayoutCtx from "../../pages/IDE/LayoutCtx";

export default function EnvSelector() {
  const programStateCtx = useContext(ProgramStateCTX);

  const optionsFromState = mapStateToOptions(programStateCtx);

  const stateCurrThread = mapStateToCurrThread(programStateCtx);

  const [cascaderValue, setCascaderValue] = useState("Please Select");

  const [currEnv, setCurrEnv] = useState({});

  const layoutCtx = useContext(LayoutCtx);

  const [currentThreadName, setCurrThreadName] = useState(stateCurrThread);

  const { activeBottomPanels } = layoutCtx;

  function getEnvByThreadName(programStateCtx, selcetedThread) {
    const maybeSelectedScope = programStateCtx && programStateCtx.progState.threadsAndEnvs && programStateCtx.progState.threadsAndEnvs.filter(
      (t) => t.name == selcetedThread
    );
    var selectedScopeCopy = maybeSelectedScope &&
      maybeSelectedScope[0] &&
      maybeSelectedScope[0].env &&
      maybeSelectedScope[0].env[0];     
    return selectedScopeCopy;
  }

  
  const onChange = (e) => {
    if (stateCurrThread !== cascaderValue) {
      const selcetedThread = e && e[0];
      const selectedScopeName = e && e[1];
      var selectedScopeCopy = getEnvByThreadName(programStateCtx, selcetedThread); 
      setCascaderValue(e.toString());
      setCurrThreadName(selcetedThread)

    }
  };

  return (
    <TableWrapper activeBottomPanels={activeBottomPanels}>
      <StyledTitle level={4}>Variables</StyledTitle>
      <div className="thread-selector-title">
        &nbsp; Thread Selector
        <Cascader
          options={optionsFromState}
          value={[cascaderValue]}
          className="selectors"
          onChange={onChange}
          placeholder="Please select"
        />
      </div>
      <VarTableView varsToVals={getEnvByThreadName(programStateCtx,currentThreadName)} />
    </TableWrapper>
  );
}


function initThreads(stateCurrThread, cascaderValue, setCascaderValue) {
  stateCurrThread &&
    stateCurrThread !== cascaderValue &&
    setCascaderValue(stateCurrThread);
}
