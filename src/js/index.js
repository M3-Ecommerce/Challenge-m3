const items = document.getElementById('items');
const templeteCard = document.getElementById('template__card').content; 
const fragment = document.createDocumentFragment();
const cardsContent = document.getElementById('cards-content');
let car = {};




// -----------------  request to the api-------------

const URL = 'http://localhost:5000/products/';

const fetchData = fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      paintCards(data);
    })
    .catch((err) => console.log(err))






// -----------------  structure card -------------  

const paintCards = (data) => {
  
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




// ----------------- buy button-----------

items.addEventListener('click', event => {
  addProduct(event);
})

const addProduct = event => {
  
  if (event.target.classList.contains('button-card')){
    setCar(event.target.parentElement)
  }
  event.stopPropagation();
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

  paintCarShopping();
  
}



//    ----------------- shopping table ---------

const templeteCar = document.getElementById('template-car').content;
const itemsTwo = document.getElementById('itemsTwo')


const paintCarShopping = () => {
  console.log(car);
  itemsTwo.innerHTML = ''

  Object.values(car).forEach(producto => {
    templeteCar.querySelector('th').textContent = producto.id
    templeteCar.querySelectorAll('td')[0].textContent = producto.name
    templeteCar.querySelectorAll('td')[1].textContent = producto.cantidad
    templeteCar.querySelector('span').textContent = parseInt((producto.price).substr(2, 6)) * parseInt(producto.cantidad)
        
    const clone = templeteCar.cloneNode(true)
    fragment.appendChild(clone)
  })
  itemsTwo.appendChild(fragment) 
}







//   ------------------  form html filter--------------

document.getElementById("buttonFormSend").onclick = function() {validateForm()};

const validateForm =()=> {
  modal.style.display = "none";
  
  const  colors = document.getElementsByName("colors");
  const price = document.getElementsByName("price");
  const size =  document.getElementsByName("size");

 
  const listPrice = []
  const listColors = []
  const listSize = []


  for (let i = 0; i < colors.length; i++){
    const element = colors[i];
    if(element.checked){

      listColors.push(element.value)
      //console.log(listColors)
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
       //console.log(listPrice) 
    }
  }


  for (let i = 0; i < size.length; i++){
    const element = size[i];
    
    if(element.checked){
      
      listSize.push(element.value)
      //console.log(listSize)

    }
  }

  const urlNew= (url(listColors,listPrice, listSize));
  //console.log(urlNew)
  repaintCards(urlNew)
}




// ---------------------- function repaint  cards-----

function repaintCards(url) {
  //console.log(items.children.length)
  removeAllChildNodes(items)
  const fetchData2 = fetch(url)
    .then((res) => res.json())
    .then((data) => {
      paintCards(data) 

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
 


//------------------------get url with filter----------


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
  //console.log(typeof(urlTwo))
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





//----------------------- Modal  Form-----------------------------

const modal = document.getElementById("modalForm");
const buttonFiltern = document.getElementById("buttonFilter");
const buttonOrder = document.getElementById("buttonOrder");
const buttonFormClear = document.getElementById("buttonFormClear");

const  pintarForm =()=>{
  modal.style.display = "flex";
}



buttonFiltern.onclick = function() {
  modal.style.display = "flex";
}
  
if (window.screen.width <= 900){
  buttonFiltern.onclick = function() {
    modal.style.display = "flex";
}
  
} else if(window.screen.width >= 900) {
  modal.style.display = "flex";
}

buttonFormClear.onclick = function() {
  modal.style.display = "none";
  repaintCards('http://localhost:5000/products/')
}



document.getElementById("closeFilterIcon").onclick = function() {
  modal.style.display = "none";
};

window.onresize = resize;

function resize()
{
  if(window.screen.width >= 900) {
    modal.style.display = "flex";
  }
}





//------------------------ Modal Order---------------------------

const order = document.getElementById("modalOrder");
const orderboton = document.getElementById("buttonOrder");
const closeOrder = document.getElementById("closeOrder");


orderboton.onclick = function() {
  order.style.display = "block";
 
}

closeOrder.onclick = function() {
  order.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == order) {
    order.style.display = "none";
  }
}
 






//----------------------- MENU DESPLEGABLE FORM--------------------


const opcion = document.querySelectorAll('.form__titles');


opcion.forEach(e => {

  e.addEventListener('click', function(e){

      const padre = e.target.parentNode;
      padre.children[1].classList.toggle('animation');
      padre.parentNode.children[1].classList.toggle('animation');
  });
  
});






//----------------   higher filter and lower price----------


const form__higherPrice = document.getElementById("form__higherPrice");


form__higherPrice.onclick = function() {
  repaintCards('http://localhost:5000/products?_sort=price&_order=desc')
  order.style.display = "none";
}

const form__lowerPrice = document.getElementById("form__lowerPrice");


form__lowerPrice.onclick = function() {
  repaintCards('http://localhost:5000/products?_sort=price&_order=ascc')
  order.style.display = "none";
}



// -------------- -------- Modal car----------

const table__Container = document.getElementById("table__Container");
const shoppingCart = document.getElementById("shoppingCart");
const closeCar = document.getElementById("closeCar");

shoppingCart.onclick = function() {
    table__Container.style.display = "flex";
}

closeCar.onclick = function() {
  table__Container.style.display = "none";
}

 window.onclick = function(event) {
  if (event.target == table__Container) {
    table__Container.style.display = "none";
  }
} 









// -------------- *List desplegable Order**----------
const listaOrder = document.getElementById('list__title')
const listItems = document.getElementById('list__title--Items')
const list__higherPrice = document.getElementById("list__higherPrice");
const list__lowerPrice = document.getElementById("list__lowerPrice");

listaOrder.onclick = function() {
  listItems.style.display = "flex";
  listItems.style.flexDirection = "column"; 
}

list__higherPrice.onclick = function() {
  repaintCards('http://localhost:5000/products?_sort=price&_order=desc')
  listItems.style.display = "none";
}

list__lowerPrice.onclick = function() {
  repaintCards('http://localhost:5000/products?_sort=price&_order=ascc')
  listItems.style.display = "none";
}


