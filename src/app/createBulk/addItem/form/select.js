import React from "react";
import select from "../../../ui/select";
import styled from "styled-components";

const Input = styled(select)`
  width: 100%;
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

  console.log(options);

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
