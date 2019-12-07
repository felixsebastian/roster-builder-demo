import React from "react";
import styled from "styled-components";
import Space from "./space";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

const Input = styled.input`
  display: block;
  padding: 0.5rem;
  width: 2rem;
`;

const AmPm = styled.button`
  display: block;
  padding: 0.5rem;
`;

export default ({ value, onChange }) => {
  const setHours = e => {
    let hours = e.target.value;
    let lastDigit = parseInt(hours.charAt(hours.length - 1), 10);
    if (lastDigit === 0) lastDigit = 1;
    hours = parseInt(hours, 10);
    if (value.hours > 12) hours += 12;
    if (hours.length === 3 || hours < 0 || hours > 25) hours = lastDigit;
    if (hours === 0) hours = 24;
    if (hours === 25) hours = 1;

    onChange({
      hours,
      minutes: value.minutes
    });
  };

  const setMinutes = e => {
    let minutes = e.target.value;
    let lastDigit = parseInt(minutes.charAt(minutes.length - 1), 10);
    minutes = parseInt(minutes, 10);
    if (minutes.length === 3 || minutes < 0 || minutes > 60)
      minutes = lastDigit;
    if (minutes === -1) minutes = 59;
    if (minutes === 60) minutes = 1;

    if (minutes > 0 && minutes < 60)
      onChange({
        hours: value.hours,
        minutes
      });
  };

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
      :
      <Space vertical size={0.25} />
      <Input
        onChange={setMinutes}
        type="text"
        size="3"
        value={String(value.minutes).padStart(2, "0")}
      />
      <Space vertical size={0.25} />
      <AmPm onClick={toggleAmPm}>{value.hours > 12 ? "Pm" : "Am"}</AmPm>
      <Space vertical size={2} />
    </Box>
  );
};
