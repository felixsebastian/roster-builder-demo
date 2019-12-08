export default time => {
  let result = "";
  result += ((time.hours - 1) % 12) + 1;
  result += ":";
  result += String(time.minutes).padStart(2, "0");
  result += time.hours < 11 ? "am" : "pm";
  return result;
};
