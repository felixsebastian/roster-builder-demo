import React, { Fragment } from "react";
import Space from "../../../ui/space";
import Row from "../row";
import Column from "../column";
import Shift from "./shift";
import roles from "../../config/roles";
import formatTimeframe from "./formatTimeframe";

const getTimeframe = (startTime, endTime) =>
  `${formatTimeframe(startTime)} - ${formatTimeframe(endTime)}`;

const getShiftOrderKey = shift =>
  shift.role + shift.startTime.hours + shift.startTime.minutes;

export default ({ itemsByDate, select, selection }) => (
  <Row>
    {Object.values(itemsByDate).map((itemsForDate, i) => (
      <Fragment key={i}>
        <Column>
          {itemsForDate.shifts
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
