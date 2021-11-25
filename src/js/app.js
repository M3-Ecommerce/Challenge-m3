import { ProductList, ShoppingCart } from "./classes";

import {
  setSelectState,
  accordionListenerByScreenSize,
  filterSelectActions,
  buttonSizeActions,
  filterProductsActions,
  addProductToCart,
  toggleOpenCart,
  shoppingCartActions,
  showMoreProducts,
} from "./functions";

const productList = new ProductList();
const shoppingCart = new ShoppingCart();

const $filterSelect = document.getElementById("filterSelect");
const $sizeFilter = document.getElementById("sizeFilter");
const $accordionButtons = document.getElementById("accordionButtons");
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

  $accordionButtons.addEventListener("click", (e) => {
    filterProductsActions(e, productList.productList);
  });

  $cart.addEventListener("click", (e) => {
    toggleOpenCart(e, shoppingCart);
  });

  $productListContent.addEventListener("click", (e) => {
    addProductToCart(e, shoppingCart);
  });

  $btnShowMore.addEventListener("click", showMoreProducts);
};

export default runApp;
