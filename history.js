// Set the countdown duration (e.g., 1 hour, 30 minutes, and 15 seconds)
// Automatically detect user's time zone
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function updateTime() {
  const now = new Date();

  const options = {
    timeZone: timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3, // Show milliseconds
    hour12: false, // Set to true for 12-hour format
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const parts = formatter.formatToParts(now);

  const hours = parts.find((part) => part.type === "hour").value;
  const minutes = parts.find((part) => part.type === "minute").value;
  const seconds = parts.find((part) => part.type === "second").value;
  const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

  const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;
  document.getElementById("timer").textContent = timeString;
}

setInterval(updateTime, 1); // Update the time every millisecond
