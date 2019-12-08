import React from "react";
import Row from "../row";
import Space from "../../../ui/space";
import Type from "../../../ui/type";
import getOrdinal from "./getOrdinal";
import styled from "styled-components";

const Date = styled(({ children, className }) => (
  <Type className={className} block align="center" size={3}>
    {children}
  </Type>
))`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const cell = ({ itemsForDate }) => {
  let date = itemsForDate.date;
  let weekend = date.day() % 6 === 0;

  return (
    <>
      <Type size={1}>{date.format("dddd")}</Type>
      <Space size={0.5} />
      <Date weekend={weekend}>
        {date.date()}
        <Type size={1}>{getOrdinal(date.date())}</Type>
      </Date>
    </>
  );
};

export default ({ itemsByDate, dateKeys }) => {
  return <Row {...{ itemsByDate, dateKeys, cell }} />;
};
