import React, { useState } from "react";
import styled from "styled-components";
import Space from "../../ui/space";
import roles from "../config/roles";
import locations from "../config/locations";
import staffMembers from "../config/staffMembers";
import button from "../../ui/button";
import Label from "../../ui/label";
import DatePicker from "../../ui/datePicker";
import TimePicker from "../../ui/timePicker";

const Box = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Submit = styled(button)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
`;

const PatternSelect = styled(Select)`
  width: 8rem;
`;

const Input = styled.input`
  width: 4rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const patterns = ["Don't repeat", "Daily", "Weekly"];

export default ({ addShift }) => {
  const [role, setRole] = useState(0);
  const [location, setLocation] = useState(0);
  const [staffMember, setStaffMember] = useState(0);
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState({ hours: 9, minutes: 0 });
  const [endTime, setEndTime] = useState({ hours: 17, minutes: 0 });
  const [pattern, setPattern] = useState(0);
  const [patternLength, setPatternLength] = useState(1);

  const createShiftAndAdd = () => {
    if (pattern === 0)
      addShift({ role, location, staffMember, date, startTime, endTime });
    else if (pattern === 1) {
      for (let i = 0; i < patternLength; i++)
        addShift({ role, location, staffMember, date, startTime, endTime });
    }
  };

  return (
    <Box>
      <Space />
      <Label>Role</Label>
      <Select onChange={e => setRole(e.target.value)}>
        {roles.map((role, i) => (
          <option value={i} key={i}>
            {role}
          </option>
        ))}
      </Select>
      <Space />
      <Label>Location</Label>
      <Select onChange={e => setLocation(e.target.value)}>
        {locations.map((location, i) => (
          <option value={i} key={i}>
            {location}
          </option>
        ))}
      </Select>
      <Space />
      <Label>Date</Label>
      <DatePicker onChange={setDate} />
      <Space />
      <Label>From</Label>
      <TimePicker value={startTime} onChange={setStartTime} />
      <Space />
      <Label>Until</Label>
      <TimePicker value={endTime} onChange={setEndTime} />
      <Space />
      <Label>Repeat</Label>
      <PatternSelect
        onChange={e => {
          setPattern(parseInt(e.target.value, 10));
          setPatternLength(1);
        }}
      >
        {patterns.map((pattern, i) => (
          <option value={i} key={i}>
            {pattern}
          </option>
        ))}
      </PatternSelect>
      {pattern !== 0 && (
        <>
          <Space vertical inline />
          for
          <Space vertical inline />
          <Input
            onChange={e => setPatternLength(parseInt(e.target.value), 10)}
            value={patternLength}
            type="number"
            min="1"
          />
          <Space vertical inline />
          {pattern === 1 ? `day` : `week`}
          {patternLength > 1 ? "s" : ""}
        </>
      )}
      <Space />
      <Label>Staff member</Label>
      <Select onChange={e => setStaffMember(e.target.value)}>
        {staffMembers.map((staffMember, i) => (
          <option value={i} key={i}>
            {staffMember}
          </option>
        ))}
      </Select>
      <Submit onClick={createShiftAndAdd}>Add to roster plan ⟶</Submit>
    </Box>
  );
};
