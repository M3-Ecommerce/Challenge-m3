"use strict";
import { getProducts } from "./API";
import { renderProducts, refreshProducts, shoppingCart } from "./products";
import {
  renderFilters,
  orderByPrice,
  orderByDate,
  applyPagination,
  applyFilters,
} from "./filters";
import { openNav, closeNav } from "./navigation";
import { isMobile, createFilterToggles } from "./utils";

const loadMoreButton = document.getElementById("load-more");
const mobileColorFilterNode = document.getElementById("color-mobile");
const mobileSizeFilterNode = document.getElementById("size-mobile");
const mobilePriceRangeFilterNode =
  document.getElementById("price-range-mobile");
const colorFilterNode = document.getElementById("color");
const sizeFilterNode = document.getElementById("size");
const priceRangeFilterNode = document.getElementById("price-range");
const filterButtonNode = document.getElementById("filter");
const orderButtonNode = document.getElementById("order");
const closeSidePanelbutton = document.getElementById("close-side-panel");
const orderRecentsNodes = document.getElementsByClassName("recents");
const orderPriceAscNodes = document.getElementsByClassName("asc-price");
const orderPriceDescNodes = document.getElementsByClassName("desc-price");
const badge = document.getElementById("cart-badge");
const cartButton = document.getElementById("cart");
const closeCartButton = document.getElementById("close-cart");
const cartPanel = document.getElementById("cart-panel");
const total = document.getElementById("total");
const shoppingCartProducts = document.getElementById("shopping-cart-products");
const applyFiltersButton = document.getElementById("apply-filters");
const clearFiltersButton = document.getElementById("clear-filters");
const filterActionsNode = document.getElementById("filter-actions");
const mobileFilterContainer = document.getElementById("filter-container");
const mobileOrderContainer = document.getElementById("order-container");

const url = "http://localhost:5000/products";

let allProducts = [];
let filters = {
  color: undefined,
  size: undefined,
  priceRange: undefined,
};
let isFilterOpen = {
  color: false,
  size: false,
  "price-range": false,
};
let page = 1;
let shop = undefined;

/**
 * =================================================================
 * Initialize with api call
 * =================================================================
 */

getProducts(url).then((products) => {
  allProducts = products;
  shop = shoppingCart(badge, shoppingCartProducts, total, allProducts);
  renderProducts(allProducts, "products", shop);
  renderFilters(allProducts);
  renderFilters(allProducts, true);
  createFilterToggles(isFilterOpen);
});

const resetFilters = () => {
  page = 1;
  refreshProducts(allProducts, "products", page, shop);
  filters = {
    color: undefined,
    size: undefined,
    priceRange: undefined,
  };
  mobileColorFilterNode.reset();
  mobileSizeFilterNode.reset();
  mobilePriceRangeFilterNode.reset();
  colorFilterNode.reset();
  sizeFilterNode.reset();
  priceRangeFilterNode.reset();
  loadMoreButton.className = "btn btn-primary col-6 col-md-5 col-lg-4 col-xl-3";
};

/**
 * =================================================================
 * Make reactive with event listeners
 * =================================================================
 */

mobileColorFilterNode.addEventListener("change", (e) => {
  filters.color = e.target.value;
});

mobileSizeFilterNode.addEventListener("change", (e) => {
  filters.size = e.target.value;
});

mobilePriceRangeFilterNode.addEventListener("change", (e) => {
  filters.priceRange = e.target.value;
});

applyFiltersButton.addEventListener("click", (e) => {
  refreshProducts(applyFilters(allProducts, filters), "products", page, shop);
  closeNav();
});

clearFiltersButton.addEventListener("click", () => {
  closeNav();
  resetFilters();
});

colorFilterNode.addEventListener("change", (e) => {
  filters.color = e.target.value;
  refreshProducts(applyFilters(allProducts, filters), "products", page, shop);
});

sizeFilterNode.addEventListener("change", (e) => {
  filters.size = e.target.value;
  refreshProducts(applyFilters(allProducts, filters), "products", page, shop);
});

priceRangeFilterNode.addEventListener("change", (e) => {
  filters.priceRange = e.target.value;
  refreshProducts(applyFilters(allProducts, filters), "products", page, shop);
});
filterButtonNode.addEventListener("click", () => {
  mobileFilterContainer.className = "show";
  mobileOrderContainer.className = "hide";
  filterActionsNode.className = "show";
  openNav("Filtrar");
});

orderButtonNode.addEventListener("click", () => {
  mobileFilterContainer.className = "hide";
  mobileOrderContainer.className = "show";
  filterActionsNode.className = "hide";
  openNav("Ordenar");
});

closeSidePanelbutton.addEventListener("click", () => closeNav());

for (const node of orderRecentsNodes) {
  node.addEventListener("click", () => {
    resetFilters();
    refreshProducts(orderByDate(allProducts, "newest"), "products", page, shop);
  });
}

for (const node of orderPriceAscNodes) {
  node.addEventListener("click", () => {
    resetFilters();
    refreshProducts(orderByPrice(allProducts, "asc"), "products", page, shop);
  });
}

for (const node of orderPriceDescNodes) {
  node.addEventListener("click", () => {
    resetFilters();
    refreshProducts(orderByPrice(allProducts, "desc"), "products", page, shop);
  });
}

loadMoreButton.addEventListener("click", () => {
  page += 1;
  refreshProducts(
    applyPagination(applyFilters(allProducts, filters), page, loadMoreButton),
    "products",
    page,
    shop
  );
});

cartButton.addEventListener("click", () => openCart());

closeCartButton.addEventListener("click", () => closeCart());
const closeCart = () => {
  cartPanel.style.width = "0";
};
const openCart = () => {
  if (isMobile()) {
    cartPanel.style.width = "100vw";
  } else {
    cartPanel.style.width = "30vw";
  }
};
