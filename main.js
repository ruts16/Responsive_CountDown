// Set the target end date for the countdown timer
const endDate = "21 November 2026 10:00 PM";

// Display the target end date on the page
document.getElementById("end-date").innerText = endDate;

// Get references to individual time value elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Function to update the countdown timer
function updateCountdown() {
    // Parse the target end date as a Date object
    const end = new Date(endDate);

    // Get the current date and time
    const now = new Date();

    // Calculate the difference in seconds between the end date and the current time
    const diff = (end - now) / 1000;

    // If the countdown has finished (difference is negative), stop the function
    if (diff < 0) {
        // Optionally, display a message when the countdown is over
        document.querySelector(".overlay").innerHTML = `
            <h1 class="title">🎉 Countdown Complete! 🎉</h1>
            <p class="subtitle">Thank you for waiting. Stay tuned for the launch!</p>`;
        return;
    }

    // Calculate and display the remaining time
    daysEl.textContent = Math.floor(diff / 3600 / 24); // Days
    hoursEl.textContent = Math.floor((diff / 3600) % 24); // Hours
    minutesEl.textContent = Math.floor((diff / 60) % 60); // Minutes
    secondsEl.textContent = Math.floor(diff % 60); // Seconds
}

// Initial call to display the countdown immediately
updateCountdown();

// Update the countdown every second using setInterval
setInterval(updateCountdown, 1000);
