import React from "react";
import styled from "styled-components";

const Hide = styled.div`
  display: ${props => (props.hide ? "none" : "block")};
  height: 100%;
`;

export default ({ children, index }) =>
  React.Children.map(children, (child, i) =>
    i === index ? (
      <Hide key={i}>{React.cloneElement(child)}</Hide>
    ) : (
      <Hide key={i} hide>
        {React.cloneElement(child)}
      </Hide>
    )
  );
