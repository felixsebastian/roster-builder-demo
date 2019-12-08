import React, { useState } from "react";
import Box from "./box";
import Table from "./table";
import Headers from "./headers";
import Months from "./months";
import Notes from "./notes";
import Shifts from "./shifts";
import Space from "../../ui/space";
import Hr from "../../ui/hr";
import addItems from "./addItems";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Continuity from "./continuity";

const getItemsByDate = (shifts, notes) => {
  let itemsByDate = {};
  addItems("shifts", shifts, itemsByDate);
  addItems("notes", notes, itemsByDate);
  return itemsByDate;
};

const Arrow = styled.button`
  padding: 1rem;
  cursor: pointer;
  border: none;
  height: 7.25rem;
  &:hover {
    background-color: #ddd;
  }
  &:disabled {
    background-color: #eee;
    color: #ddd;
    cursor: default;
  }
`;

export default ({ shifts, notes, select, selection }) => {
  const [page, setPage] = useState(0);
  let itemsByDate = getItemsByDate(shifts, notes);
  let dates = Object.keys(itemsByDate)
    .map(date => parseInt(date, 10))
    .sort((dateA, dateB) => dateA > dateB);
  dates = dates.slice(page, page + 7);

  return (
    <Box>
      <Arrow disabled={page === 0} onClick={() => setPage(page - 7)}>
        <FontAwesomeIcon icon="caret-left" />
      </Arrow>
      <Table>
        <Headers itemsByDate={itemsByDate} dateKeys={dates} />
        <Space size={0.25} />
        <Continuity dates={dates} />
        <Space size={0.5} />
        <Months itemsByDate={itemsByDate} dateKeys={dates} />
        <Space size={0.5} />
        <Shifts {...{ itemsByDate, select, selection, dates }} />
        <Space size={1.5} />
        <Notes {...{ itemsByDate, select, selection, dates }} />
      </Table>
      <Arrow
        disabled={page > dates.length - 1 / 7}
        onClick={() => setPage(page + 7)}
      >
        <FontAwesomeIcon icon="caret-right" />
      </Arrow>
    </Box>
  );
};
