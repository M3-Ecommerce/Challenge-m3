import { ProductFilter } from "../../classes";

import inputValids from "./inputValids";
import modalAction from "../modalAction";

const filterProductsActions = (e, productList) => {
  const productFilter = new ProductFilter(productList);
  const element = e.target;

  const isButtonApply = element.dataset.button === "apply";
  const isButtonReset = element.dataset.button === "reset";

  if (isButtonApply || inputValids(element)) {
    productFilter.applyFilters();
  }

  if (isButtonReset) {
    productFilter.cleanFilters();
  }

  modalAction();
};

export default filterProductsActions;
