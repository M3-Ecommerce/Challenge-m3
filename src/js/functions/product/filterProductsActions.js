import { ProductFilter } from "../../classes";

import getScreenSize from "../getScreenSize";
import inputValids from "./inputValids";
import modalAction from "../modalAction";

const filterProductsActions = (e, productList) => {
  const productFilter = new ProductFilter(productList);
  const element = e.target;

  const isDesktopScreenSize = getScreenSize();

  const isButtonApply = element.dataset.button === "apply";
  const isButtonReset = element.dataset.button === "reset";

  if (isDesktopScreenSize && inputValids(element)) {
    productFilter.applyFilters();
  }

  if (!isDesktopScreenSize && isButtonApply) {
    productFilter.applyFilters();
    modalAction();
  }

  if (isButtonReset) {
    productFilter.cleanFilters();
    modalAction();
  }
};

export default filterProductsActions;
