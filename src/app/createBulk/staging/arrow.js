import styled from "styled-components";

export default styled.button`
  padding: 0rem;
  cursor: pointer;
  border: none;
  height: 2rem;
  width: 2rem;
  margin-top: 2.25rem;
  border-radius: 0.25rem;
  background-color: #ddd;
  &:hover {
    background-color: #ddd;
  }
  &:disabled {
    background-color: #eee;
    background-color: #ddd;
    color: #ddd;
    color: #ccc;
    cursor: default;
  }
`;
