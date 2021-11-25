import ProductList from "./ProductList";

class ProductFilter extends ProductList {
  constructor(productList) {
    super(productList);
    this.$colorFilterForm = document.getElementById("colorFilter");
    this.$sizeFilter = document.getElementById("sizeFilter");
    this.$priceRangeFilterForm = document.getElementById("priceRangeFilter");
    this.$btnShowMore = document.getElementById("btnShowMore");
  }

  applyFilters() {
    this.$btnShowMore.classList.add("delete");

    const products = [
      ...this.filterProductsByColor(),
      ...this.filterProductsBySize(),
      ...this.filterProductsByPriceRange(),
    ];

    const filteredProducts = [...new Set(products)];

    const noFilters = this.validateFilters() && filteredProducts.length === 0;

    if (noFilters) {
      this.renderProducts(this.productList);
      this.$btnShowMore.classList.remove("delete");
    } else {
      this.renderProducts(filteredProducts);
    }
  }

  validateFilters() {
    return (
      this.checkedColors.length === 0 &&
      this.selectedButtonsSize.length === 0 &&
      this.checkedRanges.length === 0
    );
  }

  cleanFilters() {
    this.renderProducts(this.productList);
    this.$colorFilterForm.reset();
    this.$priceRangeFilterForm.reset();
    this.cleanSizeFilter();
    this.$btnShowMore.classList.remove("delete");
  }

  cleanSizeFilter() {
    const selectedButtonSizes = Array.from(
      this.$sizeFilter.querySelectorAll(".selected")
    );

    selectedButtonSizes.forEach((btn) => btn.classList.remove("selected"));
  }

  filterProductsByColor() {
    this.checkedColors = Array.from(
      this.$colorFilterForm.querySelectorAll(".accordion__input-color:checked")
    );

    const colorValues = this.checkedColors.map((color) => color.value);

    const filteredProducts = this.productList.filter((product) => {
      return colorValues.includes(product.color);
    });

    return filteredProducts;
  }

  filterProductsBySize() {
    this.selectedButtonsSize = Array.from(
      this.$sizeFilter.querySelectorAll(".sizes-grid__button.selected")
    );

    const sizeValues = this.selectedButtonsSize.map((btnSize) =>
      btnSize.dataset.size.toUpperCase()
    );

    const filteredProducts = this.productList.filter((product) => {
      return (
        sizeValues.includes(product.size[0]) ||
        sizeValues.includes(product.size[1])
      );
    });

    return filteredProducts;
  }

  filterProductsByPriceRange() {
    this.checkedRanges = Array.from(
      this.$priceRangeFilterForm.querySelectorAll(
        ".accordion__input-range:checked"
      )
    );

    const rangesArr = this.checkedRanges.map((range) => [
      Number(range.dataset.min),
      Number(range.dataset.max),
    ]);

    const filteredProducts = this.productList.filter((product) => {
      const productRangeOne = product.parcelamento[0];
      const productRangeTwo = product.parcelamento[1];

      return this.areValidRanges(productRangeOne, productRangeTwo, rangesArr);
    });

    return filteredProducts;
  }

  areValidRanges(productRangeOne, productRangeTwo, rangesArr) {
    let areValids = false;

    rangesArr.forEach((range) => {
      areValids = productRangeOne >= range[0] && productRangeTwo <= range[1];
    });

    return areValids;
  }
}

export default ProductFilter;
