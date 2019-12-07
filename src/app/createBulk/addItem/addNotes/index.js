import React, { useState } from "react";

import Form from "./form";
import moment from "moment";

export default ({ addNote }) => {
  const [role, setRole] = useState(null);
  const [body, setBody] = useState("");
  const [location, setLocation] = useState(0);
  const [date, setDate] = useState(moment());
  const [pattern, setPattern] = useState(0);
  const [patternLength, setPatternLength] = useState(1);

  const error = error => {
    alert(error);
    return false;
  };

  const validate = () => {
    if (!body.length) return error("Please write something!");
    return true;
  };

  const create = () => {
    if (!validate()) return;
    else if (pattern === 0) addNote({ role, location, date, body });
    else {
      let nextDate = date;

      for (let i = 0; i < patternLength; i++) {
        addNote({
          role,
          location,
          date: nextDate.clone(),
          body
        });

        date.add(1, pattern === 1 ? "days" : "weeks");
      }
    }
  };

  return (
    <Form
      {...{
        role,
        setRole,
        location,
        setLocation,
        date,
        setDate,
        pattern,
        setPattern,
        patternLength,
        setPatternLength,
        validate,
        body,
        setBody,
        create
      }}
    />
  );
};
