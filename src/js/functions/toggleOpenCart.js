const toggleOpenCart = (e, shoppingCart) => {
  const isCartIcon = e.target.parentElement;

  if (isCartIcon && shoppingCart.cart.length !== 0) {
    const $modalCart = document.getElementById("modalCart");
    $modalCart.classList.toggle("open");
  }
};

export default toggleOpenCart;
