export default function hourSum(first, second) {
  const firstSeconds = timeToSeconds(first);
  const secondSeconds = timeToSeconds(second);
  let sumSeconds = firstSeconds + secondSeconds;

  const sumHours = Math.floor(sumSeconds / 3600);
  sumSeconds %= 3600;

  const sumMinutes = Math.floor(sumSeconds / 60);
  sumSeconds %= 60;

  let result = `${sumHours}`;

  result += `:${(`0${sumMinutes}`).slice(-2)}`;

  if (sumSeconds) {
    result += `:${(`0${sumSeconds}`).slice(-2)}`;
  }

  return result;
}

function timeToSeconds(time) {
  if (typeof time !== "string") return 0;

  const [hours = "0", minutes = "0", seconds = "0"] = time.split(":");
  const result = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

  return Number.isNaN(result) ? 0 : result;
}

