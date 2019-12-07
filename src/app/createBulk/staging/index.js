import Box from "./box";
import Headers from "./headers";
import Notes from "./notes";
import React from "react";
import Shifts from "./shifts";
import Space from "../../ui/space";
import addItems from "./addItems";
import locations from "../config/locations";

const getItemsByDate = (shifts, notes) => {
  let itemsByDate = {};
  addItems("shifts", shifts, itemsByDate);
  addItems("notes", notes, itemsByDate);
  return itemsByDate;
};

export default ({ shifts, notes, select, selection }) => {
  let itemsByDate = getItemsByDate(shifts, notes);
  let dates = Object.keys(itemsByDate).sort((dateA, dateB) => dateA > dateB);

  return (
    <Box>
      <Headers itemsByDate={itemsByDate} dateKeys={dates} />
      <Shifts {...{ itemsByDate, select, selection, dates }} />
      <Space size={2} />
      <Notes {...{ itemsByDate, select, selection, dates }} />
    </Box>
  );
};
