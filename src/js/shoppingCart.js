const cartContent = document.getElementById("shoppingDropdown");
const cartButton = document.getElementById("dropbtn");
const badge = document.getElementById("badge");

cartButton.onclick = openDropdown;

function openDropdown() {
  document.getElementById("shoppingDropdown").classList.toggle("show");
}

window.onload = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

export function loadCart() {
  const productsJSon = JSON.parse(localStorage.getItem("shopping-cart"));
  badge.textContent = productsJSon.length;
  cartContent.innerHTML = "";
  const list = document.createElement("ul");
  productsJSon.map((product) => {
    const item = document.createElement("li");
    const name = document.createElement("span");
    name.textContent = product.name;

    item.appendChild(name);
    list.appendChild(item);
  });
  cartContent.appendChild(list);
}

export function addToCart(product) {
  const productsJSon = JSON.parse(localStorage.getItem("shopping-cart"));
  badge.textContent = productsJSon.length;
  productsJSon.push(product);

  localStorage.setItem("shopping-cart", JSON.stringify(productsJSon));

  //create elements in the dropdown
  cartContent.innerHTML = "";
  const list = document.createElement("ul");
  productsJSon.map((product) => {
    const item = document.createElement("li");
    const name = document.createElement("span");
    name.textContent = product.name;

    item.appendChild(name);
    list.appendChild(item);
  });
  cartContent.appendChild(list);
}
