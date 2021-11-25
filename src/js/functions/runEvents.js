import firstLoadAndResize from "./events/firstLoadAndResize";
import cartAndProductList from "./events/cartAndProductList";
import filterSelect from "./events/filterSelect ";
import sizeFilter from "./events/sizeFilter";
import btnShowMore from "./events/btnShowMore";

const runEvents = (productList, shoppingCart) => {
  firstLoadAndResize(productList);
  cartAndProductList(shoppingCart);
  filterSelect(productList);
  sizeFilter();
  btnShowMore();
};

export default runEvents;
