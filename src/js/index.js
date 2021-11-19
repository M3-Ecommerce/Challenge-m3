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

const items = document.getElementById('items')
const templeteCard = document.getElementById('template-card').content //acceder elementos
const fragment = document.createDocumentFragment();
items.addEventListener('click', event => {
  addProduct(event)
})



const URL = 'http://localhost:5000/products';
const cardsContent = document.getElementById('cards-content');

  
const fetchData = fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      pintarCards(data);
      
     
    })
    .catch((err) => console.log(err))

const pintarCards = (data)=>{
  data.forEach((producto) => {

    templeteCard.querySelector('img').setAttribute('src',producto.image)
    templeteCard.querySelector('h4').textContent = producto.name;
    templeteCard.querySelector('h5').textContent = `R$${producto.price}`;
    templeteCard.querySelector('p').textContent = `ate ${producto.parcelamento[0]}X de R$ ${producto.parcelamento[1]}`;
    templeteCard.querySelector('.button-card').dataset.id = producto.id;

    const clone = templeteCard.cloneNode(true)
    fragment.appendChild(clone)
  })
  items.appendChild(fragment)
}

let car = 0;
const addProduct = event => {
  //console.log(event.target) //detecta cualquier clik
  //console.log(event.target.classList.contains('button-card')) //verdadero si preciosa boton

  if (event.target.classList.contains('button-card')){
    car += 1;
    console.log(car)
  }
}

