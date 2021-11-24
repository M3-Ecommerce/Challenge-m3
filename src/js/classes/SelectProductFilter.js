import ProductList from "./ProductList";

class SelectProductFilter extends ProductList {
  constructor(productList) {
    super(productList);
  }

  filterProductsByMostRecent() {
    const products = this.productList.map((product) => ({
      ...product,
      date: new Date(product.date),
    }));

    const organizedProducts = products
      .sort((productOne, productTwo) => {
        return productOne.date - productTwo.date;
      })
      .reverse();

    this.renderProducts(organizedProducts);
  }

  filterProductsByHigherPrice() {
    const products = [...this.productList];

    const organizedProducts = products
      .sort((productOne, productTwo) => {
        return productOne.price - productTwo.price;
      })
      .reverse();

    this.renderProducts(organizedProducts);
  }

  filterProductsByLowestPrice() {
    const products = [...this.productList];

    const organizedProducts = products.sort((productOne, productTwo) => {
      return productOne.price - productTwo.price;
    });

    this.renderProducts(organizedProducts);
  }
}

export default SelectProductFilter;
