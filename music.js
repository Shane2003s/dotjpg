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

// youtube video pop-up
const playButton = document.getElementById("playVideoButton");
const videoSection = document.getElementById("video-section");
const backButton = document.getElementById("backButton");
const videoPlayer = document.getElementById("videoPlayer");

// Show video section and play YouTube video
playButton.addEventListener("click", function () {
  videoSection.style.display = "flex";
  videoPlayer.src = "https://youtu.be/B9synWjqBn8?si=hfNEl9fT2LYJhobV"; // Fein travis scott
});

// Hide video section and stop video
backButton.addEventListener("click", function () {
  videoSection.style.display = "none";
  videoPlayer.src = ""; // Stop the video
});
// folder menu-bar start
document.getElementById("folderIcon").addEventListener("click", function () {
  const menu = document.getElementById("menuItems");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
// menu category flexable active
const menuLinks = document.querySelectorAll(".menu-items a");

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    menuLinks.forEach((link) => link.classList.remove("active"));
    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});
