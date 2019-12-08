import moment from "moment";

export default [
  {
    id: Math.random()
      .toString(36)
      .substr(2, 9),
    role: null,
    location: 0,
    body: "St patricks day",
    date: moment("2019-12-08T01:00:00.000Z")
  },
  {
    id: Math.random()
      .toString(36)
      .substr(2, 9),
    role: 2,
    location: 0,
    body: "Please wear closed in shoes",
    date: moment("2019-12-09T01:00:00.000Z")
  }
];
