import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: inline-block;
  border: 1px solid #e8e6df;
  background-color: #fafafa;
  border-radius: 0.25rem;
  line-height: 1.67;
  padding: 2px 0.5rem;
  height: 3rem;
  font-size: 0.75rem;
  min-width: 6.5rem;
  box-sizing: border-box;
`;

const Timeframe = styled.span`
  font-weight: 500;
`;

export default ({ timeframe, role }) => (
  <Box>
    <Timeframe>{timeframe}</Timeframe>
    <br />
    {role}
  </Box>
);
