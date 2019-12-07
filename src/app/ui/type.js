import styled from "styled-components";

export default styled.span`
  display: ${props => (props.block ? "block" : "inline-block")};
  font-size: ${props => props.size || 1}rem;
  font-weight: ${props => props.weight || 400};
  text-decoration: ${props => props.decoration || "none"};
  line-height: ${props => props.lineHeight || 1};
  text-align: ${props => props.align || "left"};
`;
