// Select the hamburger in the html
const hamburger = document.querySelector('.hamburger');
 // Select the overlay in the html
const overlay = document.querySelector('.overlay');

// Open the overlay when the hamburger is clicked (event listener)
hamburger.addEventListener('click', function () {
    overlay.style.display = 'block'; // Display the overlay
});

// Close the overlay when the user clicks on it (event listener)
overlay.addEventListener('click', function () {
    overlay.style.display = 'none'; // Hide the overlay
});