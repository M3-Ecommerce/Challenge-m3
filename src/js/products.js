import { closeNav } from "./navigation";
import { removeAllChildNodes, isMobile } from "./utils";
import { applyPagination } from "./filters";

export const renderProducts = (products, shop) => {
  const productNodes = [];
  products.forEach((product) => {
    const productNode = generateProductNode(product, shop);
    productNodes.push(productNode);
  });
  document.getElementById("products").append(...productNodes);
};

export const refreshProducts = (newProducts, page, shop) => {
  const loadMoreButton = document.getElementById("load-more");
  const renderedProducts = document.getElementById("products");
  removeAllChildNodes(renderedProducts);
  renderProducts(applyPagination(newProducts, page, loadMoreButton), shop);
  if (isMobile()) {
    closeNav();
  }
};

export const shoppingCart = (badge, allProducts) => {
  const cart = [];
  const addToCart = (id) => {
    cart.push(allProducts.find((product) => product.id === id));
    badge.textContent = cart.length;
  };
  return { cart, addToCart };
};

const generateProductNode = (product, shop) => {
  const { image, name, id, price, parcelamento } = product;
  const col = document.createElement("div");
  col.className = "col-6 col-md-4";

  const container = document.createElement("div");
  container.className = "product";

  const imgContainer = document.createElement("div");
  imgContainer.className = "product-img";

  const productImg = document.createElement("img");
  productImg.src = image;
  productImg.width = "auto";

  const productName = document.createElement("div");
  productName.className = "product-name";
  productName.textContent = name;

  const productPrice = document.createElement("div");
  productPrice.className = "product-price";
  productPrice.textContent = `R$ ${price}`;

  const deferredPrice = document.createElement("div");
  deferredPrice.className = "product-deferred-price";
  deferredPrice.textContent = `até ${parcelamento[0]}x de R$${parcelamento[0]}`;

  const productAction = document.createElement("div");
  productAction.className = "product-action btn btn-secondary";
  productAction.id = `product-${id}`;
  productAction.name = name;
  productAction.textContent = "comprar";
  productAction.addEventListener("click", (e) => {
    if (
      confirm(`Deseja adicionar ${e.target.name.toUpperCase()} ao carrinho?`)
    ) {
      shop.addToCart(e.target.id.split("-")[1]);
    }
  });

  imgContainer.appendChild(productImg);
  container.append(
    imgContainer,
    productName,
    productPrice,
    deferredPrice,
    productAction
  );
  col.appendChild(container);
  return col;
};
