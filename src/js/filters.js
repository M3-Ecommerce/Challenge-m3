import { isMobile, uniqueValues } from "./utils";
import { generateRadioNodes } from "./generators";

export const orderByDate = (products, date = "newest") => {
  if (date.toLowerCase() === "newest")
    return products.sort(
      (productA, productB) => new Date(productB.date) - new Date(productA.date)
    );

  return products.sort((productA, productB) =>
    productA.price > productB.price ? 1 : -1
  );
};
export const orderByPrice = (products, price = "asc") => {
  if (price.toLowerCase() === "desc")
    return products.sort((productA, productB) =>
      productA.price < productB.price ? 1 : -1
    );
  return products.sort((productA, productB) =>
    productA.price > productB.price ? 1 : -1
  );
};

export const filterByColor = (products, color) => {
  return products.filter((product) => product.color === color);
};
export const filterBySize = (products, size) => {
  return products.filter((product) => product.size.includes(size));
};
export const filterByPriceRange = (products, values) => {
  const [from, to] = values.split("-");
  if (from && to) {
    return products.filter(
      (product) => product.price >= from && product.price <= to
    );
  }
  if (!to) {
    return products.filter((product) => product.price > from);
  }
};

export const applyPagination = (products, page = 1, loadMoreButton) => {
  const showResults = isMobile() ? 4 * page : 9 * page;
  if (showResults > products.length) {
    loadMoreButton.className += " hide";
  } else {
    loadMoreButton.className =
      "btn btn-primary col-6 col-md-5 col-lg-4 col-xl-3";
  }
  return products.slice(0, showResults);
};

export const applyFilters = (allProducts, filters) => {
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

export const renderFilters = (products, isMobile = false) => {
  const colorNode = document.getElementById(
    isMobile ? "color-mobile" : "color"
  );
  const sizeNode = document.getElementById(isMobile ? "size-mobile" : "size");
  const priceRangeNode = document.getElementById(
    isMobile ? "price-range-mobile" : "price-range"
  );

  const sizes = [];
  const colors = [];
  const priceRanges = ["0-50", "51-150", "151-300", "301-500", "500"];

  products.forEach((product) => {
    colors.push(product.color);
    sizes.push(...product.size);
  });

  const uniqueColors = colors.filter(uniqueValues);
  const uniqueSizes = sizes.filter(uniqueValues);

  colorNode.append(...showMore(generateRadioNodes(uniqueColors, "color")));

  sizeNode.append(...generateRadioNodes(uniqueSizes, "size", "button"));

  priceRangeNode.append(...generateRadioNodes(priceRanges, "parcelamento"));
};

const showMore = (nodes) => {
  const initial = nodes.slice(0, 15);
  const span = document.createElement("span");
  span.id = "more-filters";
  span.style.display = isMobile() ? "block" : "none";
  const button = document.createElement("div");
  button.textContent = "Ver todas as cores ";
  button.id = "show-more-filters";
  button.addEventListener("click", () => {
    button.style.display = "none";
    span.style.display = "block";
  });
  const icon = document.createElement("span");
  icon.className = "material-icons";
  icon.textContent = "expand_more";
  button.append(icon);
  span.append(...nodes.slice(15));

  return [...initial, button, span];
};
