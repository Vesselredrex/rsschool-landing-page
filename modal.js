const modalMenuGrid = document.getElementById("menu-grid");

const modalOverlay = document.getElementById("modal-overlay");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalPrice = document.getElementById("modal-price");
const closeBtn = document.getElementById("modal-close-btn");

const sizeButtons = document.querySelectorAll('[data-type="size"]');
const additiveButtons = document.querySelectorAll('[data-type="additive"]');

let basePrice = 0;
let sizePrice = 0;
let additivePrice = 0;

function updatePrice() {
  const total = basePrice + sizePrice + additivePrice;

  modalPrice.textContent = `$${total.toFixed(2)}`;
}

function resetOptions() {
  sizePrice = 0;
  additivePrice = 0;

  sizeButtons.forEach((button) => {
    button.classList.remove("active");
  });

  additiveButtons.forEach((button) => {
    button.classList.remove("active");
  });

  sizeButtons[0].classList.add("active");
}

function openModal(card) {
  const cardImage = card.querySelector("img");
  const cardTitle = card.querySelector("h3");
  const cardDescription = card.querySelector(".card-content p");
  const cardPrice = card.querySelector(".price");

  modalImage.src = cardImage.src;
  modalImage.alt = cardImage.alt;

  modalTitle.textContent = cardTitle.textContent;
  modalDescription.textContent = cardDescription.textContent;

  basePrice = Number(cardPrice.textContent.replace("$", ""));

  resetOptions();
  updatePrice();

  modalOverlay.classList.add("open");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.classList.remove("modal-open");
}

modalMenuGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".menu-card");

  if (!card) {
    return;
  }

  openModal(card);
});

sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sizeButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    sizePrice = Number(button.dataset.price);

    updatePrice();
  });
});

additiveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    additiveButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    additivePrice = Number(button.dataset.price);

    updatePrice();
  });
});

closeBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalOverlay.classList.contains("open")) {
    closeModal();
  }
});
