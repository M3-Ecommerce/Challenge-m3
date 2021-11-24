import filterProductsActions from "../product/filterProductsActions";

const accordionListenerByScreenSize = (productList) => {
  const accordionElementQuery = matchMedia("(min-width: 1024px)");
  const $accordion = document.getElementById("accordion");

  if (accordionElementQuery.matches) {
    $accordion.addEventListener("click", (e) => {
      filterProductsActions(e, productList.productList);
    });
  }
};

export default accordionListenerByScreenSize;
