import React, { useCallback, useEffect, useState } from "react";

import AddItem from "./addItem";
import Sidebar from "../layouts/sidebar";
import Staging from "./staging";
import dummyNotes from "./config/dummyNotes";
import dummyShifts from "./config/dummyShifts";

export default () => {
  const [shifts, setShifts] = useState(dummyShifts);
  const [notes, setNotes] = useState(dummyNotes);
  const [selection, setSelection] = useState(null);
  const select = item => setSelection(item);

  const keyDown = useCallback(
    e => {
      if (e.code === "Delete" && selection !== null)
        setShifts([
          ...shifts.slice(0, selection),
          ...shifts.slice(selection + 1)
        ]);
    },
    [selection, shifts]
  );

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    return () => window.removeEventListener("keydown", keyDown);
  });

  const addNote = useCallback(note => setNotes(notes => [...notes, note]), []);

  const addShift = useCallback(shift => {
    setShifts(shifts => [...shifts, shift]);
  }, []);

  return (
    <Sidebar
      sidebar={() => <AddItem {...{ addShift, addNote }} />}
      main={() => <Staging {...{ shifts, notes, selection, select }} />}
    />
  );
};
