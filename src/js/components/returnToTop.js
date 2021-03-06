function trackScroll() {
  var scrolled = window.pageYOffset;
  var coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add("return-to-top-show");
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove("return-to-top-show");
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
}

var goTopBtn = document.querySelector(".return-to-top");

if (goTopBtn) {
  window.addEventListener("scroll", trackScroll);
  goTopBtn.addEventListener("click", backToTop);
}
