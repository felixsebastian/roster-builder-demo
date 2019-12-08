import React, { useState, useEffect, useCallback } from "react";
import SideScroll from "./sideScroll";
import addItems from "./addItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Arrow from "./arrow";
import Table from "./table";
import Space from "../../ui/space";
import Type from "../../ui/type";
import Toolbar from "./toolbar";
import Box from "./box";

const getItemsByDate = (shifts, notes, location) => {
  let itemsByDate = {};
  addItems("shifts", shifts, itemsByDate, location);
  addItems("notes", notes, itemsByDate, location);
  return itemsByDate;
};

const getPageSize = () =>
  Math.floor(
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0) /
      180 -
      2.4
  );

export default ({
  shifts,
  notes,
  select,
  selection,
  deleteSelection,
  publish
}) => {
  const [page, setPage] = useState(0);
  const [location, setLocation] = useState(null);
  let [pageSize, setPageSize] = useState(getPageSize());
  let itemsByDate = getItemsByDate(shifts, notes, location);

  const handleResize = useCallback(() => {
    setPageSize(getPageSize());
    setPage(0);
  }, []);

  const changeLocation = useCallback(location => {
    setLocation(location);
    setPage(0);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const dates = Object.keys(itemsByDate)
    .map(date => parseInt(date, 10))
    .sort((dateA, dateB) => dateA > dateB)
    .slice(page, page + pageSize);

  return (
    <Box>
      {dates.length ? (
        <SideScroll>
          <Space size={0.5} />
          <Arrow disabled={page === 0} onClick={() => setPage(page - pageSize)}>
            <FontAwesomeIcon icon="caret-left" />
          </Arrow>
          <Table {...{ itemsByDate, dates, select, selection }} />
          <Arrow
            disabled={page >= Object.keys(itemsByDate).length - pageSize}
            onClick={() => setPage(page + pageSize)}
          >
            <FontAwesomeIcon icon="caret-right" />
          </Arrow>
        </SideScroll>
      ) : (
        <>
          <Space />
          <Type block center>
            Nothing to see here...
          </Type>
        </>
      )}
      <Space />
      <Toolbar
        changeLocation={changeLocation}
        selection={selection}
        deleteSelection={deleteSelection}
        publish={publish}
      />
      <Space />
    </Box>
  );
};
