import React, { useContext } from "react";
import styled from "styled-components";
import { CustomTitle } from "../title/title";
import ProgramStateCTX from "../state-context/StateContext";
import { EventRow } from "../event-row/EventRow";
import { Empty, Tag } from 'antd';
import './events_status.scss'
import { groupByThreads } from './aggregator'
import { AnimatedList } from "react-animated-list";

const RequestedOrBlockedContainer = styled.div`
  opacity: ${props => props.shouldFadePanel ? "0" : "1"};
  transition: opacity 0.2s;
  width: 90%;
  min-height: 200px;
  background-color: #353d45;
  margin-top: 30px;
  border-radius: 3px;
  padding: 10px;
  max-height: 200px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    height: 12px;
    width: 6px;
    background: #23272b;
  }

  ::-webkit-scrollbar-thumb {
    background: #ff9e35;
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.75);
  }
`;

const RequestedOrBlocked = ({shouldFadePanel}) => {
    const {progState} = useContext(ProgramStateCTX);
    const eventsGroupedByThreads = groupByThreads(progState)
    return (
        <RequestedOrBlockedContainer shouldFadePanel={shouldFadePanel}>
            <span className={'box-header'}>
            <CustomTitle level={5} color={"white"}>
              Events Status
              </CustomTitle>
              <span className={'event-tag'}>
              <Tag color="orange"> Requested | Wait For | Blocked </Tag>
              </span>
              </span>
            {eventsGroupedByThreads?.length > 0 ?
                <AnimatedList animation={"grow"}>
                    {eventsGroupedByThreads.map((ee, i) => (
                        <EventRow
                            key={i}
                            withTags
                            tagsData={ee}
                            name={ee.name}
                        />
                    ))}
                </AnimatedList> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>}
        </RequestedOrBlockedContainer>
    );
}

export default RequestedOrBlocked;
