import FormBlock from "./block";
import PatternLength from "./patternLength";
import React from "react";
import patterns from "../config/patterns";
import select from "./select";
import styled from "styled-components";

const PatternSelect = styled(select)`
  width: 8rem;
`;

export default ({
  pattern,
  changePattern,
  patternLength,
  setPatternLength
}) => (
  <FormBlock label="Repeat">
    <PatternSelect
      label="Role"
      value={pattern}
      onChange={value => {
        changePattern(value);
        setPatternLength(1);
      }}
      options={patterns}
    />
    {pattern !== patterns.data.none.id && (
      <PatternLength {...{ pattern, patternLength, setPatternLength }} />
    )}
  </FormBlock>
);
