import styled from "styled-components";

export default styled.button`
  padding: 0.5rem;
  background-color: ${props =>
    props.disabled || props.grey ? "#eeeeee" : props.color || "#496fc9"};
  border: none;
  color: ${props =>
    props.disabled ? "#aaaaaa" : props.grey ? "#2f313a" : "#eeeeee"};
  cursor: pointer;
  font-size: 1rem;
  border-radius: 0.25rem;
`;
