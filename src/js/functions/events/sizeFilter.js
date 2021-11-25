import buttonSizeActions from "../accordion/buttonSizeActions";

const sizeFilter = () => {
  const $sizeFilter = document.getElementById("sizeFilter");
  $sizeFilter.addEventListener("click", buttonSizeActions);
};

export default sizeFilter;
