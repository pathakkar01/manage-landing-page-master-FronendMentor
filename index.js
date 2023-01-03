let hamburger = document.querySelector("#menu-btn");
const nav = document.getElementById("menu");

console.log(hamburger);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
