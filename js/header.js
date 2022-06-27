// Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
  );
};

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    $("#header").addClass("fixed");
  } else {
    $("#header").removeClass("fixed");
  }
});

// Open menu pop-up
const menuToggleIcon = selectElement("#menu-toggle-icon");

const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.toggle("activated");
  menuToggleIcon.classList.toggle("activated");
};

menuToggleIcon.addEventListener("click", toggleMenu);

// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

// Check to see if there is a theme preference in local Storage, if so add the light theme to the body
if (currentTheme) {
  body.classList.add("light-theme");
}

themeToggleBtn.addEventListener("click", function () {
  // Add light theme on click
  body.classList.toggle("light-theme");

  // If the body has the class of light theme then add it to local Storage, if not remove it
  if (body.classList.contains("light-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});
