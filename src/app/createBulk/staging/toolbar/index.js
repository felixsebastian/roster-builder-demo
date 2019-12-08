import React from "react";
import Box from "./box";
import locations from "../../config/locations";
import Select from "../../../ui/select";
import Space from "../../../ui/space";
import Button from "../../../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Spacer = styled.div`
  flex-grow: 1;
`;

export default ({ changeLocation, selection, deleteSelection, publish }) => (
  <Box>
    <Select
      options={["All locations", ...locations]}
      onChange={locationId =>
        changeLocation(locationId === 0 ? null : locationId - 1)
      }
    />
    <Space vertical inline />
    {selection && (
      <>
        <Button color="#C95A49" disabled={!selection} onClick={deleteSelection}>
          <FontAwesomeIcon icon="trash" />
        </Button>
      </>
    )}
    <Spacer />
    <Button
      color="#496fc9"
      onClick={() =>
        window.confirm("Are you sure you're ready to publish your roster?") &&
        publish()
      }
    >
      Publish <FontAwesomeIcon icon="paper-plane" />
    </Button>
  </Box>
);
