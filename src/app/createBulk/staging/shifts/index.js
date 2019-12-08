import React, { Fragment } from "react";
import Row from "../row";
import Shift from "./shift";
import Space from "../../../ui/space";
import formatTimeframe from "./formatTimeframe";
import roles from "../../config/roles";

const getTimeframe = (startTime, endTime) =>
  `${formatTimeframe(startTime)} - ${formatTimeframe(endTime)}`;

const getShiftOrderKey = shift =>
  shift.role + shift.startTime.hours + shift.startTime.minutes;

export default ({ itemsByDate, dates, selection, select }) => (
  <Row
    itemsByDate={itemsByDate}
    dateKeys={dates}
    cell={({ itemsForDate }) =>
      itemsForDate.shifts
        .sort(
          (shiftA, shiftB) =>
            getShiftOrderKey(shiftA) > getShiftOrderKey(shiftB)
        )
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
