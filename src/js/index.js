console.log("Dev m3");

import { fetchApi } from "./utils";
import "./order";
import "./filters";
import "./shoppingCart";
import generateProducts from "./product";
import { loadCart } from "./shoppingCart";

window.onload = function () {
  const cart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (!cart) {
    localStorage.setItem("shopping-cart", "[]");
  } else {
    loadCart();
  }
  fetchApi().then((products) => generateProducts(products));
};
