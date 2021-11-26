const items = document.getElementById('items');
const templeteCard = document.getElementById('template__card').content; //acceder elementos

const fragment = document.createDocumentFragment();
const cardsContent = document.getElementById('cards-content');
let car = {};




// -----------------  Peticion a la API-------------

const URL = 'http://localhost:5000/products/';
const times = 1
const fetchData = fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      pintarCards(data);
    })
    .catch((err) => console.log(err))



// -----------------  Estructura card -------------  

const pintarCards = (data) => {
  
  data.forEach((producto) => {

   
      templeteCard.querySelector('img').setAttribute('src',producto.image);
      templeteCard.querySelector('h4').textContent = producto.name;
      templeteCard.querySelector('h5').textContent = `R$${producto.price}`;
      templeteCard.querySelector('p').textContent = `até ${producto.parcelamento[0]}x de R$ ${producto.parcelamento[1]}`;
      templeteCard.querySelector('.button-card').dataset.id = producto.id;

      const clone = templeteCard.cloneNode(true);
      fragment.appendChild(clone)

  
  })
  items.appendChild(fragment)

}


/* document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
  var x = document.getElementById('items');


  if (x.style.display === 'none') {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }

} 

 */



// ----------------- Click boton comprar-----------


items.addEventListener('click', event => {
  addProduct(event);
})

const addProduct = event => {
  //console.log(event.target) //detecta cualquier clik
  //console.log(event.target.classList.contains('button-card')) //verdadero si preciosa boton

  if (event.target.classList.contains('button-card')){
    setCar(event.target.parentElement)//selecciona todo el div del items
  }
  event.stopPropagation(); //deterner otro efecto del items
}


const setCar = objeto => {
  const producto = {
    id: objeto.querySelector('.button-card').dataset.id,
    name :objeto.querySelector('h4').textContent,
    price: objeto.querySelector('h5').textContent,
    cantidad :1,
  }

  if(car.hasOwnProperty(producto.id)) {
    producto.cantidad = car[producto.id].cantidad + 1;
  }
  car[producto.id] = {...producto}

  pintarCarrito();
   
 }



//------ table carritoooooo ---------

const templateCarrito = document.getElementById('template-carrito').content;
const itemsTwo = document.getElementById('itemsTwo')


