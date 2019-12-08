import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background-color: #eeeeee;
`;

const Sidebar = styled.div`
  width: 20rem;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #fafafa;
`;

const Main = styled.div`
  flex-grow: 1;
  height: 100%;
  box-sizing: border-box;
  flex-basis: 0;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default ({ sidebar, main }) => {
  return (
    <Box>
      <Sidebar>{React.cloneElement(sidebar)}</Sidebar>
      <Main>{React.cloneElement(main)}</Main>
    </Box>
  );
};
