import filterSelectActions from "../select/filterSelectActions";

const filterSelect = (productList) => {
  const $filterSelect = document.getElementById("filterSelect");

  $filterSelect.addEventListener("change", (e) => {
    filterSelectActions(e, productList.productList);
  });
};

export default filterSelect;
