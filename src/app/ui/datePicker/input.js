import React, { Component } from "react";
import styled from "styled-components";
import input from "../input";

const Field = styled(input)`
  width: 100%;
  box-sizing: border-box;
`;

export default class Input extends Component {
  render() {
    return <Field {...this.props} />;
  }
}
