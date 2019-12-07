import React from "react";
import Space from "../../ui/space";
import Type from "../../ui/type";
import styled from "styled-components";

const Box = styled.div`
  border: 1px solid #c2a051;
  background-color: #ebc775;
  ${({ selected }) => Boolean(selected) && "box-shadow: 0 0 0 0.25rem #75a1ff"}
  border-radius: 0.25rem;
  line-height: 1.67;
  padding: 2px 0.5rem;
  font-size: 0.75rem;
  min-width: 6.5rem;
  box-sizing: border-box;
  cursor: pointer;
`;

export default ({ id, body, role, onClick, selected }) => (
  <Box selected={selected} onClick={() => onClick(id)}>
    <Type size={0.6}>
      For: {(role === "Everyone" ? role : role + "s").toLowerCase()}
    </Type>
    <Space size={0.5} />
    <Type size={0.75}>{body}</Type>
  </Box>
);
