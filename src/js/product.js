import { addToCart } from "./shoppingCart";

const productDiv = document.getElementById("products");

function addZeros(x) {
  return Number.parseFloat(x).toFixed(2);
}

function generateProduct(products) {
  const ul = document.createElement("ul");
  productDiv.innerHTML = "";
  ul.className = "product-list";

  products.forEach((product) => {
    console.log(product);
    if (product) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = product.image;

      const name = document.createElement("p");
      name.innerHTML = product.name.toUpperCase();
      name.className = "name";

      const price = document.createElement("p");
      price.innerHTML = `R$ ${addZeros(product.price)}`;
      price.className = "price";

      const parcelamento = document.createElement("p");
      parcelamento.innerHTML = `até ${product.parcelamento[0]} de R$${product.parcelamento[1]}`;
      parcelamento.className = "parcelamento";

      const button = document.createElement("button");
      button.innerHTML = "COMPRAR";
      button.onclick = () => addToCart(product);

      li.appendChild(img);
      li.appendChild(name);
      li.appendChild(price);
      li.appendChild(parcelamento);
      li.appendChild(button);

      li.className = "product";
      ul.appendChild(li);
    }
  });
  productDiv.appendChild(ul);
}

export default generateProduct;
