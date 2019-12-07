import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Tab from "./tab";

library.add(fas);

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  height: 2rem;
`;

export default ({ items, activeItem, onTabChange }) => (
  <Box>
    {items.map(({ icon, text }, i) => (
      <Tab
        key={i}
        onClick={() => onTabChange(i)}
        active={activeItem === i}
        icon={icon}
        text={text}
      />
    ))}
  </Box>
);
