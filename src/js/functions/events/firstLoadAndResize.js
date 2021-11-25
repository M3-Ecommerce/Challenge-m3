import setSelectState from "../select/setSelectState";
import accordionListenerByScreenSize from "../accordion/accordionListenerByScreenSize";

const firstLoadAndResize = (productList) => {
  window.addEventListener("DOMContentLoaded", () => {
    setSelectState();
    accordionListenerByScreenSize(productList);
    productList.loadProducts();
  });

  window.addEventListener("resize", () => {
    setSelectState();
    accordionListenerByScreenSize(productList);
  });
};

export default firstLoadAndResize;
