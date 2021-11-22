import ProductList from "./classes/ProductList";

const productList = new ProductList();

const runApp = () => {
  window.addEventListener("DOMContentLoaded", productList.loadProducts());
};

export default runApp;
