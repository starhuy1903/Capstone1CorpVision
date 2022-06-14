var btnLight = document.getElementById("btnLight");
var btnDark = document.getElementById("btnDark");

btnLight.onclick = function () {
  if (
    btnLight.classList.contains("display") === true &&
    btnDark.classList.contains("display") === false
  ) {
    btnLight.classList.remove("display");
    btnDark.classList.add("display");
  }
};

btnDark.onclick = function () {
  if (
    btnDark.classList.contains("display") === true &&
    btnLight.classList.contains("display") === false
  ) {
    btnDark.classList.remove("display");
    btnLight.classList.add("display");
  }
};

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
      $("#header").addClass("fixed");
  } else {
      $("#header").removeClass("fixed");
  }
});
