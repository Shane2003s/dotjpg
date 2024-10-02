// Simulating a command or a product check
var hasProducts = true; // Change this to true to display "Hello World"

if (!hasProducts) {
  document.getElementById("no-signal").style.display = "block";
} else {
  document.getElementById("hello-world").style.display = "block";
}

// JavaScript to handle the button click
document.getElementById("hello-world").addEventListener("click", function () {
  // Add slide-out class to body to trigger the animation
  document.body.classList.add("slide-out");

  // After the animation, redirect to the next page
  setTimeout(function () {
    window.location.href = "music.html"; // Replace with your next page URL
  }, 1000); // Matches the duration of the slide-out animation (1 second)
});
