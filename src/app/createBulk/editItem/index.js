import React, { useState } from "react";
import Form from "./form";

const error = error => {
  alert(error);
  return false;
};

export default ({ type, item, updateSelection, deleteSelection, deselect }) => {
  if (!item) return null;
  const [role, setRole] = useState(item.role);
  const [location, setLocation] = useState(item.location);
  const [staffMember, setStaffMember] = useState(item.staffMember);
  const [date, setDate] = useState(item.date);
  const [startTime, setStartTime] = useState(item.startTime);
  const [endTime, setEndTime] = useState(item.endTime);
  const [body, setBody] = useState(type === "note" ? item.body : null);

  const validate = () => {
    if (staffMember === null) return error("Please select a staff member!");
    return true;
  };

  const save = () => {
    if (!validate()) return;

    updateSelection({
      role,
      location,
      staffMember,
      date,
      startTime,
      endTime
    });
  };

  return (
    <Form
      {...{
        type,
        edit: true,
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
        body,
        setBody,
        validate,
        deleteSelection,
        deselect,
        save
      }}
    />
  );
};
