const contenedorCard = document.querySelector('.contenedor-card');
const tabla = document.querySelector('tr');
const btnCargar = document.querySelector('.btn-cargar');
let arrCarrito = [];

// Traer los datos de la Api 
let url = 'http://localhost:5000/products';
fetch(url)
    .then(respuesta => respuesta.json())   
    .then(datos => verDatos(datos))
    .catch(error => console.log(error))

// Generar dinamicamente los articulos traidos desde la Api
const verDatos = (datos) => {
    for(let i = 0; i < datos.length; i++) {
        // console.log(datos[i].name);
        const {id, image, name, price, parcelamento} = datos[i];

        contenedorCard.innerHTML += ` 
        <div class="card ver-card">
            <div class="card-img">
                <img src="${image}" alt="img-blusa">
            </div>
            <div class="card-inf">
                <p class="titulo">${name}</p>
                <p class="precio">R$ ${price}</p>
                <p class="promo">até ${parcelamento[0]}x de $ ${parcelamento[1]}</p>
            </div>        
            <button class="btn-comprar" data-id = ${id}>COMPRAR</button>
        </div> `
    }
}

// Generando el Carrito de compras 
contenedorCard.addEventListener('click', e => {
    e.preventDefault();

    if(e.target.classList.contains('btn-comprar')) {
        // console.log(e.target.parentElement);
        addCarrito(e.target.parentElement);
    }
})

const addCarrito = articulo => {

    // console.log(articulo);

    const infArticulo = {
        id: articulo.querySelector('.btn-comprar').dataset.id, 
        image: articulo.querySelector('img').src,
        name: articulo.querySelector('.titulo').textContent,
        price: articulo.querySelector('.precio').textContent,
        cantidad: 1
    }
    
    if(arrCarrito.hasOwnProperty(infArticulo.id)) {
        infArticulo.cantidad = arrCarrito[infArticulo.id].cantidad + 1;
    }
    
    arrCarrito[infArticulo.id] = {...infArticulo};
    insertCarrito();

    console.log(arrCarrito);
}

const insertCarrito = () => {
    
    Object.values(arrCarrito).forEach(articulo => {
        const {id, image, name, price, cantidad} = articulo;

        tabla.innerHTML += ` 
            <td>
                <img src="${image}" alt="img-carrito">
                <p>${name}</p>
                <p>${price}</p>
                <p>${cantidad}</p>
            </td>`
    });
}

// Generar el boton de Cargar mas 
btnCargar.addEventListener('click', e => {


})


