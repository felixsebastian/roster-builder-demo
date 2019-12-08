import moment from "moment";

let result = [];

for (let i = 0; i < 80; i++) {
  let date = moment();

  date.add(
    Math.random() > 0.3
      ? Math.floor(Math.random() * 12) + 8
      : Math.floor(Math.random() * 4) + 1,
    "days"
  );

  let startHours = Math.floor(Math.random() * 16) + 4;

  result.push({
    id: Math.random()
      .toString(36)
      .substr(2, 9),
    role: Math.floor(Math.random() * 7),
    location: Math.floor(Math.random() * 5),
    staffMember: Math.floor(Math.random() * 10),
    date,
    startTime: {
      hours: startHours,
      minutes: Math.floor(Math.random() * 5) + "0",
      pm: true
    },
    endTime: {
      hours: startHours + Math.floor(Math.random() * 8),
      minutes: Math.floor(Math.random() * 5) + "0",
      pm: true
    }
  });
}

export default result;
