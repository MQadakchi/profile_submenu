const image = document.querySelector("img");
const menu = document.querySelector(".menu");

image.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});
