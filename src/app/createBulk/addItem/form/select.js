import React from "react";
import select from "../../../ui/select";
import styled from "styled-components";

const Input = styled(select)`
  width: 100%;
`;

const nullValue = "ch7sFnDsReuFfDI5H7OA";

export default ({ value, onChange, options, prompt, className }) => (
  <Input
    className={className}
    value={value !== null ? value : nullValue}
    onChange={e => onChange(parseInt(e.target.value))}
  >
    {value === null && prompt && <option value={nullValue}>{prompt}</option>}
    {options.map((option, i) => (
      <option value={i} key={i}>
        {option}
      </option>
    ))}
  </Input>
);
