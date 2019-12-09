import React from "react";
import Header from "./ui/header";
import styled from "styled-components";
import { ToastContainer, Slide } from "react-toastify";

const Box = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100vh;
`;

const View = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

export default props => (
  <Box>
    <View>{props.children}</View>
    <Header />
    {/* <ToastContainer
      toastClassName="ento-toast"
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover
      transition={Slide}
    /> */}
  </Box>
);
