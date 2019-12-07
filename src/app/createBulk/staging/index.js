import Box from "./box";
import Headers from "./headers";
import Notes from "./notes";
import React from "react";
import Shifts from "./shifts";
import Space from "../../ui/space";
import locations from "../config/locations";

const itemsForDate = date => ({
  shifts: [],
  notes: [],
  date
});

const addItems = (type, items, itemsByDate) =>
  items.forEach((item, i) => {
    let date = item.date.format("DD/MM/YYYY");
    if (!itemsByDate[date]) itemsByDate[date] = itemsForDate(item.date);
    itemsByDate[date][type].push({ ...item, id: type.toUpperCase() + "_" + i });
  });

const getItemsByDate = (shifts, notes) => {
  let itemsByDate = {};
  addItems("shifts", shifts, itemsByDate);
  addItems("notes", notes, itemsByDate);
  return itemsByDate;
};

export default ({ shifts, notes, select, selection }) => {
  let itemsByDate = getItemsByDate(shifts, notes);

  return (
    <Box>
      <Headers itemsByDate={itemsByDate} />
      <Shifts {...{ itemsByDate, select, selection }} />
      <Space size={2} />
      <Notes {...{ itemsByDate, select, selection }} />
    </Box>
  );
};
