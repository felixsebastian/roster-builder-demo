import React, { Fragment } from "react";

import Column from "../column";
import Row from "../row";
import Shift from "./shift";
import Space from "../../../ui/space";
import formatTimeframe from "./formatTimeframe";
import roles from "../../config/roles";

const getTimeframe = (startTime, endTime) =>
  `${formatTimeframe(startTime)} - ${formatTimeframe(endTime)}`;

const getShiftOrderKey = shift =>
  shift.role + shift.startTime.hours + shift.startTime.minutes;

export default ({ itemsByDate, select, selection, dates }) => (
  <Row>
    {dates.map((date, i) => (
      <Fragment key={i}>
        <Column>
          {itemsByDate[date].shifts
            .sort(
              (shiftA, shiftB) =>
                getShiftOrderKey(shiftA) > getShiftOrderKey(shiftB)
            )
            .map((shift, i) => (
              <Fragment key={i}>
                <Shift
                  id={shift.id}
                  onClick={select}
                  selected={selection === shift.id}
                  timeframe={getTimeframe(shift.startTime, shift.endTime)}
                  role={roles[shift.role]}
                />
                <Space size={0.5} />
              </Fragment>
            ))}
        </Column>
        <Space vertical size={0.5} />
      </Fragment>
    ))}
  </Row>
);
