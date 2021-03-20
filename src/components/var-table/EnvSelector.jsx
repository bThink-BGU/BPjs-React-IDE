import { Cascader } from "antd";
import React, { useContext } from "react";
import VarTableView from "./VarsTableView";
import ProgramStateCTX from "../state-context/StateContext";
import "./table.css";
import {
  handleStyle,
  StyledLeftControlPanel,
  StyledResizableContainerFlexHorizon,
} from "../control-panels/left-control-panel/LeftControlPanel.styles";
const options = [
  {
    value: "B-Thread 1",
    label: "B-Thread 1",
    children: [
      {
        value: "Scope 0",
        label: "Scope 0",
      },
      {
        value: "Scope 1",
        label: "Scope 1",
      },
      {
        value: "Scope 2",
        label: "Scope 2",
      },
    ],
  },
  {
    value: "B-Thread 2",
    label: "B-Thread 2",
    children: [
      {
        value: "Scope 0",
        label: "Scope 0",
      },
      {
        value: "Scope 1",
        label: "Scope 1",
      },
      {
        value: "Scope 2",
        label: "Scope 2",
      },
    ],
  },
];

function onChange(value) {
  console.log(value);
}
export default function EnvSelector() {
  const programStateCtx = useContext(ProgramStateCTX);

  return (
    <StyledResizableContainerFlexHorizon
      enable={{ right: true, left: false }}
      handleStyles={handleStyle}
    >
      <span
        style={{ color: "white", width: "100%", backgroundColor: "#ff9b42" }}
      >
        &nbsp; Thread Selector
        <Cascader
          options={options}
          className="selectors"
          onChange={onChange}
          placeholder="Please select"
        />
      </span>
      <VarTableView varsToVals={"hi"} />
    </StyledResizableContainerFlexHorizon>
  );
}
