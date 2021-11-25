import ProductList from "./ProductList";

class SelectProductOrder extends ProductList {
  constructor(productList) {
    super(productList);
  }

  orderProductsByMostRecent() {
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

  orderProductsByHigherPrice() {
    const products = [...this.productList];

    const organizedProducts = products
      .sort((productOne, productTwo) => {
        return productOne.price - productTwo.price;
      })
      .reverse();

    this.renderProducts(organizedProducts);
  }

  orderProductsByLowestPrice() {
    const products = [...this.productList];

    const organizedProducts = products.sort((productOne, productTwo) => {
      return productOne.price - productTwo.price;
    });

    this.renderProducts(organizedProducts);
  }
}

export default SelectProductOrder;
