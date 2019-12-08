import React, { useRef } from "react";
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

const AmPm = styled(({ children, className, onClick }) => (
  <Button {...{ className, onClick }} grey>
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
  const minutes = useRef(null);

  const handleHoursInput = e => {
    if (!/^([1-9]|[01]\d|2[0-3])?$/.test(e.target.value)) return;
    if (/^(1[012]|2[0-3]|[3-9])$/.test(e.target.value)) minutes.current.focus();

    onChange({
      hours: parseInt(e.target.value) || "",
      minutes: value.minutes
    });
  };

  const handleMinutesInput = e => {
    if (!/^([0-5]?\d)?$/.test(e.target.value)) return;

    onChange({
      hours: value.hours,
      minutes: e.target.value
    });
  };

  const toggleAmPm = () =>
    onChange({
      hours: (value.hours + 12) % 24,
      minutes: value.minutes
    });

  const handleHoursBlur = e => {
    if (e.target.value.length === 0)
      e.target.value = e.target.dataset.lastValue;
  };

  const handleMinutesBlur = e => {
    if (e.target.value.length === 0) e.target.value = "00";
    if (e.target.value.length === 1) e.target.value = "0" + e.target.value;
  };

  const handleFocus = e => {
    e.target.select();
    e.target.dataset.lastValue = e.target.value;
  };

  const handleDrag = e => e.preventDefault();

  return (
    <Box>
      <Input
        onDragStart={handleDrag}
        onBlur={handleHoursBlur}
        onFocus={handleFocus}
        onChange={handleHoursInput}
        type="text"
        size="3"
        value={((value.hours - 1) % 12) + 1}
      />
      <Space vertical size={0.25} />
      <Colon>:</Colon>
      <Space vertical size={0.25} />
      <Input
        onDragStart={handleDrag}
        onBlur={handleMinutesBlur}
        onFocus={handleFocus}
        ref={minutes}
        onChange={handleMinutesInput}
        type="text"
        size="3"
        value={value.minutes}
      />
      <AmPm onClick={toggleAmPm}>{value.hours > 12 ? "pm" : "am"}</AmPm>
    </Box>
  );
};
