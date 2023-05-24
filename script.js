//SELECTS THE HAMBURGER IN THE HTML
const hamburger = document.querySelector('.hamburger');
 //SELECTS THE OVERLAY IN THE HTML
const overlay = document.querySelector('.overlay');

//EVENT LISTENER WAITS FOR EVENT(CLICK) TO HAPPEN, THEN DISPLAYS THE OVERLAY
hamburger.addEventListener('click', function () {
    overlay.style.display = 'block';
});

//HIDES THE OVERLAY WHEN USER CLICKS ON IT(THE OVERLAY)
overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
});