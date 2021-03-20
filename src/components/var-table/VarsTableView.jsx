import React from "react";
import { Table } from "antd";
import ReactJson from "react-json-view";
import "./table.scss";

/***
 * Vars to vals is a map holds the follwing keys:
 * varName: Varaialbe name
 * varVal: Varaialbe Value
 * isJson: the only type we supports is an object, all other types will display their native toString representation
 */

export default function VarTableView({ varsToVals }) {
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

//   const rows = Object.keys(vals).map((k, index) => {
//     return {
//       key: index,
//       varName: k,
//       varVal: k !== "field3" ? <ReactJson src={vals[k]} /> : vals[k],
//     };
//   });

  const rows = varsToVals && Object.keys(varsToVals).map((k, index) => {
      return {
          key: index,
          varName: k,
          varVal: k!== "field3" ? <ReactJson src={varsToVals[k]} /> : varsToVals[k]
      }
  })
  return (
    <div style={{ width: "100%", height: "100%" }}>
      
      <Table
        columns={columns}
        pagination={false}
        className="antdTable"
        dataSource={rows}
        size="small"
      />
    </div>
  );
}

function extractValue(value) {
  if (isJson(value)) return <ReactJson src={value} />;
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
