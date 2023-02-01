// Menu Btns
const hamburgerBtn = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('.close-btn');

// Navigation Menu
const navMenu = document.querySelector('.nav-menu');
const navOverlay = document.querySelector('.nav-overlay');

// Opening Sidebar Menu
function navOpen() {
  navMenu.classList.add('nav-open');
}

// Closing Sidebar Menu
function closeMenu() {
  navMenu.classList.remove('nav-open');
}

// Event Listeners
hamburgerBtn.addEventListener('click', navOpen);
closeBtn.addEventListener('click', closeMenu);
navOverlay.addEventListener('click', closeMenu);
