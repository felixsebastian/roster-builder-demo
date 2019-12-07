import React, { useState } from "react";
import Tabs from "../../ui/tabs";
import AddShifts from "./addShifts";
import AddNotes from "./addNotes";
import styled from "styled-components";

const tabs = [
  {
    text: "Add shifts",
    icon: "calendar-day"
  },
  {
    text: "Add notes",
    icon: "sticky-note"
  }
];

const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export default ({ addShift, addNote }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <Box>
      <Tabs activeItem={activeItem} items={tabs} onTabChange={setActiveItem} />
      {activeItem === 0 && <AddShifts addShift={addShift} />}
      {activeItem === 1 && <AddNotes addNote={addNote} />}
    </Box>
  );
};
