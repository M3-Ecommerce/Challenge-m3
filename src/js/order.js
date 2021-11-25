import { fetchApi, filterAndOrder } from "./utils";
import generateProducts from "./product";

//open modal order
document.getElementById("btn-order").onclick = function () {
  document.getElementById("modal-order").style.display = "block";
};
//close modal order
document.getElementById("close-order").onclick = function () {
  document.getElementById("modal-order").style.display = "none";
};

document.getElementsByName("order").forEach((order) => {
  order.onclick = () => {
    fetchApi().then((products) => {
      console.log(products);
      const orderProducts = filterAndOrder(products);
      generateProducts(orderProducts);
    });
  };
});

// add events click to order in desktop
document.getElementById("order").onchange = () => {
  fetchApi().then((products) => {
    const orderProducts = filterAndOrder(products);
    console.log(orderProducts);
    generateProducts(orderProducts);
  });
};
