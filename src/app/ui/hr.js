import styled from "styled-components";

export default styled.hr`
  margin: 0;
  border: none;
  box-shadow: none;
  border-bottom: ${props => props.size || "1px"} solid
    ${props => props.color || "#2f313a"};
`;
