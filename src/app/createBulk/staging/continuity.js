import React from "react";
import Row from "./row/box";
import Column from "./column";
import styled from "styled-components";
import Space from "../../ui/space";

const Box = styled.div`
  display: flex;
`;

const Line = styled.div`
  background-color: #aaa;
  height: 0.25rem;
  /* height: 1px; */
  flex-grow: 1;
`;

export default ({ dates }) => (
  <Row>
    <Space vertical size={0.5} />
    {dates.map((date, i) => {
      let showBreak = dates[i + 1] > date + 1 || i === dates.length - 1;

      return (
        <Column>
          <Box>
            <Line />
            {showBreak && <Space vertical size={0.5} />}
          </Box>
        </Column>
      );
    })}
  </Row>
);
