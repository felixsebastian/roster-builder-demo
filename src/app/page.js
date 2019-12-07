import React from "react";
import Header from "./ui/header";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100vh;
`;

const View = styled.div`
  flex-grow: 1;
`;

export default props => (
  <Box>
    <View>{props.children}</View>
    <Header />
  </Box>
);
