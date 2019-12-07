import React, { useState } from "react";

import AddNotes from "./addNotes";
import AddShifts from "./addShifts";
import Tabs from "../../ui/tabs";
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
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box>
      <Tabs activeItem={activeTab} items={tabs} onTabChange={setActiveTab} />
      {activeTab === 0 && <AddShifts addShift={addShift} />}
      {activeTab === 1 && <AddNotes addNote={addNote} />}
    </Box>
  );
};
