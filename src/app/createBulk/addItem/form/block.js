import Label from "../../../ui/label";
import React from "react";
import Space from "../../../ui/space";

export default ({ label, children }) => (
  <>
    <Label>{label}</Label>
    {children}
    <Space />
  </>
);
