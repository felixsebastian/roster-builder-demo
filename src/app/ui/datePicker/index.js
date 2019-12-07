import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import moment from "moment";
import Input from "./input";
import disablePast from "./disablePast";

const dateFormat = "Do MMMM YYYY";

export default ({ onChange }) => (
  <DayPickerInput
    component={Input}
    dayPickerProps={disablePast}
    formatDate={formatDate}
    parseDate={parseDate}
    format={dateFormat}
    placeholder={""}
    value={moment().format(dateFormat)}
    onDayChange={date => onChange(moment(date))}
  />
);
