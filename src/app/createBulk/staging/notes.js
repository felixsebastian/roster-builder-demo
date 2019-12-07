import React, { Fragment } from "react";

import Column from "./column";
import Note from "./note";
import Row from "./row";
import Space from "../../ui/space";
import roles from "../config/roles";

const getNoteOrderKey = note => (note.role === null ? Infinity : note.role);

export default ({ itemsByDate, select, selection }) => (
  <Row>
    {Object.values(itemsByDate).map((itemsForDate, i) => (
      <Fragment key={i}>
        <Column>
          {itemsForDate.notes
            .sort(
              (noteA, noteB) => getNoteOrderKey(noteA) > getNoteOrderKey(noteB)
            )
            .map((note, i) => (
              <Fragment key={i}>
                <Note
                  id={note.id}
                  onClick={select}
                  body={note.body}
                  selected={selection === note.id}
                  role={roles[note.role] || "Everyone"}
                />
                <Space size={0.5} />
              </Fragment>
            ))}
        </Column>
        <Space vertical size={0.5} />
      </Fragment>
    ))}
  </Row>
);
