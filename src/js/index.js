let productos = [];
let total = 0;

function add(img, precio) {
    console.log(img, precio);
    productos.push(img),
    total = total + precio;
    document.getElementById('carrito').innerHTML = `Pagar $${total}`
}

function carrito() {
    
    window.alert(productos.join(", \n"));
}