const pintarCarrito = () => {
  console.log(car);
  itemsTwo.innerHTML = ''

  Object.values(car).forEach(producto => {
    templateCarrito.querySelector('th').textContent = producto.id
    templateCarrito.querySelectorAll('td')[0].textContent = producto.name
    templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
    templateCarrito.querySelector('span').textContent = parseInt((producto.price).substr(2, 6)) * parseInt(producto.cantidad)
        


        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    itemsTwo.appendChild(fragment) 
  }








/* //--numero pantalla carrito// --
const obj = {2:{id: '2', name: 'Saia em couro', price: 'R$ 398', cantidad: 2},
3:{id: '3', name: 'Cardigan Tigre', price: 'R$ 398.8', cantidad: 1}}


const id = getElementById("conteo")

for (let propiedad in obj){

  /* console.log(obj[propiedad])

  console.log(obj[propiedad].cantidad) */

  /* console.log(obj[propiedad].cantidad)
  console.log(obj[propiedad].name) 

  id.innerHTML=`<p>${(obj[propiedad].cantidad)}  con ${(obj[propiedad].name)} </p>`

} */







//       ------   formularios

document.getElementById("buttonFormSend").onclick = function() {validateForm()};

const validateForm =()=> {
  modal.style.display = "none";
  let form = document.forms["myForm"]

  let colors2 = document.getElementsByName("colors");
  const price = document.getElementsByName("price");
  const size =  document.getElementsByName("size");

 /*  const talla = Array.prototype.slice.call(document.getElementsByName("talla"));  
  console.log(talla) */


  const listPrice = []
  var listacolores = []
  var listatallas = []


  for (let i = 0; i < colors2.length; i++){
    const element = colors2[i];
    
    if(element.checked){
      
      listacolores.push(element.value)
      console.log(listacolores)

    }
  }

  for (let i = 0; i < price.length; i++){
    const element = price[i];
    
    if(element.checked){

      if(element.value == "1") {
        listPrice.push("0", "50");
      } else if (element.value == "2") {
        listPrice.push("51", "150");
      } else if (element.value == "3") {
        listPrice.push("151", "300");
      }else if (element.value == "4") {
        listPrice.push("301", "500");
      }else {
        listPrice.push("501", "1000");
      }
      
       console.log(listPrice) 

    }
  }


  for (let i = 0; i < size.length; i++){
    const element = size[i];
    
    if(element.checked){
      
      listatallas.push(element.value)
      console.log(listatallas)

    }
  }
  const urelaapinueva= (url(listacolores,listPrice, listatallas ));
  console.log(urelaapinueva)
  repaintCards(urelaapinueva)
}



function repaintCards(url) {
  console.log(items.children.length)
  removeAllChildNodes(items)
  const fetchData2 = fetch(url)
    .then((res) => res.json())
    .then((data) => {
      pintarCards(data) //screen.width<900

      if(window.screen.width >= 900){
        pintarForm()
      }
      
    })
}


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
 





function url(colors,range,size){
  principal = 'http://localhost:5000/products?';


  
  
  const addCategory = (url, categoryList, categoryFilter) => {
    
  
    for (let i = 0; i < categoryList.length; i++){
      
      if((url.slice(-1) == "?")){
        url =`${url}${categoryFilter}=${categoryList[i]}`;
  
      } else {
        url = `${url}&${categoryFilter}=${categoryList[i]}`;
      }
    }
  
    return url;
  }
  
  
  urlTwo= addCategory(principal,colors,"color");
  
  console.log(typeof(urlTwo))
  urlThree= addCategory(urlTwo,size,"size_like"); 
  
  
  
  const addRange = (url, categoryList, categoryFilter) => {
    
  
    for (let i = 0; i < categoryList.length; i=i+2){
      
      if((url.slice(-1) == "?")){
        url =`${url}${categoryFilter}_gte=${categoryList[i]}&${categoryFilter}_lte=${categoryList[i+1]}`;
  
      } else {
        url = `${url}&${categoryFilter}_gte=${categoryList[i]}&${categoryFilter}_lte=${categoryList[i+1]}`;
      }
    }
  
    return url;
  }
  
  urlFour=  addRange(urlThree,range,"price")
  
  return urlFour;


}





//---------------- Modal------------------------------------------------



const modal = document.getElementById("modalForm");


const buttonFiltern = document.getElementById("buttonFilter");


const buttonFormClear = document.getElementById("buttonFormClear");

const  pintarForm =()=>{
  modal.style.display = "flex";
}

//if (screen.width>900){
  buttonFiltern.onclick = function() {
    modal.style.display = "flex";
  }
  
//} 
 /* buttonFiltern.onclick = function() {
  modal.style.display = "flex";
} */
 
if (window.screen.width <= 900){
  buttonFiltern.onclick = function() {
    modal.style.display = "flex";
  }
  
} else if(window.screen.width >= 900) {
  modal.style.display = "flex";
}




buttonFormClear.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



document.getElementById("closeFilterIcon").onclick = function() {
  modal.style.display = "none";
};

/* if(window.screen.width >= 900){
  modal.style.display = "flex";
}

/* 
 */

/* if(window.innerWidth > 900){
  function() ={
    modal.style.display = "flex";
  }
} */ 

window.onresize = resize;

function resize()
{
  if(window.screen.width >= 900) {
    modal.style.display = "flex";
  }
}




// modal carrito 



//---------------- Modal------------------------------------------------



const tableContaines = document.getElementById("tableContaines");


const carcompras = document.getElementById("carcompras");


const cierreCarrito = document.getElementById("cierreCarrito");



carcompras.onclick = function() {
    tableContaines.style.display = "flex";
}
  




cierreCarrito.onclick = function() {
  tableContaines.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == tableContaines) {
    tableContaines.style.display = "none";
  }
}

//-------
//---------------- Modal  order------------------------------------------------

var order = document.getElementById("modalOrder");
var orderboton = document.getElementById("buttonOrder");

var closeORDERIcon = document.getElementById("closeORDERIcon");


orderboton.onclick = function() {
  order.style.display = "block";
 
}

closeORDERIcon.onclick = function() {
  order.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == order) {
    order.style.display = "none";
  }
}
 

