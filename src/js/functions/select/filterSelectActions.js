import { SelectProductFilter } from "../../classes";

import modalAction from "../modalAction";

const filterSelectActions = (e, productList) => {
  const selectProductFilter = new SelectProductFilter(productList);
  const filterValue = e.target.value;

  switch (filterValue) {
    case "Mas recentes":
      selectProductFilter.filterProductsByMostRecent();
      break;

    case "Maior preco":
      selectProductFilter.filterProductsByHigherPrice();
      break;

    case "Menor preco":
      selectProductFilter.filterProductsByLowestPrice();
      break;

    default:
      selectProductFilter.renderProducts(productList);
      break;
  }

  modalAction();
};

export default filterSelectActions;
