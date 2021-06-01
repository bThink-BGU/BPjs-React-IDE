import React, { useContext } from "react";
import styled from "styled-components";
import { Empty } from "antd";
import ProgramStateCTX from "../state-context/StateContext";
import { CustomTitle } from "../title/title";
import { EventRow } from "../event-row/EventRow";
import { AnimatedList } from "react-animated-list";

const Container = styled.div`
  opacity: ${props => props.shouldFadePanel ? "0" : "1"};
  transition: opacity 0.2s;
  width: 90%;
  margin-bottom: 10px;
`;

const Content = styled.div`
  width: 100%;
  background-color: #353d45;
  margin-top: 10px;
  border-radius: 3px;
  padding: 10px;
  max-height: 200px;
  min-height: 200px;
  height: 200px;
  overflow-y: hidden;
`;

const getThreadAndCurrLineMessage = (threadAndEnv) => {
    const hasCurrLine = threadAndEnv.env[0];
    const currLineMessage = hasCurrLine ? threadAndEnv.env[0].currentLineNumber : " not running";
    return (
        <span>
            Thread
            <span style={{color: "cadetblue"}}>
                {`  ${threadAndEnv.name}  `}
            </span>
            is currently
            {hasCurrLine ? " in line " : ""}
            <span style={{color: "blanchedalmond"}}>
                {currLineMessage}
            </span>
        </span>
    )
}

const ThreadsToLinesMap = ({shouldFadePanel}) => {
    const {progState} = useContext(ProgramStateCTX);
    console.log(progState.threadsAndEnvs && progState.threadsAndEnvs)
    return (
        <Container shouldFadePanel={shouldFadePanel}>
            <Content>
                <CustomTitle level={5} color={"white"}>
                    Threads to Lines
                </CustomTitle>
                <div style={{height: "80%", overflowY: "auto"}}>
                    {progState.threadsAndEnvs?.length > 0 ?
                        <AnimatedList animation={"grow"}>
                            {progState.threadsAndEnvs.map((threadAndEnv, i) => (
                                <EventRow
                                    key={i}
                                    name={getThreadAndCurrLineMessage(threadAndEnv)}
                                    clickAble={false}
                                    withX={false}
                                />
                            ))}
                            {progState.threadsAndEnvs.map((threadAndEnv, i) => (
                                <EventRow
                                    key={i}
                                    name={getThreadAndCurrLineMessage(threadAndEnv)}
                                    clickAble={false}
                                    withX={false}
                                />
                            ))}
                        </AnimatedList> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>}
                </div>
            </Content>
        </Container>
    );
};

export default ThreadsToLinesMap;
