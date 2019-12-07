import React from "react";
import styled from "styled-components";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import moment from "moment";

const dateFormat = "Do MMMM YYYY";

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
`;

export default ({ onChange }) => (
  <DayPickerInput
    style={{ width: "100%" }}
    component={props => <Input {...props} />}
    disabledDays={{ before: new Date() }}
    dayPickerProps={{
      modifiers: {
        disabled: [
          {
            before: new Date()
          }
        ]
      }
    }}
    formatDate={formatDate}
    parseDate={parseDate}
    format={dateFormat}
    placeholder={`${formatDate(new Date(), dateFormat)}`}
    onDayChange={date => onChange(moment(date))}
  />
);
