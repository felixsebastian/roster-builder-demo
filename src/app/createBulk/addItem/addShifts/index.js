import React, { useState } from "react";

import Form from "./form";
import moment from "moment";

export default ({ addShift }) => {
  const [role, setRole] = useState(0);
  const [location, setLocation] = useState(0);
  const [staffMember, setStaffMember] = useState(null);
  const [date, setDate] = useState(moment());
  const [startTime, setStartTime] = useState({ hours: 9, minutes: "00" });
  const [endTime, setEndTime] = useState({ hours: 17, minutes: "00" });
  const [pattern, setPattern] = useState(0);
  const [patternLength, setPatternLength] = useState(1);

  const error = error => {
    alert(error);
    return false;
  };

  const validate = () => {
    if (!staffMember) return error("Please select a staff member!");
    return true;
  };

  const create = () => {
    if (!validate()) {
      return;
    } else if (pattern === 0) {
      addShift({ role, location, staffMember, date, startTime, endTime });
    } else {
      let nextDate = date;

      for (let i = 0; i < patternLength; i++) {
        addShift({
          role,
          location,
          staffMember,
          date: nextDate.clone(),
          startTime,
          endTime
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
        staffMember,
        setStaffMember,
        date,
        setDate,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        pattern,
        setPattern,
        patternLength,
        setPatternLength,
        validate,
        create
      }}
    />
  );
};
