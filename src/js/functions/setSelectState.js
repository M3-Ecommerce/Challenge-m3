const setSelectState = () => {
  const selectElementQuery = matchMedia("(min-width: 1024px)");
  const $priceRanges = document.getElementById("priceRanges");

  if (selectElementQuery.matches) {
    $priceRanges.multiple = false;
  } else {
    $priceRanges.multiple = true;
  }
};

export default setSelectState;
