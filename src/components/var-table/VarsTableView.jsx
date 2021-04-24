import React, {useEffect, useState} from "react";
import { Table } from "antd";
import ReactJson from "react-json-view";

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
      width: "130px",
    },
    {
      title: "Value",
      dataIndex: "varVal",
    },
  ];

  const isStr = (ms) => typeof ms === "string" || ms instanceof String;
  const isNum = (ms) => typeof ms === "number" || ms instanceof Number;
  const rows =
    !isStr(varsToVals) &&
    varsToVals &&
    Object.keys(varsToVals)
      .map((k, index) => {
        return {
          key: index,
          varName: k,
          varVal:
          ( (isStr(varsToVals[k]) || isNum(varsToVals[k]))) ? (
              varsToVals[k]
            ) : (
              <ReactJson src={varsToVals[k]} />
            ),
        };
      })
      .filter((v) => v.varName !== "FUNCNAME");

  const rowsss = [{key: "1",
    varName: "asxasxasx",
    varVal: "saxasasx"
  },{key: "1",
    varName: "asxasxasx",
    varVal: "saxasasx"
  },{key: "1",
    varName: "asxasxasx",
    varVal: "saxasasx"
  },{key: "1",
    varName: "asxasxasx",
    varVal: "saxasasx"
  },{key: "1",
    varName: "asxasxasx",
    varVal: "saxasasx"
  },{key: "1",
    varName: "asxasxasx",
    varVal: "saxasasx"
  }]

  const [rowsx, setRows] = useState([]);

  useEffect(() => {
    const x = setInterval(() => setRows(rowsss), 3000)
    clearInterval(x)

  }, [])

  return (
    <Table
      bordered={true}
      scroll={{ y: 204 }}
      style={{ height: "80%" }}
      columns={columns}
      dataSource={rowsx}
      pagination={false}
      className="antdTable"
      size="small"
    />
  );
}

function extractValue(value) {
  if (isJson(value)) return <ReactJson src={value} />;
  else return value;
}

const isJson = (s) => {
  if (
    /^[\],:{}\s]*$/.test(
      s
        .replace(/\\["\\\/bfnrtu]/g, "@")
        .replace(
          /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          "]"
        )
        .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
    )
  ) {
    return true;
  } else {
    return false;
  }
};
