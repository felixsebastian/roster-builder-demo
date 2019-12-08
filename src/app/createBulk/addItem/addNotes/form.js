import Box from "../form/box";
import DatePicker from "../../../ui/datePicker";
import FormBlock from "../form/block";
import Pattern from "../form/pattern";
import React from "react";
import Select from "../form/select";
import Space from "../../../ui/space";
import SplitSection from "../form/splitSection";
import Submit from "../form/submit";
import TextArea from "./textArea";
import locations from "../../config/locations";
import roles from "../../config/roles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({
  role,
  setRole,
  location,
  setLocation,
  setDate,
  pattern,
  changePattern,
  patternLength,
  setPatternLength,
  create,
  body,
  setBody
}) => (
  <Box>
    <Space />
    <SplitSection>
      <FormBlock label="Location">
        <Select value={location} onChange={setLocation} options={locations} />
      </FormBlock>
      <FormBlock label="Role">
        <Select
          value={role}
          onChange={setRole}
          options={["Everyone", ...roles]}
        />
      </FormBlock>
    </SplitSection>
    <FormBlock label="Date">
      <DatePicker onChange={setDate} />
    </FormBlock>
    <FormBlock label="Body">
      <TextArea value={body} onChange={setBody} />
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
