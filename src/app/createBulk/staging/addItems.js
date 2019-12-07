const itemsForDate = date => ({
  shifts: [],
  notes: [],
  date
});

export default (type, items, itemsByDate) =>
  items.forEach((item, i) => {
    let date = parseInt(item.date.format("YYYYMMDD"));
    if (!itemsByDate[date]) itemsByDate[date] = itemsForDate(item.date);

    itemsByDate[date][type].push({
      ...item,
      id: type.toUpperCase() + "_" + i
    });
  });
