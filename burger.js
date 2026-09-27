const burger = document.querySelector(".burger");
const list = document.querySelector(".nav-list");
const links = list.querySelectorAll("a");

function closeMenu() {
  burger.classList.remove("active");
  list.classList.remove("active");

  document.body.classList.remove("menu-open");

  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-label", "Open menu");
}

burger.addEventListener("click", () => {
  const isOpen = burger.classList.toggle("active");

  list.classList.toggle("active", isOpen);
  document.body.classList.toggle("menu-open", isOpen);

  burger.setAttribute("aria-expanded", isOpen);
  burger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 769) {
    closeMenu();
  }
});
