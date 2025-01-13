// script.js
document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggle = document.getElementById("dropdownToggle");
    const dropdownMenu = document.getElementById("dropdownMenu");

    // Toggle the dropdown menu on click
    dropdownToggle.addEventListener("click", () => {
        dropdownMenu.classList.toggle("hidden");
    });

    // Optional: Close the dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add("hidden");
        }
    });
});
