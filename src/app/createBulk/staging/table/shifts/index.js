import React, { Fragment } from "react";
import Row from "../row";
import Shift from "./shift";
import Space from "../../../../ui/space";
import formatTimeframe from "./formatTimeframe";
import roles from "../../../config/roles";

const getTimeframe = (startTime, endTime) =>
  `${formatTimeframe(startTime)} - ${formatTimeframe(endTime)}`;

const getShiftOrderKey = shift =>
  (shift.startTime.hours + "0").padStart(3, "0") +
  (shift.startTime.minutes + "0").padStart(3, "0") +
  (shift.role + "0").padStart(5, "0");

export default ({ itemsByDate, dates, selection, select }) => (
  <Row
    itemsByDate={itemsByDate}
    dateKeys={dates}
    cell={({ itemsForDate }) =>
      itemsForDate.shifts
        .map(item => item)
        .sort((a, b) => getShiftOrderKey(a) - getShiftOrderKey(b))
        .map((shift, i) => (
          <Fragment key={i}>
            <Shift
              onClick={() => select(shift.id)}
              selected={selection === shift.id}
              timeframe={getTimeframe(shift.startTime, shift.endTime)}
              role={roles[shift.role]}
            />
            <Space size={0.5} />
          </Fragment>
        ))
    }
  />
);
