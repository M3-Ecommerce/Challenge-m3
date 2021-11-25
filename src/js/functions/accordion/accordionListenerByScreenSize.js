import getScreenSize from "../others/getScreenSize";
import filterProductsActions from "../product/filterProductsActions";

const accordionListenerByScreenSize = (productList) => {
  const isDesktopScreenSize = getScreenSize();

  const $accordion = document.getElementById("accordion");
  const $accordionButtons = document.getElementById("accordionButtons");

  if (isDesktopScreenSize) {
    $accordion.addEventListener("click", (e) => {
      filterProductsActions(e, productList.productList);
    });
  } else {
    $accordionButtons.addEventListener("click", (e) => {
      filterProductsActions(e, productList.productList);
    });
  }
};

export default accordionListenerByScreenSize;
