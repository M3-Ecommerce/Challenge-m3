import { isMobile, removeAllChildNodes, uniqueValues } from "./utils";

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

  colorNode.append(...generateRadioNodes(uniqueColors, "color"));

  sizeNode.append(...generateRadioNodes(uniqueSizes, "size", "button"));

  priceRangeNode.append(...generateRadioNodes(priceRanges, "parcelamento"));
};

const generateRadioNodes = (values, categoryName, type = undefined) => {
  const radioNodes = [];
  switch (type) {
    case "button":
      values.forEach((value) => {
        radioNodes.push(generateButtonInput(value, categoryName));
      });

      break;
    default:
      values.forEach((value) => {
        radioNodes.push(...generateRadioInput(value, categoryName));
      });
  }

  return radioNodes;
};

const generateRadioInput = (value, categoryName) => {
  const input = document.createElement("input");
  input.type = "radio";
  input.value = value;
  input.name = categoryName;

  const label = document.createElement("label");
  label.for = categoryName;
  if (categoryName === "parcelamento") {
    label.textContent = value.split("-")[1]
      ? `de R$${value.split("-")[0]} até R$${value.split("-")[1]}`
      : `a partir de R$${value.split("-")[0]}`;
  } else {
    label.textContent = value;
  }

  const br = document.createElement("br");

  return [input, label, br];
};

const generateButtonInput = (value, categoryName) => {
  const input = document.createElement("input");
  input.type = "radio";
  input.value = value;
  input.name = categoryName;

  const span = document.createElement("span");
  span.textContent = value;
  const div = document.createElement("div");
  div.className = "box-button";
  const label = document.createElement("label");
  div.appendChild(span);
  label.append(input, div);

  return label;
};
