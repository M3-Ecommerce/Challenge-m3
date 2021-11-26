const API_URL = "http://localhost:5000";
const HTMLResponse = document.querySelector("#app");
let productos = [];
let start = 0;
let end = 9;
const viewMore = 9;
let contador = 0;

//--------------------CONSUMIR API Y CREAR TEMPLATE-----------------
fetch(`${API_URL}/products`)
  .then((response) => response.json())
  .then((products) => {
    productos = products;
    addProduct(start, end);
  });
const addProduct = (start, end) => {
  let newProducts = productos.slice(start, end);
  showProducts(newProducts);
};
const showProducts = (products) => {
  const template = products
    .map(
      (product) =>
        `
        <div class="producto" id="${product.id}">
            <img class="imgProducto" src="${product.image}"></img>
            <h1 class="nombreProducto"}">${product.name}</h1>
            <h1 class="precioProducto">R$ ${product.price}</h1>
            <h1 class="ordenProducto">hasta ${product.parcelamento[0]}x de R$${product.parcelamento[1]}</h1>
            <button class="btn-comprarProducto" id="btnComprar_${product.id}">Comprar</button>
        </div>
    `
    )
    .join("");
  HTMLResponse.innerHTML = `${template}`;

  //----------------------BOTON AGREGAR AL CARRITO-----------------------------
  products.forEach((element) => {
    const button = document.getElementById(element.id);
    const agregarCarritoHTML = document.getElementById("carrito");
    button.onclick = () => {
      contador++;
      agregarCarritoHTML.innerHTML = contador;
    };
  });
};

//-----------------------BOTON CARGAR MAS----------------------
let boton = document.getElementById("btnMore");
boton.onclick = () => {
  end = viewMore + end;
  addProduct(start, end);
};

//---------------------------FILTROS---------------------------
const valueSelect = (formElements) => {
  let elements = formElements;
  let checked = false;
  for (let i = 0; i < elements.length; i++) {
    let item = elements[i];
    if (item.checked) {
      checked = item.value;
    }
  }
  return checked;
};

const showAndReset = (fBy,reset1, reset2) => {
  if (fBy == 0) {
    window.alert("EN EL MOMENTO NO DISPONEMOS DE ESTE PRODUCTO");
  } else {
    showProducts(fBy);
    document.getElementById(reset1).reset();
    document.getElementById(reset2).reset();
  }
}
//filtro de color
const formColor = document.getElementById("formcolor");
formColor.onchange = () => {
  const checked = valueSelect(formColor.elements);
  const filtroByColor = productos.filter((filtro) => filtro.color == checked);
  showAndReset(filtroByColor,"formTalla","formPrecio")
};
//filtro de talla
const formTalla = document.getElementById("formTalla");
formTalla.onchange = () => {
  const checked = valueSelect(formTalla.elements);
  const filtroBySize = productos.filter(
    (filtro) => filtro.size[0] == checked || filtro.size[1] == checked
  );
  showAndReset(filtroBySize,"formcolor","formPrecio")
};
//filtro de rango de precios
const formPrecio = document.getElementById("formPrecio");
formPrecio.onchange = () => {
  const checked = valueSelect(formPrecio.elements);
  const [a, b] = checked.split(" ");
  const filtroByRango = productos.filter(
    (filtro) => filtro.price >= a && filtro.price <= b
  );
  showAndReset(filtroByRango,"formcolor","formTalla")
};

//------------------FILTO ORDENAR POR--------------------
const selectOrderBy = document.getElementById("selectOrderBy");
selectOrderBy.onchange = () => {
  const valueSelect = selectOrderBy.value;
  if (valueSelect == 1) {
    const productosMasReciente = productos.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    showProducts(productosMasReciente);
  }
  if (valueSelect == 2) {
    const productosMenorPrecio = productos.sort((a, b) => {
      return a.price - b.price;
    });
    showProducts(productosMenorPrecio);
  }
  if (valueSelect == 3) {
    const productosMayorPrecio = productos.sort((a, b) => {
      return b.price - a.price;
    });
    showProducts(productosMayorPrecio);
  }
  ResetProduct();
};

//---------------BOTON MOSTRAR FILTROS----------------

const mostrarFiltros = (btnShow) => {
  btnShow.onclick = () => {
    menu1.classList.toggle("mostrar");
  };
}

const btnMenu = document.querySelector("#nav-bar");
const menu1 = document.querySelector("#menu1");
mostrarFiltros(btnMenu)

const btnMenu2 = document.querySelector("#btnNav_2");
mostrarFiltros(btnMenu2)

const cerrarVentana = document.querySelector("#cerrarVentana");
mostrarFiltros(cerrarVentana)


//-----------BOTON PARA LIMPIAR FORMULARIOS----------------
const btnMenu4 = document.querySelector("#btnNav_3");
btnMenu4.onclick = () => {
  ResetProduct();
};

//---------- FUNCION LIMPIAR FORMULARIOS-------------------
const ResetProduct = () => {
  document.getElementById("formTalla").reset();
  document.getElementById("formPrecio").reset();
  document.getElementById("formcolor").reset();
};

///--------------BOTONES PARA RECOGER FILTROS------------------

const recogerFiltro = (btnShow, height, height2, form, boxDiv) => {
  btnShow.addEventListener("click", (event) => {
    if (form.style.display == "block") {
      form.style.display = "none";
      boxDiv.style.height = height;
    } else {
      form.style.display = "block";
      boxDiv.style.height = height2;
    }
  });
};

const btnShowMore = document.getElementById("btnColor");
const formulario = document.getElementById("formcolor");
const box = document.getElementById("color-filter");
formulario.style.display = "block";
box.style.height = "286px";
recogerFiltro(btnShowMore, "10px", "286px", formulario, box);

const btnShowMore2 = document.getElementById("btnTalla");
const formulario2 = document.getElementById("formTalla");
const box2 = document.getElementById("talla-filter");
formulario2.style.display = "block";
box2.style.height = "158px";
recogerFiltro(btnShowMore2, "50px", "158px", formulario2, box2);

const btnShowMore3 = document.getElementById("btnPrecio");
const formulario3 = document.getElementById("formPrecio");
const box3 = document.getElementById("precio-filter");
formulario3.style.display = "block";
box3.style.height = "156px";
recogerFiltro(btnShowMore3, "50px", "156px", formulario3, box3);