import React from "react";
import styled from "styled-components";
import Space from "../space";
import Type from "../type";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

const Day = styled.input`
  display: block;
  padding: 0.5rem;
  width: 2rem;
`;

const Year = styled.input`
  display: block;
  padding: 0.5rem;
  width: 3.5rem;
`;

const Month = styled.select`
  display: block;
  width: 100%;
  padding: 0.5rem;
  flex-grow: 1;
`;

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default ({ value, onChange }) => {
  const dayChanged = e => {
    console.log(parseInt(e.target.value, 10));

    let newValue = value.clone();
    newValue.date(parseInt(e.target.value, 10));
    onChange(newValue);
  };

  const monthChanged = e => {
    let newValue = value.clone();
    newValue.month(parseInt(e.target.value, 10));
    onChange(newValue);
  };

  const yearChanged = e => {
    let newValue = value.clone();
    newValue.year(parseInt(e.target.value, 10));
    onChange(newValue);
  };

  return (
    <Box>
      <Day onChange={dayChanged} type="number" size="3" value={value.date()} />
      <Space vertical size={0.5} />
      <div>
        <Type size={0.75}>th</Type>
        <Space size={1} />
      </div>
      <Space vertical size={3} />
      of
      <Space vertical size={3} />
      <Month onChange={monthChanged} value={value.month()}>
        {months.map((month, i) => (
          <option value={i + 1}>{month}</option>
        ))}
      </Month>
      <Space vertical />
      <Year onChange={yearChanged} type="number" value={value.year()} />
    </Box>
  );
};