//----------------------- MENU DESPLEGABLE--------------------


const opcion = document.querySelectorAll('.form__titles');

// Permite recorrer cada una de nuestras opciones
opcion.forEach(e => {

  
  // Añadimos un evento a cada elemento seleccionado
  e.addEventListener('click', function(e){

      // Alteranmos las clases de nuestros enlaces
      const padre = e.target.parentNode;
      padre.children[1].classList.toggle('animation');
      padre.parentNode.children[1].classList.toggle('animation');
  });
  


});



//-------------- mayor y menor precio


var mayorPrecio = document.getElementById("mayorPrecio");


mayorPrecio.onclick = function() {
  repaintCards('http://localhost:5000/products?_sort=price&_order=desc')
  order.style.display = "none";
}

var menorPrecio = document.getElementById("menorPrecio");


menorPrecio.onclick = function() {
  repaintCards('http://localhost:5000/products?_sort=price&_order=ascc')
  order.style.display = "none";
}



// -------- Order/


const listaordenar = document.getElementById('lista__titulo')
const listaItems = document.getElementById('lista__titulo--items')
listaordenar.onclick = function() {
  listaItems.style.display = "flex";
  listaItems.style.flexDirection = "column";
  

  
}





var lista__mayorprecio = document.getElementById("lista__mayorprecio");


lista__mayorprecio.onclick = function() {
  repaintCards('http://localhost:5000/products?_sort=price&_order=desc')
  listaItems.style.display = "none";
}

var lista__menororprecio = document.getElementById("lista__menororprecio");


lista__menororprecio.onclick = function() {
  repaintCards('http://localhost:5000/products?_sort=price&_order=ascc')
  listaItems.style.display = "none";
}


/* 
for (let i = 0; i < menuDesplegable.length; i++){
  menuDesplegable[i].addEventListener("click", function(){
    if(window.innerWidth < 1024){

      const subMenu = this.nextElementSibling;
      const height = subMenu.scrollHeight;

      subMenu.classList.add("desplegar");
      subMenu.style.height = height + "px";

    }
  });
}

menuDesplegabl */




/* const cardGenerator = object => {
  const card = document.createElement('article');
  card.classList.add('card')

  card.innerHTML = `
  <div class="card-image">
    <img class="img-fluid" src="${object.image}" alt="imagen de ${object.name}">
  </div>
  <div class="card-body">
    <h3>${object.name}</h3>
    <h4>R$${object.price}</h4>
    <p>ate ${object.parcelamento[0]}X de R$ ${object.parcelamento[1]}</p>
    <button id="button-car" class="button-car" type="button" onclick="app">Comprar</button>
  </div>
  `;
  let app = () => console.log('Hola')
  return card;
}






const URL = 'http://localhost:5000/products';
const cardsContent = document.getElementById('cards-content');


const fetchData = fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    
    data.forEach((usuario) => {
      const card = cardGenerator(usuario);
      cardsContent.appendChild(card);
    })
   
  })
  .catch((err) => console.log(err)); */




  /*unction url(listacolores,listPrice, listatallas) {

  var total = 'http://localhost:5000/products?';

  for (i=0; i<listacolores.length; i++){
    total =`${total}&color=${listacolores[i]}`
  }
  
  console.log(total);

  for (i=0; i<listPrice.length; i=i+2){
    total =`${total}&price_gte=${listPrice[i]}&price_lte=${listPrice[i+1]}`
  }
  console.log(total);


  for (i=0; i<listatallas.length; i++){
    total =`${total}&size_like=${listatallas[i]}`
  }

  console.log(total);

}*/ 