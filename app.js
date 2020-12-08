const hamburger = document.getElementById('hamburger'); // targets the hamburger icon
const navUL = document.getElementById('nav-ul'); // targets the nav list

hamburger.addEventListener('click', () => { // listens for clicking of hamburger
    navUL.classList.toggle('show'); //adds show class to .nav-ul
});