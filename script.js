const darkModeSwitch = document.getElementById("dark-mode-switch");
const nav = document.getElementById("navbar");
// const z

// select all links
const links = document.querySelectorAll("a");

// select button
const button = document.getElementById("btn");

// toggle function as a method of the classList function manipulates
// the classes of an HTML elemenet

darkModeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  nav.classList.toggle("dark-mode");

  // apply darkmode to each link
  links.forEach((link) => {
    link.classList.toggle("dark-mode");
  });

  // apply darkmode to button
  button.classList.toggle("dark-mode");
});

// added an event listener to open the link in new tab
// initially i had a link tag in the button but when i applied
// the dark mode function the styling was off

button.addEventListener("click", () => {
  window.open("discovermongolia.html", "_blank");
});
