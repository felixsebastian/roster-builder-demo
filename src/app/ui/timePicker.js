import React from "react";
import styled from "styled-components";
import Space from "./space";
import input from "../ui/input";
import Button from "../ui/button";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

const Input = styled(input)`
  display: block;
  width: 2rem;
  box-sizing: border-box;
  border-radius: 0.25rem 0 0 0.25rem;
  padding-right: 0;
`;

const AmPm = styled(({ children, className }) => (
  <Button className={className} grey>
    {children}
  </Button>
))`
  display: block;
  padding: 0.5rem 0rem;
  width: 2.5rem;
  border-radius: 0 0.25rem 0.25rem 0;
`;

const Colon = styled.div`
  display: inline-block;
  width: 0.25rem;
`;

export default ({ value, onChange }) => {
  const setHours = e =>
    onChange({
      hours: e.target.value,
      minutes: value.minutes
    });

  const setMinutes = e =>
    onChange({
      hours: value.hours,
      minutes: e.target.value
    });

  const toggleAmPm = () =>
    onChange({
      hours: (value.hours + 12) % 24,
      minutes: value.minutes
    });

  return (
    <Box>
      <Input
        onChange={setHours}
        type="text"
        size="3"
        value={((value.hours - 1) % 12) + 1}
      />
      <Space vertical size={0.25} />
      <Colon>:</Colon>
      <Space vertical size={0.25} />
      <Input onChange={setMinutes} type="text" size="3" value={value.minutes} />
      <AmPm onClick={toggleAmPm}>{value.hours > 12 ? "pm" : "am"}</AmPm>
    </Box>
  );
};
