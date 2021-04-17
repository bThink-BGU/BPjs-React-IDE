import styled from "styled-components";

import { Tag, Input, Typography, Badge, Popconfirm, message } from "antd";
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
  cursor: ${(props) => (props.clickAble ? "pointer" : "default")};
  border: 1px solid orange;
  padding: 2px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;
function confirm(afterConfirmMsg,cb) {
  message.success(afterConfirmMsg);
  cb()
}

function cancel(e) {
  message.error("Aborted");
}
export const EventRow = ({
  name,
  withX = true,
  onClick = () => {},
  clickAble = true,
  withConfirmation = false,
  confirmMsg = "",
  afterConfirmMsg = "",
}) => {
  const [visible, setVisible] = useState(true);
  return visible ? (
    <Popconfirm
      title={confirmMsg}
      onConfirm={() => confirm(afterConfirmMsg, onClick)}
      onCancel={cancel}
      okText="Yes"
      disabled = {!withConfirmation}
      cancelText="No"
    >
      <EventRowContainer onClick={() => clickAble && !withConfirmation && onClick()} clickAble={clickAble}>
        <CustomEventRow color={"#ff9e35"}> {name} </CustomEventRow>
        {withX && (
          <CloseOutlined
            onClick={() => setVisible(false)}
            style={{ color: "#ff9e35" }}
          />
        )}
      </EventRowContainer>
    </Popconfirm>
  ) : null;
};