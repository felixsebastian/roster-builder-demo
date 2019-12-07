import React from "react";
import styled from "styled-components";

export const horizontalSpace = styled.div`
  height: ${props => props.size}rem;
`;

export const verticalSpace = styled.div`
  width: ${({ size }) => size}rem;
  display: ${({ inline }) => (inline ? "inline-block" : "block")};
`;

const VerticalSpace = verticalSpace;
const HorizontalSpace = horizontalSpace;

export default ({ vertical, inline, size = 1 }) =>
  vertical ? (
    <VerticalSpace size={size} inline={inline} />
  ) : (
    <HorizontalSpace size={size} />
  );
