import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Space from "../space";

const Box = styled.div`
  padding: 0 1rem;
  height: 2rem;
  font-weight: 500;
  color: #${props => (props.active ? "" : "888888")};
  cursor: pointer;
  border-bottom: 1px solid #${props => (props.active ? "aaaaaa" : "e8e6df")};
  &:hover {
    border-bottom: 1px solid #${props => (props.active ? "aaaaaa" : "cccccc")};
  }
`;

const TabIcon = styled.span`
  color: #${props => (props.active ? "888888" : "dddddd")};
`;

export default ({ onClick, active, icon, text }) => (
  <Box onClick={onClick} active={active}>
    {icon && (
      <TabIcon active={active}>
        <FontAwesomeIcon icon={icon} />
        <Space vertical inline size={0.5} />
      </TabIcon>
    )}
    {text}
  </Box>
);
