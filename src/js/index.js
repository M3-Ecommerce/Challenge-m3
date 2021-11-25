"use strict";
import { getProducts } from "./API";
import { renderProducts, refreshProducts, shoppingCart } from "./products";
import {
  renderFilters,
  orderByPrice,
  orderByDate,
  filterBySize,
  filterByColor,
  filterByPriceRange,
  applyPagination,
} from "./filters";
import { openNav, closeNav } from "./navigation";
const url = "http://localhost:3003/products";

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

const applyFiltersButton = document.getElementById("apply-filters");
const clearFiltersButton = document.getElementById("clear-filters");
const filterActionsNode = document.getElementById("filter-actions");
const mobileFilterContainer = document.getElementById("filter-container");
const mobileOrderContainer = document.getElementById("order-container");

getProducts(url).then((products) => {
  allProducts = products;
  const shop = shoppingCart(badge, allProducts);
  renderProducts(applyPagination(products, page, loadMoreButton), shop);
  renderFilters(products);
  renderFilters(products, true);
});

const applyFilters = (allProducts, filters) => {
  let filteredProducts = allProducts;
  if (filters.color) {
    filteredProducts = filterByColor(filteredProducts, filters.color);
  }
  if (filters.size) {
    filteredProducts = filterBySize(filteredProducts, filters.size);
  }
  if (filters.priceRange) {
    filteredProducts = filterByPriceRange(filteredProducts, filters.priceRange);
  }
  return filteredProducts;
};
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
  refreshProducts(applyFilters(allProducts, filters), page, shop);
  closeNav();
});

const resetFilters = () => {
  page = 1;
  refreshProducts(allProducts, page, shop);
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

clearFiltersButton.addEventListener("click", () => {
  closeNav();
  resetFilters();
});

colorFilterNode.addEventListener("change", (e) => {
  filters.color = e.target.value;
  refreshProducts(applyFilters(allProducts, filters), page, shop);
});

sizeFilterNode.addEventListener("change", (e) => {
  filters.size = e.target.value;
  refreshProducts(applyFilters(allProducts, filters), page, shop);
});

priceRangeFilterNode.addEventListener("change", (e) => {
  filters.priceRange = e.target.value;
  refreshProducts(applyFilters(allProducts, filters), page, shop);
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
    refreshProducts(orderByDate(allProducts, "newest"), page, shop);
  });
}

for (const node of orderPriceAscNodes) {
  node.addEventListener("click", () => {
    resetFilters();
    refreshProducts(orderByPrice(allProducts, "asc")), page, shop;
  });
}

for (const node of orderPriceDescNodes) {
  node.addEventListener("click", () => {
    resetFilters();
    refreshProducts(orderByPrice(allProducts, "desc"), page, shop);
  });
}

function closeFilter(filter, isFilterOpen) {
  document.getElementById(`${filter}-filter-dropdown`).style.height = "0";
  isFilterOpen[filter] = false;
}
function openFilter(filter, isFilterOpen) {
  document.getElementById(`${filter}-filter-dropdown`).style.height = "auto";
  isFilterOpen[filter] = true;
}

const createFilterToggles = (isFilterOpen) => {
  for (const filterName in isFilterOpen) {
    document
      .getElementById(`${filterName}-filter`)
      .addEventListener("click", () =>
        isFilterOpen[`${filterName}`]
          ? closeFilter(`${filterName}`, isFilterOpen)
          : openFilter(`${filterName}`, isFilterOpen)
      );
  }
};

createFilterToggles(isFilterOpen);

loadMoreButton.addEventListener("click", () => {
  page += 1;
  refreshProducts(
    applyPagination(allProducts, page, loadMoreButton),
    page,
    shop
  );
});

const badge = document.getElementById("cart-badge");
