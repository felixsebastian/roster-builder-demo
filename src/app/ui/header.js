import React from "react";
import styled from "styled-components";

const Box = styled.header`
  height: 3.5rem;
  line-height: 3.5rem;
  background-color: #496fc9;
  color: #dbe6ff;
  padding-left: 2rem;
  font-weight: 400;
  font-size: 1.3em;
`;

const Title = styled.span`
  color: #a3bfff;
`;

export default () => (
  <Box>
    Ento <Title>Roster Planner Prototype</Title>
  </Box>
);
