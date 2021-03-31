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
  console.log(stateCurrThread);
  const layoutCtx = useContext(LayoutCtx);
  const { activeBottomPanels } = layoutCtx;
  stateCurrThread &&
    stateCurrThread !== cascaderValue &&
    setCascaderValue(stateCurrThread);
  const onChange = (e) => {
    if (stateCurrThread && stateCurrThread !== cascaderValue) {
      console.log(e);
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
      <VarTableView varsToVals={"hi"} />
    </TableWrapper>
  );
}
