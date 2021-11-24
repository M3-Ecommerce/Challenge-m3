const setSelectState = () => {
  const selectElementQuery = matchMedia("(min-width: 1024px)");
  const $filterSelect = document.getElementById("filterSelect");

  if (selectElementQuery.matches) {
    $filterSelect.multiple = false;
  } else {
    $filterSelect.multiple = true;
  }
};

export default setSelectState;
