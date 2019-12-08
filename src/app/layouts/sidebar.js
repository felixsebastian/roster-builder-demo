import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background-color: #eeeeee;
`;

const SidebarBox = styled.div`
  width: 25rem;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #fafafa;
`;

const MainBox = styled.div`
  flex-grow: 1;
  height: 100%;
  box-sizing: border-box;
  flex-basis: 0;
  padding: 2rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default ({ sidebar: Sidebar, main: Main }) => {
  return (
    <Box>
      <SidebarBox>
        <Sidebar />
      </SidebarBox>
      <MainBox>
        <Main />
      </MainBox>
    </Box>
  );
};
