import React, { useState } from "react";

import Form from "./form";
import moment from "moment";
import patterns from "../../config/patterns";

export default ({ addShift }) => {
  const [role, setRole] = useState(0);
  const [location, setLocation] = useState(0);
  const [staffMember, setStaffMember] = useState(null);
  const [date, setDate] = useState(moment());
  const [startTime, setStartTime] = useState({ hours: 9, minutes: "00" });
  const [endTime, setEndTime] = useState({ hours: 17, minutes: "00" });
  const [pattern, setPattern] = useState(patterns.data.none.id);
  const [patternLength, setPatternLength] = useState(0);

  const error = error => {
    alert(error);
    return false;
  };

  const validate = () => {
    if (!staffMember) return error("Please select a staff member!");
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

    for (let i = 0; i < patternLength + 1; i++) {
      addShift({
        role,
        location,
        staffMember,
        date: nextDate.clone(),
        startTime,
        endTime,
        pattern,
        patternLength
      });

      nextDate.add(1, pattern === patterns.data.daily.id ? "days" : "weeks");
    }
  };

  return (
    <Form
      {...{
        role,
        setRole,
        location,
        setLocation,
        staffMember,
        setStaffMember,
        date,
        setDate,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        pattern,
        changePattern,
        patternLength,
        setPatternLength,
        validate,
        create
      }}
    />
  );
};
