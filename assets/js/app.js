var nav = document.getElementById("site-menu");
var header = document.getElementById("top");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 7000) {
    nav.classList.add("nav-fixed");
    header.classList.add("pt-scroll");
  } else {
    nav.classList.remove("fixed");
    header.classList.remove("pt-scroll");
  }
});

function navToggle() {
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("menu");

  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
}
