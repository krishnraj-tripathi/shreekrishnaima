/* HAMBURGER MENU */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* AUTO SCALE HEADING (NO CUT, NO …) */
function fitHeading() {
  const el = document.getElementById("heroTitle");
  const parent = el.parentElement;

  let scale = 1;
  el.style.transform = "scale(1)";

  while (el.scrollWidth > parent.clientWidth && scale > 0.4) {
    scale -= 0.01;
    el.style.transform = `scale(${scale})`;
  }
}

window.addEventListener("load", fitHeading);
window.addEventListener("resize", fitHeading);
