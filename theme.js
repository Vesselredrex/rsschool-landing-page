const lightBtn = document.querySelector(".light-btn");
const darkBtn = document.querySelector(".dark-btn");

darkBtn.addEventListener("click", () => {
  document.body.classList.add("dark-theme");

  darkBtn.classList.add("theme-btn--active");
  lightBtn.classList.remove("theme-btn--active");
});

lightBtn.addEventListener("click", () => {
  document.body.classList.remove("dark-theme");

  lightBtn.classList.add("theme-btn--active");
  darkBtn.classList.remove("theme-btn--active");
});
