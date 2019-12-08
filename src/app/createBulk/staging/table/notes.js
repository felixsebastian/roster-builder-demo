import React, { Fragment } from "react";
import Note from "./note";
import Row from "./row";
import Space from "../../../ui/space";
import roles from "../../config/roles";

const getNoteOrderKey = note => (note.role === null ? Infinity : note.role);

export default ({ itemsByDate, dates, selection, select }) => (
  <Row
    itemsByDate={itemsByDate}
    dateKeys={dates}
    cell={({ itemsForDate }) =>
      itemsForDate.notes
        .sort((noteA, noteB) => getNoteOrderKey(noteA) > getNoteOrderKey(noteB))
        .map((note, i) => (
          <Fragment key={i}>
            <Note
              onClick={() => select(note.id)}
              body={note.body}
              selected={selection === note.id}
              role={roles[note.role] || "Everyone"}
            />
            <Space size={0.5} />
          </Fragment>
        ))
    }
  />
);
