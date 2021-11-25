import { fetchApi, filterAndOrder } from "./utils";
import generateProducts from "./product";

const colorsList = document.getElementById("colors-filter");
const sizesList = document.getElementById("size-filter");
const pricesList = document.getElementById("price-filter");

colorsList.onload = generateColorsFilter();
sizesList.onload = generateSizeFilter();
pricesList.onload = generatePriceFilter();

//open modal filters
document.getElementById("btn-filter").onclick = function () {
  document.getElementById("filters").style.display = "block";
};
//close modal filters
document.getElementById("close-filter").onclick = function () {
  document.getElementById("filters").style.display = "none";
};

//accordion function
function openAccordion() {
  this.classList.toggle("active");

  const panel = this.nextElementSibling;
  if (panel.style.display === "flex" || panel.style.display === "grid") {
    panel.style.display = "none";
  } else {
    if (panel.id === "size-filter") {
      panel.style.display = "grid";
    } else {
      panel.style.display = "flex";
    }
  }
}

window.onresize = filterResponsive;
window.onload = filterResponsive();

function filterResponsive() {
  if (window.innerWidth < 800) {
    const acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", openAccordion);
    }
  } else if (window.innerWidth >= 800) {
    const acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
      acc[i].removeEventListener("click", openAccordion);

      const panel = acc[i].nextElementSibling;
      if (panel.id === "size-filter") {
        panel.style.display = "";
      } else {
        panel.style.display = "";
      }
      acc[i].className = "title-filter accordion";
    }
    document.getElementById("filters").style.display = "";
  }
}

function filter() {
  fetchApi().then((products) => {
    const filterProducts = filterAndOrder(products);

    generateProducts(filterProducts);
  });
}

function generateColorsFilter() {
  const COLORS = [
    "Ameralo",
    "Azul",
    "Branco",
    "Cinza",
    "Laranja",
    "Verde",
    "Vermelho",
    "Preto",
    "Rosa",
    "Vinho",
  ];

  COLORS.map((color) => {
    const listItem = document.createElement("li");
    const label = document.createElement("label");
    const text = document.createElement("span");
    text.textContent = color;
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "colors";
    input.value = color;
    input.onclick = filter;

    label.appendChild(input);
    label.appendChild(text);

    listItem.appendChild(label);

    colorsList.appendChild(listItem);
  });
}

function generateSizeFilter() {
  const SIZES = ["P", "M", "G", "GG", "U", "36", "38", "40", "44", "46"];

  SIZES.map((size) => {
    const listItem = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const labelText = document.createElement("label");
    labelText.textContent = size;
    labelText.htmlFor = size;
    input.type = "radio";
    input.name = "sizes";
    input.id = size;
    input.value = size;
    input.onclick = filter;

    label.appendChild(input);
    label.appendChild(labelText);

    listItem.appendChild(label);

    sizesList.appendChild(listItem);
  });
}

function generatePriceFilter() {
  const PRICES = [
    { name: "de R$0 até R$50", value: [0, 50] },
    { name: "de R$51 até R$150", value: [51, 150] },
    { name: "de R$151 até R$300", value: [151, 300] },
    { name: "de R$301 até R$500", value: [301, 500] },
    { name: "a partir de R$ 500", value: [500] },
  ];

  PRICES.map((price) => {
    const listItem = document.createElement("li");
    const label = document.createElement("label");
    const text = document.createElement("span");
    text.textContent = price.name;
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "prices";
    input.value = price.value;
    input.onclick = filter;

    label.appendChild(input);
    label.appendChild(text);

    listItem.appendChild(label);

    pricesList.appendChild(listItem);
  });
}
