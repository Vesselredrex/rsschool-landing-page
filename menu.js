const products = {
  coffee: [
    {
      name: "Irish coffee",
      description:
        "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      price: 7.0,
      image: "coffee-1 (1).png",
    },
    {
      name: "Kahlua coffee",
      description:
        "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
      price: 7.0,
      image: "coffee-2.png",
    },
    {
      name: "Honey raf",
      description: "Espresso with frothed milk, cream and aromatic honey",
      price: 5.5,
      image: "coffee-3 (1).png",
    },
    {
      name: "Ice cappuccino",
      description: "Cappuccino with soft thick foam in summer version with ice",
      price: 5.0,
      image: "coffee-4 (1).png",
    },
    {
      name: "Espresso",
      description: "Classic black coffee",
      price: 4.5,
      image: "coffee-5.png",
    },
    {
      name: "Latte",
      description:
        "Espresso coffee with the addition of steamed milk and dense milk foam",
      price: 5.5,
      image: "coffee-6.png",
    },
    {
      name: "Latte macchiato",
      description: "Espresso with frothed milk and chocolate",
      price: 5.5,
      image: "coffee-7.png",
    },
    {
      name: "Coffee with cognac",
      description: "Fragrant black coffee with cognac and whipped cream",
      price: 6.5,
      image: "coffee-8.png",
    },
  ],

  tea: [
    {
      name: "Moroccan",
      description:
        "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      price: 4.5,
      image: "tea-1.png",
    },
    {
      name: "Ginger",
      description: "Original black tea with fresh ginger, lemon and honey",
      price: 5.0,
      image: "tea-2.png",
    },
    {
      name: "Cranberry",
      description: "Invigorating black tea with cranberry and honey",
      price: 5.0,
      image: "tea-3.png",
    },
    {
      name: "Sea buckthorn",
      description:
        "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      price: 5.5,
      image: "tea-4.png",
    },
  ],

  dessert: [
    {
      name: "Marble cheesecake",
      description:
        "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      price: 3.5,
      image: "dessert-1.png",
    },
    {
      name: "Red velvet",
      description: "Layer cake with cream cheese frosting",
      price: 4.0,
      image: "dessert-2.png",
    },
    {
      name: "Cheesecakes",
      description:
        "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      price: 4.5,
      image: "dessert-3.png",
    },
    {
      name: "Creme brulee",
      description:
        "Delicate creamy dessert in a caramel basket with wild berries",
      price: 4.0,
      image: "dessert-4.png",
    },
    {
      name: "Pancakes",
      description: "Tender pancakes with strawberry jam and fresh strawberries",
      price: 4.5,
      image: "dessert-5.png",
    },
    {
      name: "Honey cake",
      description: "Classic honey cake with delicate custard",
      price: 4.5,
      image: "dessert-6.png",
    },
    {
      name: "Chocolate cake",
      description:
        "Cake with hot chocolate filling and nuts with dried apricots",
      price: 5.5,
      image: "dessert-7.png",
    },
    {
      name: "Black forest",
      description:
        "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      price: 6.5,
      image: "dessert-8.png",
    },
  ],
};

const menuGrid = document.getElementById("menu-grid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProducts(category) {
  menuGrid.innerHTML = "";

  products[category].forEach((product) => {
    const card = document.createElement("article");

    card.classList.add("menu-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">

      <div class="card-content">
        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <span class="price">
          $${product.price.toFixed(2)}
        </span>
      </div>
    `;

    menuGrid.append(card);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    filterButtons.forEach((item) => {
      item.classList.remove("filter-btn--active");
    });

    button.classList.add("filter-btn--active");

    renderProducts(category);
  });
});
