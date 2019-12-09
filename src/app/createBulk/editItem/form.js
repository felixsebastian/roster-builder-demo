import Box from "../form/box";
import DatePicker from "../../ui/datePicker";
import FormBlock from "../form/block";
import React from "react";
import Select from "../form/select";
import Space from "../../ui/space";
import SplitSection from "../form/splitSection";
import Footer from "../form/footer";
import Label from "../../ui/label";
import Button from "../form/footer/button";
import TimePicker from "../../ui/timePicker";
import locations from "../config/locations";
import roles from "../config/roles";
import staffMembers from "../config/staffMembers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({
  type,
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
  deselect,
  deleteSelection,
  save
}) => (
  <Box>
    <SplitSection>
      <FormBlock label="Location">
        <Select
          prompt="All locations"
          value={location}
          onChange={setLocation}
          options={
            type === "shift"
              ? locations
              : {
                  data: {
                    [null]: {
                      id: null,
                      name: "All locations"
                    },
                    ...locations.reduce(
                      (result, location, i) => ({
                        ...result,
                        [i]: { id: i, name: location }
                      }),
                      {}
                    )
                  },
                  index: [null, ...locations.map((_location, i) => i)]
                }
          }
        />
      </FormBlock>
      <FormBlock label="Role">
        <Select
          value={role}
          onChange={setRole}
          options={
            type === "shift"
              ? roles
              : {
                  data: {
                    [null]: {
                      id: null,
                      name: "Everyone"
                    },
                    ...roles.reduce(
                      (result, role, i) => ({
                        ...result,
                        [i]: { id: i, name: role }
                      }),
                      {}
                    )
                  },
                  index: [null, ...roles.map((_location, i) => i)]
                }
          }
        />
      </FormBlock>
    </SplitSection>
    <FormBlock label="Date">
      <DatePicker initialDate={date} onChange={setDate} />
    </FormBlock>
    {type === "shift" && (
      <SplitSection>
        <FormBlock label="From">
          <TimePicker value={startTime} onChange={setStartTime} />
        </FormBlock>
        <FormBlock label="Until">
          <TimePicker value={endTime} onChange={setEndTime} />
        </FormBlock>
      </SplitSection>
    )}
    <FormBlock label="Staff">
      <Select
        value={staffMember}
        onChange={setStaffMember}
        options={staffMembers}
        prompt="Select a staff member"
      />
    </FormBlock>
    <Label>Actions</Label>
    <Space size={0.25} />
    <Button wide color="#C95A49" onClick={deleteSelection}>
      Delete {type} <FontAwesomeIcon icon="trash" />
    </Button>
    <Footer>
      <Button grey onClick={deselect}>
        Cancel
      </Button>
      <Space vertical size={0.25} />
      <Button onClick={save}>
        Save <FontAwesomeIcon icon="check" />
      </Button>
    </Footer>
  </Box>
);
