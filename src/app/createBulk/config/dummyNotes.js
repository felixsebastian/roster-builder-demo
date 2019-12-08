import moment from "moment";

let result = [];

let bodies = [
  "St patricks day",
  "Christmas day",
  "Easter",
  "Melbourne cup day",
  "Remember your shoes",
  "Remember your hat",
  "Please dress appropriately",
  "Don't be late!",
  "Going to be busy!"
];

for (let i = 0; i < 4; i++) {
  let date = moment();
  date.add(
    Math.random() > 0.3
      ? Math.floor(Math.random() * 12) + 8
      : Math.floor(Math.random() * 4) + 1,
    "days"
  );

  result.push({
    id: Math.random()
      .toString(36)
      .substr(2, 9),
    role: Math.random() > 0.2 ? null : Math.floor(Math.random() * 7),
    location: Math.random() > 0.2 ? null : Math.floor(Math.random() * 5),
    date,
    body: bodies[Math.floor(Math.random() * bodies.length)]
  });
}

export default result;
