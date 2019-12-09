import React from "react";
import Box from "./box";
import Headers from "./headers";
import Months from "./months";
import Notes from "./notes";
import Shifts from "./shifts";
import Space from "../../../ui/space";

export default ({ itemsByDate, dates, select, selection }) => (
  <Box>
    <Space />
    <Months itemsByDate={itemsByDate} dateKeys={dates} />
    <Space size={0.25} />
    <Headers {...{ itemsByDate, dates }} />
    <Space size={0.5} />
    <Notes {...{ itemsByDate, select, selection, dates }} />
    <Shifts {...{ itemsByDate, select, selection, dates }} />
  </Box>
);
