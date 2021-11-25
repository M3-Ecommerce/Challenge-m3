import showMoreProducts from "../product/showMoreProducts";

const btnShowMore = () => {
  const $btnShowMore = document.getElementById("btnShowMore");
  $btnShowMore.addEventListener("click", showMoreProducts);
};

export default btnShowMore;
