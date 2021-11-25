import { ProductList, ShoppingCart } from "./classes";

import runEvents from "./functions/runEvents";

const runApp = () => {
  const productList = new ProductList();
  const shoppingCart = new ShoppingCart();

  runEvents(productList, shoppingCart);
};

export default runApp;
