/*console.log("Hola como estas");

/*const URL = 'http://localhost:5000/products/1';

  fetch(URL)
  .then(response => response.json())
  .then(data => {

    let element = document.getElementById('elemn')
    element.innerHTML = ` <p>${data.name}</p> <img src='${data.image}'>`
    console.log(data)
  })
  .catch (err => console.log(err)) 
 


const app = document.querySelector('.container')

const URL = 'http://localhost:5000/products';

fetch(URL)
  .then((res) => res.json())
  .then((data) => {

      data.forEach((usuario) => {
      const p = document.createElement('p')
      p.innerHTML = usuario.name
      app.appendChild(p) 

    })
   // console.log(data)
  })
  .catch((err) => console.log(err)) */


  
  /*const URL = 'http://localhost:5000/products';
  const app = document.querySelector('.container')

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
  
        data.forEach((usuario) => {
        const producto = document.createElement('p')
        producto.innerHTML = usuario.name
        app.appendChild(producto) 


        const precio = document.createElement('p')
        precio.innerHTML = `R$ ${usuario.price}`
        app.appendChild(precio) 

        const range = document.createElement('p')
        range.innerHTML = `ate ${usuario.parcelamento[0]}x de R$ ${usuario.parcelamento[1]}`
        app.appendChild(range) 
  
        const img = document.createElement('IMG')
        img.setAttribute("src", `${usuario.image}`);
        img.setAttribute("width", "304");
        img.setAttribute("height", "228");
        img.setAttribute("alt", "The Pulpit Rock");
        document.appendChild(img);
      })
     
    })
    .catch((err) => console.log(err))*/


/* const cardsContent = document.getElementById('cards-content');

const url_api = 'http://localhost:5000/products';



// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const requestComplete = 4;
const statusRequest = 200;

const fetchData = (api_url) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', api_url, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Test Error', api_url))
      }
    }
    xhttp.send();
  });
} */




const cardGenerator = object => {
  const card = document.createElement('article');
  card.classList.add('card')

  card.innerHTML = `
  <div class="card-image">
    <img class="img-fluid" src="${object.image}" alt="imagen de ${object.name}">
  </div>
  <div class="card-body">
    <h3>${object.name}</h3>
    <h4>R$${object.price}</p>
    <p>ate ${object.parcelamento[0]}X de R$ ${object.parcelamento[1]}</p>
    <button class="button" type="button">Comprar </button>
  </div>
  `;

  return card;
}


const URL = 'http://localhost:5000/products';
const cardsContent = document.getElementById('cards-content');


  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
  
        data.forEach((usuario) => {
          const card = cardGenerator(usuario);
          cardsContent.appendChild(card);
      })
     
    })
    .catch((err) => console.log(err))


