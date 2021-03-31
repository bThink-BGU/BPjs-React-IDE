import { Cascader } from "antd";
import React, { useContext, useState } from "react";
import VarTableView from "./VarsTableView";
import {
  mapStateToOptions,
  mapStateToCurrThread,
} from "./VarTableContextResolver";
import ProgramStateCTX from "../state-context/StateContext";
import "./table.scss";
import {
  handleStyle,
  StyledResizableContainerFlexHorizon,
} from "./StyledContainers";
import { TableWrapper, StyledTitle } from "./VarTable.styles";
import LayoutCtx from "../../pages/IDE/LayoutCtx";

export default function EnvSelector() {
  const programStateCtx = useContext(ProgramStateCTX);

  const optionsFromState = mapStateToOptions(programStateCtx);

  const stateCurrThread = mapStateToCurrThread(programStateCtx);

  const [cascaderValue, setCascaderValue] = useState("Please Select");

  const [currEnv, setCurrEnv] = useState({});

  const layoutCtx = useContext(LayoutCtx);

  const { activeBottomPanels } = layoutCtx;

  initThreads(stateCurrThread, cascaderValue, setCascaderValue);

  const onChange = (e) => {
    if (stateCurrThread !== cascaderValue) {
      const selcetedThread = e && e[0];
      const selectedScopeName = e && e[1];
      const maybeSelectedScope = programStateCtx.progState.threadsAndEnvs.filter(
        (t) => t.name == selcetedThread
      );
      var selectedScopeCopy =
        maybeSelectedScope &&
        maybeSelectedScope[0] &&
        maybeSelectedScope[0].env &&
        maybeSelectedScope[0].env[0] 
      
      setCascaderValue(e.toString());
      setCurrEnv(selectedScopeCopy);
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
      <VarTableView varsToVals={currEnv} />
    </TableWrapper>
  );
}
function initThreads(stateCurrThread, cascaderValue, setCascaderValue) {
  stateCurrThread &&
    stateCurrThread !== cascaderValue &&
    setCascaderValue(stateCurrThread);
}
