import React from "react";
import Row from "./row/box";
import Column from "./column";
import Type from "../../../ui/type";
import Space from "../../../ui/space";

export default ({ itemsByDate, dateKeys: dates }) => {
  let currentMonth = null;

  return (
    <Row>
      <Space vertical size={0.5} />
      {dates.map((date, i) => {
        let month = itemsByDate[date].date.format("MMMM YYYY");

        const getShowMonth = () => {
          let result = month !== currentMonth;
          currentMonth = month;
          return result;
        };

        return (
          <Column key={i}>
            {getShowMonth() && <Type size={0.75}>{month}</Type>}
            <Space vertical size={0.5} />
          </Column>
        );
      })}
    </Row>
  );
};
