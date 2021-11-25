import { SelectProductOrder } from "../../classes";

import modalAction from "../others/modalAction";

const filterSelectActions = (e, productList) => {
  const selectProductOrder = new SelectProductOrder(productList);
  const $btnShowMore = document.getElementById("btnShowMore");
  const filterValue = e.target.value;

  switch (filterValue) {
    case "Mas recentes":
      selectProductOrder.orderProductsByMostRecent();
      break;

    case "Maior preco":
      selectProductOrder.orderProductsByHigherPrice();
      break;

    case "Menor preco":
      selectProductOrder.orderProductsByLowestPrice();
      break;

    default:
      selectProductOrder.renderProducts(productList);
      $btnShowMore.classList.remove("delete");
      break;
  }

  modalAction();
};

export default filterSelectActions;
