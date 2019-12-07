import React, { useState } from "react";
import Sidebar from "../layouts/sidebar";
import AddItem from "./addItem";
import Staging from "./staging";

export default () => {
  const [shifts, setShifts] = useState([]);
  const [notes, setNotes] = useState([]);

  return (
    <Sidebar
      sidebar={() => (
        <AddItem
          addShift={shift => setShifts([...shifts, shift])}
          addNote={shift => setShifts([...shifts, shift])}
        />
      )}
      main={() => <Staging shifts={shifts} notes={notes} />}
    />
  );
};
