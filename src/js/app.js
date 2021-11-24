import { ProductList } from "./classes";

import { filterSelectActions, setSelectState } from "./functions";

const productList = new ProductList();

const $filterSelect = document.getElementById("filterSelect");

const runApp = () => {
  window.addEventListener("resize", setSelectState);

  window.addEventListener("DOMContentLoaded", () => {
    setSelectState();
    productList.loadProducts();
  });

  $filterSelect.addEventListener("change", (e) => {
    filterSelectActions(e, productList.productList);
  });
};

export default runApp;
