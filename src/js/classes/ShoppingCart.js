class ShoppingCart {
  constructor() {
    this.cart = [];
    this.counter = 0;
    this.$cartContainer = document.getElementById("cartContainer");
    this.$productCounter = document.getElementById("productCounter");
    this.$totalProducts = document.getElementById("totalProducts");
    this.$totalPrice = document.getElementById("totalPrice");
  }

  addProductToCart(productElement) {
    const newProduct = this.getProperties(productElement);
    this.cart = [...this.cart, newProduct];

    this.renderCart();
    this.incrementCounter();
    this.getTotalProductsPrice();
  }

  getProperties(productElement) {
    const newProduct = {
      id: productElement.id,
      name: productElement.querySelector(".product__name").textContent,
      price: Number(
        productElement
          .querySelector(".product__price")
          .textContent.substring(2)
          .trim()
      ),
    };

    return newProduct;
  }

  productCartTemplate({ id, name, price }) {
    const $productCartTemplate = document.createElement("div");

    $productCartTemplate.innerHTML = `
    <div class="cart-product" id=${id}>
   
      <h3 class="cart-product__name">${name}</h3>

      <span class="cart-product__price">${price}</span>
    </div>  
    `;

    return $productCartTemplate.firstElementChild;
  }

  renderCart() {
    const $fragment = document.createDocumentFragment();

    this.$cartContainer.innerHTML = "";

    this.cart.forEach((product) => {
      const $productCartTemplate = this.productCartTemplate(product);
      $fragment.appendChild($productCartTemplate);
    });

    this.$cartContainer.appendChild($fragment);
  }

  getTotalProductsPrice() {
    const totalProductsPrice = this.cart.reduce((acumulator, { price }) => {
      return acumulator + price;
    }, 0);

    this.$totalPrice.textContent = totalProductsPrice;
  }

  incrementCounter() {
    this.counter = this.counter + 1;
    this.$productCounter.textContent = this.counter;
    this.$totalProducts.textContent = this.counter;
  }
}

export default ShoppingCart;
