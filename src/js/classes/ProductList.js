class ProductList {
  constructor() {
    this.apiUrl = "http://localhost:5000/products";
    this.productList = [];
    this.$productListContent = document.getElementById("productListContent");
  }

  async getProducts() {
    try {
      const response = await fetch(this.apiUrl);

      if (!response.ok) {
        const message = `Status: ${resp.status} - StatusText: ${resp.statusText}`;
        throw new Error(message);
      }

      return await response.json();
    } catch (err) {
      return err;
    }
  }

  loadProducts() {
    this.getProducts()
      .then((products) => {
        this.productList = [...products];
        this.renderProducts(this.productList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  productTemplate({ id, name, image, price, parcelamento }) {
    const $productTemplate = document.createElement("div");

    $productTemplate.innerHTML = `
      <article class="product" id=${id}>
        <img
          src=${image}
          class="product__image"
          alt=${name}
          title=${name}
        />

        <h2 class="product__name">${name}</h2>

        <div class="product__details">
          <span class="product__price">R$ ${price}</span>
          <span class="product__parcelamento">até ${parcelamento[0]}x de R$${parcelamento[1]}</span>
        </div>

        <button class="button" type="button">Comprar</button>
      </article>
    `;

    return $productTemplate.firstElementChild;
  }

  renderProducts(products) {
    const $fragment = document.createDocumentFragment();

    this.$productListContent.innerHTML = "";

    products.forEach((product) => {
      const $productTemplate = this.productTemplate(product);
      $fragment.appendChild($productTemplate);
    });

    this.$productListContent.appendChild($fragment);
  }
}

export default ProductList;
