import React, { useCallback, useEffect, useState } from "react";

import AddItem from "./addItem";
import Sidebar from "../layouts/sidebar";
import Staging from "./staging";
import dummyNotes from "./config/dummyNotes";
import dummyShifts from "./config/dummyShifts";

const getRandomId = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);

export default () => {
  const [shifts, setShifts] = useState(dummyShifts);
  const [notes, setNotes] = useState(dummyNotes);
  const [selection, setSelection] = useState(null);
  const select = item => setSelection(item);

  const keyDown = useCallback(
    e => {
      if (
        (e.code === "Delete" ||
          e.code === "Backspace" ||
          e.key === "Delete" ||
          e.key === "Backspace") &&
        selection !== null
      ) {
        setShifts([...shifts.filter(shift => shift.id !== selection)]);
        setNotes([...notes.filter(note => note.id !== selection)]);
      }
    },
    [selection, shifts, notes]
  );

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    return () => window.removeEventListener("keydown", keyDown);
  });

  const addNote = useCallback(
    note => setNotes(notes => [...notes, { ...note, id: getRandomId() }]),
    []
  );

  const addShift = useCallback(shift => {
    setShifts(shifts => [
      ...shifts,
      {
        ...shift,
        id: getRandomId()
      }
    ]);
  }, []);

  return (
    <Sidebar
      sidebar={() => <AddItem {...{ addShift, addNote }} />}
      main={() => <Staging {...{ shifts, notes, selection, select }} />}
    />
  );
};
