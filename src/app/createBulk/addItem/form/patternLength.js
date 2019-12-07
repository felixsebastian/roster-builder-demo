import React from "react";
import Space from "../../../ui/space";
import styled from "styled-components";
import input from "../../../ui/input";

const Input = styled(input)`
  width: 4rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;

export default ({ pattern, patternLength, setPatternLength }) => (
  <>
    <Space vertical inline />
    for
    <Space vertical inline />
    <Input
      onChange={e => setPatternLength(parseInt(e.target.value), 10)}
      value={patternLength}
      type="number"
      min="1"
    />
    <Space vertical inline />
    {pattern === 1 ? `day` : `week`}
    {patternLength > 1 ? "s" : ""}
  </>
);
