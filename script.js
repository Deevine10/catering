const menubtn = document.querySelector(".menu_btn");
const navbar = document.querySelector(".navbar");
const menuItem = document.querySelector(".fa-bars");

console.log(menubtn, navbar, menuItem);

menuItem.addEventListener("click", () => {
  menuItem.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
});

const btn = document.querySelector(".fa-cloud-moon");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  body.classList.toggle("darktheme");
});
