const hamburgerIcon = document.querySelector('#hamburger-icon');
const hamburgerContainer = document.querySelector('.hamburger-container');
let hamburgerOn = 0;

// add event listener to toggle hamburger container on or off

hamburgerIcon.addEventListener('click', (e) => {
    hamburgerContainer.classList.toggle('show');
    hamburgerContainer.classList.length == 2 ? e.target.src = 'images/icon-close.svg' : e.target.src = 'images/icon-hamburger.svg';
})
