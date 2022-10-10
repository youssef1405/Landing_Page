/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const createNavbar = () => {
  for (let i = 0; i < sections.length; i++) {
    const listItem = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.classList.add('menu__link');
    menuLink.textContent = sections[i].getAttribute('data-nav');
    listItem.appendChild(menuLink);
    navbarList.appendChild(listItem);
  }
};

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
const scrollToSection = () => {
  const menuLinks = document.querySelectorAll('.menu__link');
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
      document
        .getElementById(`section${i + 1}`)
        .scrollIntoView({ behavior: 'smooth' });
    });
  }
};

// Add an active state to navigation menu items when section in viewport

// Set sections as active

document.addEventListener('scroll', () => {
  for (let i = 0; i < sections.length; i++) {
    if (
      sections[i].getBoundingClientRect().top < 150 &&
      sections[i].getBoundingClientRect().bottom > 150
    ) {
      sections[i].classList.add('your-active-class');
      document
        .querySelectorAll('.menu__link')
        [i].classList.add('active-menu-link');
    } else {
      sections[i].classList.remove('your-active-class');
      document
        .querySelectorAll('.menu__link')
        [i].classList.remove('active-menu-link');
    }
  }
});

createNavbar();
scrollToSection();
