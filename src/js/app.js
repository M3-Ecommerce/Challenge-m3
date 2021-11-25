import { ProductList, ShoppingCart } from "./classes";

import {
  setSelectState,
  accordionListenerByScreenSize,
  filterSelectActions,
  buttonSizeActions,
  addProductToCart,
  toggleOpenCart,
  showMoreProducts,
} from "./functions";

const productList = new ProductList();
const shoppingCart = new ShoppingCart();

const $filterSelect = document.getElementById("filterSelect");
const $sizeFilter = document.getElementById("sizeFilter");
const $btnShowMore = document.getElementById("btnShowMore");
const $cart = document.getElementById("cart");
const $productListContent = document.getElementById("productListContent");

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

  $cart.addEventListener("click", (e) => {
    toggleOpenCart(e, shoppingCart);
  });

  $productListContent.addEventListener("click", (e) => {
    addProductToCart(e, shoppingCart);
  });

  $btnShowMore.addEventListener("click", showMoreProducts);
};

export default runApp;
