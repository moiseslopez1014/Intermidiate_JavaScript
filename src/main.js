import './style.css'

export const anchorElement = document.querySelector("#app");

// Exercise 1 Acceso al DOM
console.log('// Exercise 1 Acceso al DOM');

const pConIdUnico = document.getElementById('idUnicoParrafo');
console.log(pConIdUnico);

const ex1MismaClase = document.querySelectorAll('.ex1Clase');
console.log(ex1MismaClase);

//Exercise 2 Cambiar el contenido de un elemento del DOM
console.log('//Exercise 2 Cambiar el contenido de un elemento del DOM');

  const ex2ContenedorLosCojones = document.querySelectorAll('.ex2Container'); //Guarda el const de Todos los elementos con tal clase
  
  ex2ContenedorLosCojones.forEach(susmuertos => { // Por cada elemento con esa clase
    const ex2ParrafoLosCojones = document.createElement('p');  // crea parrafo e inserta texto dentro
    ex2ParrafoLosCojones.textContent = 'LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones Cojonem Ipsum Cojonem Ipsum Cojonem Ipsum Cojonem Ipsum Cojonem Ipsum Cojonem Ipsum Cojonem Ipsum';
    const ex2BotonLosCojones = document.createElement('button'); // crea boton e inserta texto dentro
    ex2BotonLosCojones.textContent = 'Continuar';
    susmuertos.appendChild(ex2ParrafoLosCojones); // inserta parrafo dentro de elemento seleccionado
    susmuertos.appendChild(ex2BotonLosCojones); // inserta boton dentro de elemento seleccionado 
    anchorElement.appendChild(susmuertos); // inserta elemento seleccionado (con su contendido insertado) dentro de div principal
  })

//Ejercicio 3 Crea una Web en HTML
console.log('//Ejercicio 3 Crea una Web en HTML');

//const ex3Container = document.querySelector('.ex3Container'); //Selector de elemento en HTML
const ex3Container = document.createElement('div');
ex3Container.className = 'ex3Container';
function ex3CallBoxes(nSquares) { //Recibe numero cuadrados
  for (let n = 0; n < nSquares; n++) { //Repite lo siguiente el numero de cajas introducido
    const numberClass = (n % 3) +1; //Crea numero para clase (cuando sea 4 resto 1, + 1 clase 2, iterando 123123123)
    const ex3DivSquare = document.createElement('div'); //crea un div en cada iteracion
    ex3DivSquare.className = 'ex3Container__box'+numberClass; //asigna clase y numero 1, 2 o 3 en cada iteracion
    ex3Container.appendChild(ex3DivSquare); //inserta los elementos dentro de ex3Container
  }
anchorElement.appendChild(ex3Container); //inserta ex3Container dentro de div principal.
}

ex3CallBoxes(7);

//Ejercicio 4 Crea un elemento “card”
console.log('Ejercicio 4. Crea un elemento “card”');

const movie = {
  title: 'The Dark Knight',
  director: 'Christopher Nolan',
  actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine', 'Gary Oldman', 'Morgan Freeman', 'Maggie Gyllenhaal'],
  year: 2008,
  description: 'Batman returns to continue his war against organized crime. Everything goes fine with the help of Liutenant Jim Gordon and prosecutor Harvey Dent. Until Joker shows up to bring chaos.',
  rating: 8.1,
  poster: 'https://pics.filmaffinity.com/the_dark_knight-102763119-msmall.jpg',
}

function createMovieCard() {
  const movieCardDiv = document.createElement('div');
  movieCardDiv.className = 'ex4Container';
  const movieCardDiv__info = document.createElement('div');
  movieCardDiv__info.className = 'ex4Container__Info';
  const movieCardDiv__Poster = document.createElement('div');
  movieCardDiv__Poster.className = 'ex4Container__Poster';
  const movie_Poster = document.createElement('img');
  movie_Poster.setAttribute('src', `${movie.poster}`);
  const movie_Title = document.createElement('h2');
  movie_Title.textContent = `${movie.title}`;
  const movie_Director = document.createElement('p');
  movie_Director.textContent = `Director: ${movie.director}`;
  const movie_Actors = document.createElement('p');
  movie_Actors.textContent = `Actors: ${movie.actors}`;
  const movie_Year = document.createElement('p');
  movie_Year.textContent = `Year: ${movie.year}`;
  const movie_Description = document.createElement('p');
  movie_Description.textContent = `Description: ${movie.description}`;
  const movie_Rating = document.createElement('p');
  movie_Rating.textContent = `Rating: ${movie.rating}`;

  movieCardDiv.appendChild(movieCardDiv__Poster);
  movieCardDiv__Poster.appendChild(movie_Poster);
  movieCardDiv.appendChild(movieCardDiv__info);
  movieCardDiv__info.appendChild(movie_Title);
  movieCardDiv__info.appendChild(movie_Director);
  movieCardDiv__info.appendChild(movie_Actors);
  movieCardDiv__info.appendChild(movie_Year);
  movieCardDiv__info.appendChild(movie_Description);
  movieCardDiv__info.appendChild(movie_Rating);
  anchorElement.appendChild(movieCardDiv);

}
createMovieCard();
createMovieCard();
createMovieCard();
createMovieCard();

