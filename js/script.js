// Togle Class Active Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};