import React, { Children } from "react";
import styled from "styled-components";
import Space from "../../../ui/space";

const Box = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  flex-grow: 1;
`;

export default ({ children }) => (
  <Box>
    {Children.map(children, (child, i) => (
      <>
        <Column>{child}</Column>
        {i < children.length - 1 && <Space vertical size={0.25} />}
      </>
    ))}
  </Box>
);
