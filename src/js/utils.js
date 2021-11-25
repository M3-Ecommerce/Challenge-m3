// call the api and return the products
export function fetchApi() {
  return fetch("http://localhost:5000/products")
    .then((res) => res.json())
    .then((products) => products);
}

export function filterAndOrder(products) {
  let productsFilter = products;
  const { colors, size, prices } = getAllFilters();
  const { selectedValue, selectorModal } = getAllOrders();
  console.log(colors, size, prices);
  if (colors.length > 0) {
    productsFilter = products.filter((product) => {
      if (colors.some((color) => product.color === color)) {
        return product;
      }
    });
  }

  if (size !== "" && size !== undefined) {
    console.log("Enter size");
    productsFilter = productsFilter.filter((product) => {
      if (product.size[0] === size || product.size[1] === size) {
        return product;
      }
    });
  }

  if (Object.entries(prices).length !== 0) {
    console.log("Enter price");
    productsFilter = productsFilter.filter((product) => {
      if (product.price > prices.min && product.price < prices.max) {
        return product;
      }
    });
  }

  if (selectedValue) {
    productsFilter = productOrderBy(selectedValue, productsFilter);
  } else if (selectorModal) {
    productsFilter = productOrderBy(selectorModal, productsFilter);
  }

  return productsFilter;
}

export function getAllFilters() {
  const colors = document.querySelectorAll("input[name=colors]:checked");
  const sizes = document.querySelectorAll("input[name=sizes]:checked");
  const prices = document.querySelectorAll("input[name=prices]:checked");

  let colorsValues = [];
  if (colors.length > 0) {
    colors.forEach((color) => colorsValues.push(color.value));
  }

  let priceValues = {};
  if (prices.length > 0) {
    const stringPrices = prices[0].value.split(",");
    priceValues = {
      min: +stringPrices[0],
      max: +stringPrices[1],
    };
  }

  let sizeValue = "";
  if (sizes.length > 0) sizeValue = sizes[0].value;

  return {
    colors: colorsValues,
    size: sizeValue,
    prices: priceValues,
  };
}

export function getAllOrders() {
  const selectBox = document.getElementById("order");
  const selectedValue = selectBox.options[selectBox.selectedIndex].value;

  let selectorModal;
  document.getElementsByName("order").forEach((order) => {
    if (order.checked) {
      selectorModal = order.value;
    }
  });

  return { selectedValue, selectorModal };
}

export function productOrderBy(order, products) {
  switch (order) {
    case "recientes":
      return products.sort((a, b) => {
        const dateA = Date.parse(a.date);
        const dateB = Date.parse(b.date);
        if (dateA > dateB) return -1;
        if (dateA < dateB) return 1;
        return 0;
      });

    case "menor_precio":
      return products.sort((a, b) => {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
      });

    case "mayor_precio":
      return products.sort((a, b) => {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
        return 0;
      });

    default:
      return products;
  }
}
