import React, { Fragment } from "react";

import Box from "./box";
import Column from "../column";

export default ({ itemsByDate, dateKeys, cell: Cell }) => {
  let lastDateKey = null;

  return (
    <Box>
      {dateKeys.map((dateKey, i) => {
        const showZigZag = () => {
          let result = lastDateKey && lastDateKey < dateKey - 1 && false;
          lastDateKey = dateKey;
          return result;
        };

        return (
          <Fragment key={i}>
            <Column>
              <Cell itemsForDate={itemsByDate[dateKey]} />
            </Column>
            {showZigZag() && <Column>HIII</Column>}
          </Fragment>
        );
      })}
    </Box>
  );
};
