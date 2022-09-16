const menu = document.querySelector(".nav__mobile");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", toggle);
closeBtn.addEventListener("click", toggle);

function toggle() {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    menu.classList.add("hide");
    document.body.style.removeProperty("overflow");
  } else {
    menu.classList.add("show");
    menu.classList.remove("hide");
    document.body.style.overflow = "hidden";
  }
}
