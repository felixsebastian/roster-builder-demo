import React from "react";
import Shift from "../shift";
import roles from "./config/roles";
import locations from "./config/locations";

const getTimeframe = (startTime, endTime) => {
  let result = "";
  result += ((startTime.hours - 1) % 12) + 1;
  result += ":";
  result += String(startTime.minutes).padStart(2, "0");
  result += startTime.hours < 11 ? "am" : "pm";
  result += " - ";
  result += ((endTime.hours - 1) % 12) + 1;
  result += ":";
  result += String(endTime.minutes).padStart(2, "0");
  result += endTime.hours < 11 ? "am" : "pm";
  return result;
};

export default ({ shifts, notes }) => (
  <div>
    {shifts.map(shift => (
      <Shift
        timeframe={getTimeframe(shift.startTime, shift.endTime)}
        role={roles[shift.role]}
      />
    ))}
  </div>
);
