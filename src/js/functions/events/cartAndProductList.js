import toggleOpenCart from "../others/toggleOpenCart";
import addProductToCart from "../product/addProductToCart";

const cartAndProductList = (shoppingCart) => {
  const $cart = document.getElementById("cart");
  const $productListContent = document.getElementById("productListContent");

  $cart.addEventListener("click", (e) => {
    toggleOpenCart(e, shoppingCart);
  });

  $productListContent.addEventListener("click", (e) => {
    addProductToCart(e, shoppingCart);
  });
};

export default cartAndProductList;
