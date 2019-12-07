import React, { useState } from "react";

import Form from "./form";
import moment from "moment";
import patterns from "../../config/patterns";

export default ({ addNote }) => {
  const [role, setRole] = useState(null);
  const [body, setBody] = useState("");
  const [location, setLocation] = useState(0);
  const [date, setDate] = useState(moment());
  const [pattern, setPattern] = useState(patterns.data.none.id);
  const [patternLength, setPatternLength] = useState(1);

  const error = error => {
    alert(error);
    return false;
  };

  const validate = () => {
    if (!body.length) return error("Please write something!");
    return true;
  };

  const changePattern = pattern => {
    setPattern(pattern);
    if (pattern === patterns.data.none.id) setPatternLength(0);
    if (pattern === patterns.data.daily.id) setPatternLength(1);
    if (pattern === patterns.data.weekly.id) setPatternLength(1);
  };

  const create = () => {
    if (!validate()) return;

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
        changePattern,
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
