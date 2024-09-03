const darkModeSwitch = document.getElementById("dark-mode-switch");
const nav = document.getElementById("navbar");

// select all links
const links = document.querySelectorAll("a");

// select all input elements
const input = document.querySelectorAll("input");
const messageBox = document.getElementById("message");

// select buttons
const button = document.getElementById("discover-mng-btn");
const emailBtn = document.getElementById("submitEmailBtn");

// toggle function acts like a switch??

darkModeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  nav.classList.toggle("dark-mode");

  // apply darkmode to each link
  links.forEach((link) => {
    link.classList.toggle("dark-mode");
  });

  // apply to input
  input.forEach((element) => {
    element.classList.toggle("dark-mode");
  });

  messageBox.classList.toggle("dark-mode");

  // apply darkmode to buttons
  button.classList.toggle("dark-mode");
  emailBtn.classList.toggle("dark-mode");
});

// added an event listener to open the link in new tab
// initially i had a link tag in the button but when i applied
// the dark mode function the styling was off

if (button) {
  button.addEventListener("click", () => {
    window.open("discovermongolia.html", "_blank");
  });
}

// --------------------------------------------------------------------------------

// IMAGE CAROUSEL

let imageIndex = 1;
showSlides(imageIndex);

const prevElement = document.getElementById("prev");
const nextElement = document.getElementById("next");

prevElement.addEventListener("click", () => slide(-1));
nextElement.addEventListener("click", () => slide(1));

function slide(index) {
  showSlides((imageIndex += index));
}

function showSlides(index) {
  // access slides
  let slides = document.getElementsByClassName("imageSlides");
  let displayInfo = document.getElementsByClassName("info");

  // loop carousel
  if (index > slides.length) {
    imageIndex = 1;
  }

  if (index < 1) {
    imageIndex = slides.length;
  }

  // when slide with index is diplayed all others must be hidden
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    displayInfo[i].style.display = "none";
  }

  // show slide with index in arg
  slides[imageIndex - 1].style.display = "block";

  // show para for that image when mouse hovers over image
  slides[imageIndex - 1].addEventListener("mouseover", () => {
    displayInfo[imageIndex - 1].style.display = "block";
    // slides[imageIndex - 1].style.opacity = "10%";
  });

  // hide when out
  slides[imageIndex - 1].addEventListener("mouseout", () => {
    displayInfo[imageIndex - 1].style.display = "none";
    slides[imageIndex - 1].style.opacity = "100%";
  });
}
