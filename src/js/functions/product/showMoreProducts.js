function showMoreProducts() {
  const hiddenProducts = Array.from(document.querySelectorAll(".product.hide"));

  hiddenProducts.forEach((product) => product.classList.remove("hide"));
  this.classList.add("delete");
}

export default showMoreProducts;
