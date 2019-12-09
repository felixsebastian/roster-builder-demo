import React, { useCallback, useEffect, useState } from "react";

import AddItem from "./addItem";
import Sidebar from "../layouts/sidebar";
import Staging from "./staging";
import dummyNotes from "./config/dummyNotes";
import dummyShifts from "./config/dummyShifts";
import Mux from "./mux";
import EditItem from "./editItem";
import { toast } from "react-toastify";

const getRandomId = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);

export default ({ publish }) => {
  const [shifts, setShifts] = useState(dummyShifts);
  const [notes, setNotes] = useState(dummyNotes);
  const [selection, setSelection] = useState(null);

  const select = useCallback(
    item => {
      setSelection(item);
    },
    [setSelection]
  );

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    return () => window.removeEventListener("keydown", keyDown);
  });

  const addNote = useCallback(note => {
    setNotes(notes => [...notes, { ...note, id: getRandomId() }]);
    toast("Added note!");
  }, []);

  const addShift = useCallback(shift => {
    setShifts(shifts => [
      ...shifts,
      {
        ...shift,
        id: getRandomId()
      }
    ]);
    toast("Added shift!");
  }, []);

  const findItem = useCallback(
    id => {
      if (id === null) return null;
      let shift = shifts.find(shift => shift.id === id);
      if (shift) return { type: "shift", item: shift };
      let note = notes.find(note => note.id === id);
      if (note) return { type: "note", item: note };
      return null;
    },
    [shifts, notes]
  );

  const deleteSelection = useCallback(() => {
    const { type } = findItem(selection);

    if (type === "shift")
      setShifts(shifts.filter(shift => shift.id !== selection));

    if (type === "note") setNotes(notes.filter(note => note.id !== selection));
    setSelection(null);
    toast(`Deleted ${type}!`);
  }, [shifts, notes, selection, findItem]);

  const keyDown = useCallback(
    e => {
      if (
        selection !== null &&
        (e.code === "Delete" ||
          e.code === "Backspace" ||
          e.key === "Delete" ||
          e.key === "Backspace")
      )
        deleteSelection();
    },
    [deleteSelection, selection]
  );

  const deselect = () => setSelection(null);

  const updateSelection = useCallback(
    data => {
      let foundItem = findItem(selection);
      if (foundItem === null) return;
      let { type, item } = foundItem;

      if (type === "shift") {
        setShifts(shifts => [
          ...shifts.filter(shift => shift.id !== selection),
          {
            ...item,
            ...data
          }
        ]);

        toast("Updated shift!");
      }

      if (type === "note") {
        setNotes(shifts => [
          ...notes.filter(note => note.id !== selection),
          {
            ...item,
            ...data
          }
        ]);

        toast("Updated note!");
      }
    },
    [selection, findItem, notes]
  );

  let { type, item } = findItem(selection) || { type: null, item: null };

  return (
    <Sidebar
      sidebar={
        <Mux index={selection ? 1 : 0}>
          <AddItem {...{ addShift, addNote }} />
          <EditItem
            key={selection}
            {...{
              type,
              item,
              updateSelection,
              deleteSelection,
              deselect
            }}
          />
        </Mux>
      }
      main={
        <Staging
          {...{ shifts, notes, selection, select, deleteSelection, publish }}
        />
      }
    />
  );
};
