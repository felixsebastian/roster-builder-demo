import React from "react";
import Row from "../row/box";
import Space from "../../../../ui/space";
import Type from "../../../../ui/type";
import getOrdinal from "./getOrdinal";
import styled from "styled-components";
import Column from "../column";

const Box = styled.div`
  display: flex;
`;

const Line = styled.div`
  background-color: #ddd;
  flex-grow: 1;
  padding: 0.5rem;
  border-radius: ${props => (props.justBroke ? "0.25" : "0")}rem
    ${props => (props.showBreak ? "0.25" : "0")}rem
    ${props => (props.showBreak ? "0.25" : "0")}rem
    ${props => (props.justBroke ? "0.25" : "0")}rem;
`;

export default ({ dates, itemsByDate }) => {
  let justBroke = true;

  return (
    <Row>
      <Space vertical size={0.5} />
      {dates.map((dateKey, i) => {
        let date = itemsByDate[dateKey].date;
        let showBreak = dates[i + 1] > dateKey + 1 || i === dates.length - 1;

        const result = (
          <Column key={i}>
            <Box>
              <Line {...{ justBroke, showBreak }}>
                <Type center block size={1}>
                  {date.format("dddd")} {date.date()}
                  {getOrdinal(date.date())}
                </Type>
              </Line>
              {showBreak && <Space vertical size={0.5} />}
            </Box>
          </Column>
        );

        justBroke = showBreak;
        return result;
      })}
    </Row>
  );
};
