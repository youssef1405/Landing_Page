/**
 * Global Variables
 */

const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * this function create the navigation menu dynamically
 */
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

/**
 * this function Scroll to section on link click
 */
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

/**
 * the block of code below is responsible for activating and deactivating
 * the sections and the nav items while the user is scrolling the page.
 */
document.addEventListener('scroll', () => {
  for (let i = 0; i < sections.length; i++) {
    if (
      sections[i].getBoundingClientRect().top < 150 &&
      sections[i].getBoundingClientRect().bottom > 150
    ) {
      // Set sections as active
      sections[i].classList.add('your-active-class');

      // Add an active state to navigation menu items when section in viewport
      document
        .querySelectorAll('.menu__link')
        [i].classList.add('active-menu-link');
    } else {
      // set the other sections inactive
      sections[i].classList.remove('your-active-class');

      // set the other navigation items inactive
      document
        .querySelectorAll('.menu__link')
        [i].classList.remove('active-menu-link');
    }
  }
});

// Build menu
createNavbar();
scrollToSection();
