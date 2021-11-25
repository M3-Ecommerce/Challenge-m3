import { closeNav } from "./navigation";
import { removeAllChildNodes, isMobile } from "./utils";
import { applyPagination } from "./filters";
import { generateProductNode, generateProductListNode } from "./generators";

export const renderProducts = (products, nodeId, shop) => {
  const productNodes = [];
  if (shop) {
    products.forEach((product) => {
      const productNode = generateProductNode(product, shop);
      productNodes.push(productNode);
    });
  } else {
    products.forEach((product) => {
      const productNode = generateProductListNode(product, shop);
      productNodes.push(productNode);
    });
  }

  document.getElementById(nodeId).append(...productNodes);
};

export const refreshProducts = (newProducts, nodeId, page, shop) => {
  const loadMoreButton = document.getElementById("load-more");
  const renderedProducts = document.getElementById(nodeId);
  removeAllChildNodes(renderedProducts);
  const productsToShow = shop
    ? applyPagination(newProducts, page, loadMoreButton)
    : newProducts;
  renderProducts(productsToShow, nodeId, shop);
  if (isMobile()) {
    closeNav();
  }
};

export const shoppingCart = (badge, container, total, allProducts) => {
  const cart = [];
  const addToCart = (id) => {
    cart.push(allProducts.find((product) => product.id === id));
    badge.textContent = cart.length;
    refreshProducts(cart, container.id);
    total.textContent = calculateTotal(cart);
  };
  return { cart, addToCart };
};

const calculateTotal = (products) => {
  return products.reduce((total, product) => {
    return total + Number(product.price);
  }, 0);
};
