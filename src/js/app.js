import { ProductList } from "./classes";

import {
  setSelectState,
  accordionListenerByScreenSize,
  filterSelectActions,
  buttonSizeActions,
  filterProductsActions,
  showMoreProducts,
} from "./functions";

const productList = new ProductList();

const $filterSelect = document.getElementById("filterSelect");
const $sizeFilter = document.getElementById("sizeFilter");
const $accordionButtons = document.getElementById("accordionButtons");
const $btnShowMore = document.getElementById("btnShowMore");

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

  $btnShowMore.addEventListener("click", showMoreProducts);
};

export default runApp;
