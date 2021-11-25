export const generateRadioInput = (value, categoryName) => {
  const input = document.createElement("input");
  input.type = "radio";
  input.value = value;
  input.name = categoryName;

  const label = document.createElement("label");
  label.for = categoryName;
  if (categoryName === "parcelamento") {
    label.textContent = value.split("-")[1]
      ? `de R$${value.split("-")[0]} até R$${value.split("-")[1]}`
      : `a partir de R$${value.split("-")[0]}`;
  } else {
    label.textContent = value;
  }

  const br = document.createElement("br");

  return [input, label, br];
};

export const generateButtonInput = (value, categoryName) => {
  const input = document.createElement("input");
  input.type = "radio";
  input.value = value;
  input.name = categoryName;

  const span = document.createElement("span");
  span.textContent = value;
  const div = document.createElement("div");
  div.className = "box-button";
  const label = document.createElement("label");
  div.appendChild(span);
  label.append(input, div);

  return label;
};
export const generateRadioNodes = (values, categoryName, type = undefined) => {
  const radioNodes = [];
  switch (type) {
    case "button":
      values.forEach((value) => {
        radioNodes.push(generateButtonInput(value, categoryName));
      });

      break;
    default:
      values.forEach((value) => {
        radioNodes.push(...generateRadioInput(value, categoryName));
      });
  }

  return radioNodes;
};

export const generateProductListNode = (product) => {
  const { image, name, price } = product;
  const col = document.createElement("div");
  col.className = "col-12";
  const container = document.createElement("div");
  container.className = "product-list";

  const imgContainer = document.createElement("div");
  imgContainer.className = "product-icon";
  const productImg = document.createElement("img");
  productImg.src = image;
  productImg.width = "150px";

  const productName = document.createElement("div");
  productName.className = "product-name";
  productName.textContent = name;

  const productPrice = document.createElement("div");
  productPrice.className = "product-price";
  productPrice.textContent = `R$ ${price}`;

  imgContainer.appendChild(productImg);
  container.append(imgContainer, productName, productPrice);
  col.appendChild(container);
  return col;
};

export const generateProductNode = (product, shop) => {
  const { image, name, id, price, parcelamento } = product;
  const col = document.createElement("div");
  col.className = "col-6 col-md-4";

  const container = document.createElement("div");
  container.className = "product";

  const imgContainer = document.createElement("div");
  imgContainer.className = "product-img";

  const productImg = document.createElement("img");
  productImg.src = image;
  productImg.width = "auto";

  const productName = document.createElement("div");
  productName.className = "product-name";
  productName.textContent = name;

  const productPrice = document.createElement("div");
  productPrice.className = "product-price";
  productPrice.textContent = `R$ ${price}`;

  const deferredPrice = document.createElement("div");
  deferredPrice.className = "product-deferred-price";
  deferredPrice.textContent = `até ${parcelamento[0]}x de R$${parcelamento[0]}`;

  const productAction = document.createElement("div");
  productAction.className = "product-action btn btn-secondary";
  productAction.id = `product-${id}`;
  productAction.name = name;
  productAction.textContent = "comprar";
  productAction.addEventListener("click", (e) => {
    if (
      confirm(`Deseja adicionar ${e.target.name.toUpperCase()} ao carrinho?`)
    ) {
      shop.addToCart(e.target.id.split("-")[1]);
    }
  });

  imgContainer.appendChild(productImg);
  container.append(
    imgContainer,
    productName,
    productPrice,
    deferredPrice,
    productAction
  );
  col.appendChild(container);
  return col;
};
