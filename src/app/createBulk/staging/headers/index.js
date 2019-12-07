import Column from "../column";
import React from "react";
import Row from "../row";
import Space from "../../../ui/space";
import Type from "../../../ui/type";
import getOrdinal from "./getOrdinal";
import styled from "styled-components";

const Date = styled(({ children, className }) => (
  <Type className={className} block align="center" size={3}>
    {children}
  </Type>
))`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export default ({ itemsByDate }) => {
  let currentMonth = null;
  let currentYear = null;

  return (
    <Row>
      {Object.values(itemsByDate).map(({ date }, i) => {
        let month = date.format("MMMM YYYY");

        return (
          <Column key={i}>
            <Date>
              {date.date()}
              <Type size={1}>{getOrdinal(date.date())}</Type>
            </Date>
            <Space size={0.5} />
            {month !== currentMonth && (currentMonth = month) && (
              <Type size={1.5}>{month}</Type>
            )}
            <Space />
          </Column>
        );
      })}
    </Row>
  );
};
