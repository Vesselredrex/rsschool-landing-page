const coffees = [
  {
    image: "ice-coffee.png",
    title: "S'mores Frappuccino",
    description:
      "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
    price: "$5.50",
  },

  {
    image: "coffee-slider-2.png",
    title: "Caramel Macchiato",
    description:
      "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
    price: "$5.00",
  },

  {
    image: "coffee-slider-3.png",
    title: "Ice coffee",
    description:
      "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
    price: "$4.50",
  },
];

let currentSlide = 0;

const card = document.querySelector(".coffee-card");

const image = document.querySelector(".coffee-slide-image");
const title = document.querySelector(".coffee-slide-title");
const description = document.querySelector(".coffee-slide-description");
const price = document.querySelector(".coffee-slide-price");

const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");

const paginationItems = document.querySelectorAll(".pagination-item");

function showSlide(index) {
  card.classList.add("changing");

  setTimeout(() => {
    image.src = coffees[index].image;
    image.alt = coffees[index].title;

    title.textContent = coffees[index].title;
    description.textContent = coffees[index].description;
    price.textContent = coffees[index].price;

    paginationItems.forEach((item) => {
      item.classList.remove("active");
    });

    paginationItems[index].classList.add("active");

    card.classList.remove("changing");
  }, 200);
}

nextButton.addEventListener("click", () => {
  currentSlide++;

  if (currentSlide === coffees.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
});

prevButton.addEventListener("click", () => {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = coffees.length - 1;
  }

  showSlide(currentSlide);
});
