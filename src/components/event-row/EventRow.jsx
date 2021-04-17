import styled from "styled-components";

import { Tag, Input, Typography, Badge } from "antd";
import TweenOne from "rc-tween-one";
import { CloseOutlined } from "@ant-design/icons";
import React, { ReactDOM, useContext, useState } from "react";

const { Title } = Typography;

export const CustomEventRow = styled(Title)`
  color: ${(props) => props.color} !important;
  font-size: 0.9em !important;
  margin-bottom: 0px !important;
  display: inline !important;
`;

export const EventRowContainer = styled.div`
  background-color: #23272b;
  border: 1px solid orange;
  padding: 2px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;
const ThreadBadge = ({ children }) => {
  return (
    <Badge count={99} overflowCount={99}>
     {/* ssss */}
      {children}
    </Badge>
  );
};

export const EventRow = ({ name, withX = true }) => {
  const [visible, setVisible] = useState(true);
  return visible ? (
    // <ThreadBadge>
      <EventRowContainer>
        <CustomEventRow color={"#ff9e35"}> {name} </CustomEventRow>
        {withX && (
          <CloseOutlined
            onClick={() => setVisible(false)}
            style={{ position: "relative", right: "0px", color: "#ff9e35" }}
          />
        )}
      </EventRowContainer>
    // </ThreadBadge>
  ) : null;
};
