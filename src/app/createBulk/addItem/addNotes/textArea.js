import React from "react";
import styled from "styled-components";
import textArea from "../../../ui/textArea";

const Input = styled(textArea)`
  width: 100%;
  box-sizing: border-box;
`;

export default ({ value, onChange, className }) => (
  <Input {...{ value, className }} onChange={e => onChange(e.target.value)} />
);
