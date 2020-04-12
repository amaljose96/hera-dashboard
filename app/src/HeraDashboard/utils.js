export function getDurationText(duration) {
  if (duration < 1000) {
    return duration + "ms";
  } else if (duration < 60 * 1000) {
    return duration / 1000 + "s";
  }
}
export function printDateTime(date) {
  date = new Date(date);
  return (
    date.getFullYear() +
    "-" +
    date.getMonth() +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds() +
    ":" +
    date.getMilliseconds()
  );
}
