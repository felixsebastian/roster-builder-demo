const itemsForDate = date => ({
  shifts: [],
  notes: [],
  date
});

export default (type, items, itemsByDate, location) =>
  items.forEach((item, i) => {
    let date = parseInt(item.date.format("YYYYMMDD"));
    if (location === null || location === item.location) {
      if (!itemsByDate[date]) itemsByDate[date] = itemsForDate(item.date);
      itemsByDate[date][type].push(item);
    }
  });
