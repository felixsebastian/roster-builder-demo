import FormBlock from "./block";
import PatternLength from "./patternLength";
import React from "react";
import select from "./select";
import styled from "styled-components";

const PatternSelect = styled(select)`
  width: 8rem;
`;

const patterns = ["Don't repeat", "Daily", "Weekly"];

export default ({ pattern, setPattern, patternLength, setPatternLength }) => (
  <FormBlock label="Repeat">
    <PatternSelect
      label="Role"
      value={pattern}
      onChange={value => {
        setPattern(parseInt(value, 10));
        setPatternLength(1);
      }}
      options={patterns}
    />
    {pattern !== 0 && (
      <PatternLength {...{ pattern, patternLength, setPatternLength }} />
    )}
  </FormBlock>
);