//Ejercicio 5. Cambiar el texto interno del shadow DOM
console.log('//Ejercicio 5. Cambiar el texto interno del shadow DOM');


const ex5Element = document.createElement('div');
const ex5Parrafo = document.createElement('p');
ex5Element.setAttribute('id', 'element5');
ex5Parrafo.textContent = 'Into Shadow';
const ex5Shadow = ex5Element.attachShadow({'mode': 'open'});

ex5Element.appendChild(ex5Parrafo);
anchorElement.appendChild(ex5Element);

ex5Shadow.innerHTML = `
<style>
p {
  color: red;}
  </Style>
  
  <p>Hola desde el Shadow DOM</p>`;


//Ejercicio 6 Mostrar coordenadas del raton en tiempo real
console.log('//Ejercicio 6 Mostrar coordenadas del raton en tiempo real');

const ex6Element = document.createElement('div');
ex6Element.setAttribute('id', 'ex6');
ex6Element.className = 'ex6style';
anchorElement.appendChild(ex6Element);


ex6Element.addEventListener('mousemove', (mouses) => {
  let coordenadasX = mouses.clientX;
  let coordenadasY = mouses.clientY
  console.log(`Las coordenadas del raton son x: ${coordenadasX} y: ${coordenadasY}`);
})

//7 Extraer valor de un input
console.log('//7 Extraer valor de un input');

const ex7Element = document.createElement('input');
ex7Element.setAttribute('id', 'input-test');
ex7Element.setAttribute('type', 'password');
anchorElement.appendChild(ex7Element);

ex7Element.addEventListener('keyup', () => {
  console.log(`El texto introducido es: ${ex7Element.value}`);
})

//8 Ejercicio 8 
console.log('//8 Ejercicio 8 Creando un contador de clicks');

const ex8Button = document.createElement('button');
ex8Button.className = 'ex8Boton';
const ex8ButtonReset = document.createElement('button')
ex8ButtonReset.className = 'ex8Boton';
anchorElement.appendChild(ex8Button);
anchorElement.appendChild(ex8ButtonReset);
ex8Button.textContent = 'Clicks: 0'
ex8ButtonReset.textContent = 'New Game'


let pulsacion = 0;
ex8Button.addEventListener('click', (pulsado) => {
  let contador = pulsado.pointerId;
  pulsacion += contador;
  ex8Button.textContent = `Clicks: ${pulsacion}`;
})
ex8ButtonReset.addEventListener('click', () => {
  pulsacion = 0;
  ex8Button.textContent = `Clicks: ${pulsacion}`;
})

//9 Detectar tecla presionada
console.log('//9 Detectar tecla presionada');

document.addEventListener('keydown', (pressed) => {
  console.log(`La tecla pulsada: ${pressed.key}`);
})

//10 Ejercicio 10 Animar un cuadrado
console.log('//10 Ejercicio 10 Animar un cuadrado');

const ex10Square = document.createElement('div');
ex10Square.className = 'ex3Container__box10';
anchorElement.appendChild(ex10Square);

function animarCuadrado(elemento, tiempoInicio){
  let tiempoActual = performance.now();
  let progreso = (tiempoActual - tiempoInicio) / 1000;

  if (progreso < 1) {
    elemento.style.transform = `translateX(${progreso * 100}px)`;
    requestAnimationFrame(() => animarCuadrado(elemento, tiempoInicio));
  }
  //else if (progreso >= 2) {
    //elemento.style.transform = `translateX(${progreso * 100}px)`;
    //requestAnimationFrame(() => animarCuadrado(elemento, tiempoInicio));
  //}
  else { 
    elemento.style.transform = 'translateX(100px)';
  }
}

ex10Square.addEventListener('click', () => {
  requestAnimationFrame((tiempoInicio) => animarCuadrado(ex10Square, tiempoInicio))
})




//Ejercicio 13 Generar un  Drag and Drop
console.log('//Ejercicio 13 Generar un  Drag and Drop');

const ex13Div = document.createElement('div');

const divDrop = document.createElement('div');
divDrop.className = 'divForDrop';
divDrop.textContent = 'Arrastra elementos aqui';
const divDrag = document.createElement('div');
divDrag.className = 'divForDrag';
divDrag.textContent = 'Arratrame esta';
divDrag.draggable = true;

ex13Div.appendChild(divDrag);
ex13Div.appendChild(divDrop);
anchorElement.appendChild(ex13Div);

const datoParaArrastrar = {
  valor1: 1,
  valor2: 22,
  valor3: 333,
  valor4: 'una vaca',
  valor5: 'dos vacas',
}

divDrag.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('enviaDatos', JSON.stringify(datoParaArrastrar));
  console.log('Pal arrastre');
});

divDrop.addEventListener('dragover', (event) => {
  event.preventDefault();
});

divDrop.addEventListener('drop', (event) => {
  event.preventDefault();
  const datosSoltados = event.dataTransfer.getData('enviaDatos');
  const datosStringifados = JSON.parse(datosSoltados);
  divDrop.textContent = `${datosStringifados.valor1}, \n ${datosStringifados.valor2}, \n ${datosStringifados.valor3}, \n ${datosStringifados.valor4}, \n ${datosStringifados.valor5}.`
  console.log(datosStringifados);
});