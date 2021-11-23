import ProductList from "./classes/ProductList";

import setSelectState from "./functions/setSelectState";

const productList = new ProductList();

const runApp = () => {
  window.addEventListener("resize", setSelectState);

  window.addEventListener("DOMContentLoaded", () => {
    setSelectState();
    productList.loadProducts();
  });
};

export default runApp;
