import { ProductList } from "./classes";

import {
  setSelectState,
  accordionListenerByScreenSize,
  filterSelectActions,
  buttonSizeActions,
  filterProductsActions,
} from "./functions";

const productList = new ProductList();

const $filterSelect = document.getElementById("filterSelect");
const $sizeFilter = document.getElementById("sizeFilter");
const $accordionButtons = document.getElementById("accordionButtons");

const runApp = () => {
  window.addEventListener("resize", () => {
    setSelectState();
    accordionListenerByScreenSize(productList);
  });

  window.addEventListener("DOMContentLoaded", () => {
    setSelectState();
    accordionListenerByScreenSize(productList);
    productList.loadProducts();
  });

  $filterSelect.addEventListener("change", (e) => {
    filterSelectActions(e, productList.productList);
  });

  $sizeFilter.addEventListener("click", buttonSizeActions);

  $accordionButtons.addEventListener("click", (e) => {
    filterProductsActions(e, productList.productList);
  });
};

export default runApp;
