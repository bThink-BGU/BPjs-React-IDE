import styled from "styled-components";
import { Badge } from "antd";
import './tags.scss'
import { Tag, Dropdown, Menu } from "antd";

import React, { ReactDOM, useContext, useState } from "react";

const ThreadsNames = (tNames) => {
  return (
    tNames  && (
      <Menu>
        {tNames.map((tName) => (
          <Menu.Item>{tName}</Menu.Item>
        ))}
      </Menu>
    )
  );
};


export const ThreadsTags = ({ char, blocked, wait, requested }) => {
  return (
    <span>
      {[requested, wait, blocked].map((threads) => (
        <ThreadTag threadList={threads} />
      ))}
    </span>
  );
};

const ThreadTag = ({threadList}) => {
  const noMouseColor = '#fa8c18'
  const yesMouseColor = '#a56e33'
  const [color,setColor]  = useState('#fa8c18')
  const isEmpty = threadList.length < 1
  return (<span className={"e_type_tag"}>
      <Dropdown disabled={isEmpty} overlay={ThreadsNames(threadList)}>
        <Badge
          onMouseEnter={() => setColor(yesMouseColor)}
          onMouseLeave={() => setColor(noMouseColor)}
          className="event-count"
          style={{ backgroundColor: isEmpty ? 'grey' : color, marginRight: "9px" }}
          size="default"
          showZero
          count={threadList.length}
          overflowCount={99}
        ></Badge>
      </Dropdown>
    </span>
  )
}