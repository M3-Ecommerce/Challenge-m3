const addProductToCart = (e, shoppingCart) => {
  const isProductButton = e.target.type === "button";

  if (isProductButton) {
    const productElement = e.target.parentElement;
    shoppingCart.addProductToCart(productElement);
  }
};

export default addProductToCart;
