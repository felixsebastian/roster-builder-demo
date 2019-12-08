import React from "react";
import styled from "styled-components";

const Input = styled.select`
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: #eeeeee;
  border: none;
`;

const nullValue = "ch7sFnDsReuFfDI5H7OA";

export default ({ value, onChange, options, prompt, className }) => {
  let simpleOptions = false;

  if (Array.isArray(options)) {
    simpleOptions = true;
    options = {
      data: options.reduce(
        (result, option, i) => ({ ...result, [i]: { id: i, name: option } }),
        {}
      ),
      index: options.map((_option, i) => i)
    };
  }

  const change = e =>
    simpleOptions
      ? onChange(parseInt(e.target.value, 10))
      : onChange(e.target.value);

  return (
    <Input
      className={className}
      value={value !== null ? value : nullValue}
      onChange={change}
    >
      {value === null && prompt && <option value={nullValue}>{prompt}</option>}
      {options.index.map((id, i) => (
        <option value={id} key={i}>
          {options.data[id].name}
        </option>
      ))}
    </Input>
  );
};
