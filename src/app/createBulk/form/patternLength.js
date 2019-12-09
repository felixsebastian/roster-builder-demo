import React from "react";
import Space from "../../ui/space";
import input from "../../ui/input";
import patterns from "../config/patterns";
import styled from "styled-components";

const Input = styled(input)`
  width: 3rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;

export default ({ pattern, patternLength, setPatternLength }) => (
  <>
    <Space vertical inline size={0.25} />
    for
    <Space vertical inline size={0.25} />
    <Input
      onChange={e => setPatternLength(parseInt(e.target.value), 10)}
      value={patternLength}
      type="number"
      size={1}
      min="1"
    />
    <Space vertical inline size={0.25} />
    {pattern === patterns.data.daily.id ? `day` : `week`}
    {patternLength > 1 ? "s" : ""}
  </>
);
