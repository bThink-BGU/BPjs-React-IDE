import styled from "styled-components";

import { Tag, Dropdown, Menu } from "antd";

import React, { ReactDOM, useContext, useState } from "react";

const ThreadsNames = ( tNames ) => {
  return (
    tNames && <Menu>
      {tNames.map((tName) => (
        <Menu.Item>{tName}</Menu.Item>
      ))}
    </Menu>
  );
};
export const ThreadsTags = ({ char, blocked, wait, requested }) => {
  return (
    <span>
      <Dropdown overlay={ThreadsNames( wait )}>
        <Tag color="orange">W</Tag>
      </Dropdown>
      <Dropdown overlay={ThreadsNames(requested )}>
        <Tag color="orange">R</Tag>
      </Dropdown>
      <Dropdown overlay={ThreadsNames(blocked )}>
        <Tag color="orange">B</Tag>
      </Dropdown>
    </span>
  );
};
