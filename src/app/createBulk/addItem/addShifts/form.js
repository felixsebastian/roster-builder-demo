import Box from "../form/box";
import DatePicker from "../../../ui/datePicker";
import FormBlock from "../form/block";
import Pattern from "../form/pattern";
import React from "react";
import Select from "../form/select";
import Space from "../../../ui/space";
import SplitSection from "../form/splitSection";
import Submit from "../form/submit";
import TimePicker from "../../../ui/timePicker";
import locations from "../../config/locations";
import roles from "../../config/roles";
import staffMembers from "../../config/staffMembers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({
  role,
  setRole,
  location,
  setLocation,
  staffMember,
  setStaffMember,
  setDate,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  pattern,
  changePattern,
  patternLength,
  setPatternLength,
  create
}) => (
  <Box>
    <Space />
    <SplitSection>
      <FormBlock label="Location">
        <Select value={location} onChange={setLocation} options={locations} />
      </FormBlock>
      <FormBlock label="Role">
        <Select value={role} onChange={setRole} options={roles} />
      </FormBlock>
    </SplitSection>
    <FormBlock label="Date">
      <DatePicker onChange={setDate} />
    </FormBlock>
    <SplitSection>
      <FormBlock label="From">
        <TimePicker value={startTime} onChange={setStartTime} />
      </FormBlock>
      <FormBlock label="Until">
        <TimePicker value={endTime} onChange={setEndTime} />
      </FormBlock>
    </SplitSection>
    <FormBlock label="Staff">
      <Select
        value={staffMember}
        onChange={setStaffMember}
        options={staffMembers}
        prompt="Select a staff member"
      />
    </FormBlock>
    <Pattern
      {...{
        pattern,
        changePattern,
        patternLength,
        setPatternLength
      }}
    />
    <Submit onClick={create}>
      Add to roster plan <FontAwesomeIcon icon="long-arrow-alt-right" />
    </Submit>
  </Box>
);
