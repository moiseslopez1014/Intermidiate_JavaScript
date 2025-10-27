//import './style.css'

const anchorElement = document.querySelector("#app");
const separacion = document.createElement('hr');

// Exercise 1 Acceso al DOM
console.log('// Exercise 1 Acceso al DOM');

const pConIdUnico = document.getElementById('idUnicoParrafo');
console.log(pConIdUnico);

const ex1MismaClase = document.querySelectorAll('.ex1Clase');
console.log(ex1MismaClase);

//Exercise 2 Cambiar el contenido de un elemento del DOM
console.log('//Exercise 2 Cambiar el contenido de un elemento del DOM');
anchorElement.appendChild(separacion);

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
anchorElement.appendChild(separacion);

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
anchorElement.appendChild(separacion);

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
anchorElement.appendChild(separacion);


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
anchorElement.appendChild(separacion);

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
anchorElement.appendChild(separacion);

const ex7Element = document.createElement('input');
ex7Element.setAttribute('id', 'input-test');
ex7Element.setAttribute('type', 'password');
anchorElement.appendChild(ex7Element);

ex7Element.addEventListener('keyup', () => {
  console.log(`El texto introducido es: ${ex7Element.value}`);
})

//8 Ejercicio 8 
console.log('//8 Ejercicio 8 Creando un contador de clicks');
anchorElement.appendChild(separacion);

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
anchorElement.appendChild(separacion);

document.addEventListener('keydown', (pressed) => {
  console.log(`La tecla pulsada: ${pressed.key}`);
})

//10 Ejercicio 10 Animar un cuadrado
console.log('//10 Ejercicio 10 Animar un cuadrado');
anchorElement.appendChild(separacion);

const ex10Square = document.createElement('div');
ex10Square.className = 'ex3Container__box10';
anchorElement.appendChild(ex10Square);

function animarCuadrado(elemento, tiempoInicio){
  let tiempoActual = performance.now();
  let progreso = (tiempoActual - tiempoInicio) / 2000;

  if (progreso < 1) {
    let x;
    if (progreso < 0.5) {
      x = progreso * 2 * 100;
    }
    else{
      x = (1 - (progreso - 0.5) * 2) * 100;
    }

    elemento.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(() => animarCuadrado(elemento, tiempoInicio));
  }

  else { 
    elemento.style.transform = 'translateX(0px)';
  }
}

ex10Square.addEventListener('click', () => {
  requestAnimationFrame((tiempoInicio) => animarCuadrado(ex10Square, tiempoInicio))
})

//11 cambiar color transicion
console.log('//11 cambiar color transicion');
const separacion11 = document.createElement('hr');
anchorElement.appendChild(separacion11);


const ex11Div = document.createElement('div');

ex11Div.className = 'ex3Container__box10'
anchorElement.appendChild(ex11Div);

const botonTransicion = document.createElement('button');
botonTransicion.setAttribute('id', 'botonTransicion');
botonTransicion.textContent = 'Transicionar color';
anchorElement.appendChild(botonTransicion);

let colorAzul = 'blue';
let colorAmarillo = 'yellow'

function ex11Transition() {
  ex11Div.style.transition = 'background-color 0.5s, transform 0.5s';
  if (ex11Div.style.backgroundColor === colorAzul) {
  ex11Div.style.backgroundColor = colorAmarillo; }
  else {ex11Div.style.backgroundColor = colorAzul}
}

botonTransicion.addEventListener('click', ex11Transition);


//12 Rotar 360
console.log('//12 rotar 360');
const separacion12 = document.createElement('hr');
anchorElement.appendChild(separacion12);

const ex12Div = document.createElement('div');
ex12Div.className = 'ex3Container__box10'
anchorElement.appendChild(ex12Div);

function ex12Rotate (element, timeStart) {
  const timeNow = performance.now();
  const progress = (timeNow - timeStart) / 1000;

  if (progress < 1) {
    element.style.transform = `rotate(${progress*360}deg)`;
    requestAnimationFrame(() => ex12Rotate(element, timeStart));
  }
  else {
    element.style.transform = `rotate(360deg)`;
  }
}

ex12Div.addEventListener('click', () => {
  requestAnimationFrame((timeStart) => ex12Rotate(ex12Div, timeStart));
});


//Ejercicio 13 Generar un  Drag and Drop
console.log('//Ejercicio 13 Generar un  Drag and Drop');
anchorElement.appendChild(separacion);


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


//Ejercicios 14 Escope local y global
anchorElement.appendChild(separacion);
console.log("//Ejercicios 14 Escope local y global");

const ex14Div = document.createElement("div");
anchorElement.appendChild(ex14Div);

const constScopeGlobal = "Const Padre";
var varScopeGlobal = "Var Padre";
let letScopeGlobal = "Let Padre";

console.log(constScopeGlobal,varScopeGlobal,letScopeGlobal);

for (let i = 0; i <= 0; i++) {
  const constScopeBucle = 'Const nieto';
  var varScopeBucle = 'Var nieto';
  let letScopeBucle = 'Let nieto';
  console.log(constScopeBucle,varScopeBucle,letScopeBucle);
  console.log(constScopeGlobal,letScopeGlobal,varScopeGlobal);
}

function pruebaScope() {
  const constScopeFn = 'Const hijo';
  var varScopeFn = 'Var hijo';
  let letScopeFn = 'Let hijo';
  console.log(constScopeFn,varScopeFn,letScopeFn);
    console.log(constScopeGlobal,letScopeGlobal,varScopeGlobal);

}
pruebaScope();

console.log(varScopeBucle);
//console.log(letScopeBucle);
//console.log(varScopeFn);
//console.log(constScopeBucle);


// Ejercicio 15 setTimeOut
console.log('// Ejercicio 15 setTimeOut');

const ex15Div = document.createElement("div");

const ex15Parrafo = document.createElement('p');
ex15Parrafo.textContent = 'Esperando mensaje...';

const ex15Boton = document.createElement('button');
ex15Boton.setAttribute('id', 'botonEx15');
ex15Boton.textContent = 'Pulsa este boton para crear un mensaje con TimeOut...'


ex15Div.appendChild(ex15Boton);
ex15Div.appendChild(ex15Parrafo);
anchorElement.appendChild(ex15Div);

ex15Boton.addEventListener('click', () => { //crea escuchador de evento por click que
  setTimeout(()=>{ // genera un timeout
    ex15Parrafo.textContent = 'Mensaje TimeOut' // cambia mensaje de un parrafo
  },3000) // cuando pase el tiempo indicado en ms
});

// Ejercicio 16 setInterval y clearInterval
console.log('// Ejercicio 16 setInterval y clearInterval');

const ex16Div = document.createElement("div");

let ex16Contador = 0; // creamos un contador
const ex16Parrafo = document.createElement('p');
ex16Parrafo.textContent = `Contador: ${ex16Contador}`; // creamos un texto que muestre el contador

const ex16Boton = document.createElement('button');
ex16Boton.setAttribute('id', 'botonEx16');
ex16Boton.textContent = 'Inicia Intervalo'; // boton que incia

const ex16BotonReset = document.createElement('button');
ex16BotonReset.setAttribute('id', 'botonEx16Reset');
ex16BotonReset.textContent = 'Resetea intervalo'; // boton para el reset interval


ex16Div.appendChild(ex16Boton);
ex16Div.appendChild(ex16BotonReset);
ex16Div.appendChild(ex16Parrafo);
anchorElement.appendChild(ex16Div);

let ex16Interval; //creamos una variable de intervalo, porque queremos acceder a el en dos eventlistener diferentes

ex16Boton.addEventListener('click', ()=>{ // evento por click en boton intervalo
  ex16Interval = setInterval(() => {// crea intervalo
    ex16Contador += 1; // que suma 1 al contador
    ex16Parrafo.textContent = `Contador: ${ex16Contador}`; //vuelve a mostrar el parrafo, si solo sumamos contador el parrafo no se actualiza
  }, 1000)// cada segundo
});

ex16BotonReset.addEventListener('click', ()=> { //evento por click en boton clearinterval
  clearInterval(ex16Interval); // clear interval del intervalo creado
  ex16Contador = 0; // resetea el contador a cero
  ex16Parrafo.textContent = `Contador: ${ex16Contador}`; //Refresca el parrafo para mostrar el reseteo
});


//Ejercicio 17 Capturar valores de formulario
console.log('//Ejercicio 17 Capturar valores de formulario');

//div and form
const ex17Div = document.createElement('div');
const ex17Form = document.createElement('form');
ex17Form.setAttribute('id', 'form17');

//name
const ex17LabelName = document.createElement('label');
ex17LabelName.setAttribute('for', 'ex17Name');
ex17LabelName.textContent = 'Name: ';
const ex17InputName = document.createElement('input');
ex17InputName.setAttribute('type', 'text');
ex17InputName.setAttribute('id', 'ex17Name');
ex17InputName.setAttribute('name', 'ex17Name');
ex17InputName.setAttribute('placeholder', 'Your name');

//address
const ex17LabelAddress = document.createElement('label');
ex17LabelAddress.setAttribute('for', 'ex17Address');
ex17LabelAddress.textContent = 'Address: ';
const ex17InputAddress = document.createElement('input');
ex17InputAddress.setAttribute('type', 'text');
ex17InputAddress.setAttribute('id', 'ex17Address');
ex17InputAddress.setAttribute('name', 'ex17Address');
ex17InputAddress.setAttribute('placeholder', 'Your address');

//email
const ex17LabelEmail = document.createElement('label');
ex17LabelEmail.setAttribute('for', 'ex17Email');
ex17LabelEmail.textContent = 'E-mail: ';
const ex17InputEmail = document.createElement('input');
ex17InputEmail.setAttribute('type', 'email');
ex17InputEmail.setAttribute('id', 'ex17Email');
ex17InputEmail.setAttribute('name', 'ex17Email');
ex17InputEmail.setAttribute('placeholder', 'Your@email.address');

//age
const ex17LabelAge = document.createElement('label');
ex17LabelAge.setAttribute('for', 'ex17Age');
ex17LabelAge.textContent = 'Age: ';
const ex17InputAge = document.createElement('input');
ex17InputAge.setAttribute('type', 'number');
ex17InputAge.setAttribute('id', 'ex17Age');
ex17InputAge.setAttribute('name', 'ex17Age');
ex17InputAge.setAttribute('placeholder', 'Your age');

//submit
const ex17ButtonSubmit = document.createElement('button');
ex17ButtonSubmit.setAttribute('type', 'submit');
ex17ButtonSubmit.textContent = 'Send data';

//appendss!

ex17Form.appendChild(ex17LabelName);
ex17Form.appendChild(ex17InputName);
ex17Form.appendChild(ex17LabelAddress);
ex17Form.appendChild(ex17InputAddress);
ex17Form.appendChild(ex17LabelEmail);
ex17Form.appendChild(ex17InputEmail);
ex17Form.appendChild(ex17LabelAge);
ex17Form.appendChild(ex17InputAge);
ex17Form.appendChild(ex17ButtonSubmit);

ex17Div.appendChild(ex17Form);

anchorElement.appendChild(ex17Div);

ex17Form.addEventListener('submit', (event) => {
  event.preventDefault();
  ex18Validation();

  if (errors.length === 0) {
  console.log(ex17InputName.value);
  console.log(ex17InputAddress.value);
  console.log(ex17InputEmail.value);
  console.log(ex17InputAge.value);
  }
  else {
    ex18ValidationBox.innerHTML = errors.join('<br>');
    ex17Div.appendChild(ex18ValidationBox);
    setTimeout(() => {
      if (ex17Div.contains(ex18ValidationBox)) {
        ex17Div.removeChild(ex18ValidationBox);
      }
    }, 3000);
  }
})

//Ejercicio 18 — Validación básica
console.log('Ejercicio 18 — Validación básica');

const ex18ValidationBox = document.createElement('div');
ex18ValidationBox.className = 'validation-box';

const errors = [];
function ex18Validation() {
  errors.length = 0;
  if (!ex17InputName.value.trim()) {
    errors.push("Name can't be empty");
  }
  if (ex17InputAddress.value.trim().length < 10) {
    errors.push("Address must have minimum 10 characters");
  }
  if (!ex17InputEmail.value.includes('@')) {
    errors.push('Email must have @ symbol');
  }
  if (!ex17InputAge.value || Number(ex17InputAge.value) < 18) {
    errors.push('Age must be filled and be at least 18');
  }

}


//Extra18

/* Crea un pequeño programa en JavaScript (puede ejecutarse en consola, como en Node.js o desde el inspector del navegador) que permita:

Guardar tareas en una lista (array).

Mostrar todas las tareas.

Marcar una tarea como completada.

Eliminar una tarea.

Salir del programa.

No necesitas usar HTML, solo console.log(), prompt() o readline (si estás en Node.js).*/

/*

const Ext18Jobs = [];

let selectedProgram = 0;
do {
  listProgram();
}
while (!selectedProgram === 5);

function listProgram(num) {
  prompt();
}

*/

//Ejercicio 19 fetchGET basico

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {
  if (!res.ok){
    throw new Error (`Error ${res.status}`);
  }
  return res.json();
})
.then(data => {
  const datosProcesados = JSON.stringify(data.map(user => user.name));
  console.log('Lista de usuarios: ', datosProcesados);

})
.catch(err => {
  console.error(err.message);
});

//Ejercicio 20

fetch('https://jsonplaceholder.typicode.com/useers')
.then(res => {
  if (!res.ok){
    throw new Error (`Error ${res.status}`);
  }
  return res.json();
})
.then(data => {
  const datosProcesados = JSON.stringify(data.map(user => user.name));
  console.log('Lista de usuarios: ', datosProcesados);
})
.catch(err => {
  console.error(err.message);
});

//Ejercicio 21

const datos21 = {
    "userId": 1,
    "title": "No tengo ni idea de lo que pasa",
    "body": "Imagina que en realidad no entiendo nada..."
  }

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(datos21),
}
)
.then(res => {
  if (!res.ok){
    throw new Error (`Error ${res.status}`);
  }
  return res.json();
})
.then(data => {
  console.log('Post realizado: ', data);
})
.catch(err => {
  console.error(err.message);
});

//Ejercicio 22

const datos22 = {
    "userId": 5,
    "id": 5,
    "title": "Er javaescri",
    "body": "e pa zuperdotao de ezo... loh frikii"
  }

fetch('https://jsonplaceholder.typicode.com/posts/5', {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(datos22),
}
)
.then(res => {
  if (!res.ok){
    throw new Error (`Error ${res.status}`);
  }
  return res.json();
})
.then(data => {
  console.log(data);
})
.catch(err => {
  console.error(err.message);
});

//Ejercicio 23 patch

const datos23 = {
    "title": "Er javaescri",
  }

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(datos23),
}
)
.then(res => {
  if (!res.ok){
    throw new Error (`Error ${res.status}`);
  }
  return res.json();
})
.then(data => {
  console.log(data);
})
.catch(err => {
  console.error(err.message);
});

// Ejercicio 24 DELETE


fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
  headers: {
    'Content-type': 'application/json',
  },
}
)
.then(res => {
  if (!res.ok){
    throw new Error (`Error ${res.status}`);
  }
  console.log(res.status);
  return res.json();
})
.catch(err => {
  console.error(err.message);
});


//Async Await

//Ejercicio 25 Get con AsyncAwait (URL modificada para que de error para ejercicio 26)

async function ex25GET() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/postssss');
    if (!res.ok) throw new Error(`Error HTTPS: ${res.status}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
}
ex25GET();

//Ejercicio 27 POST con Async Await

const datos27 = JSON.stringify({
    "userId": 1,
    "title": "Async Await",
    "body": "in the java, the mighty Java... (8)"
  });

async function ex27POST() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        accept: 'application/json',
      },
      body: datos27,
    });
    if (!res.ok) throw new Error('Error HTTPS: ', res.status);
    const data = await res.json();
    console.log('EJERCICIO 27 DATOS:',data);
  } catch (err) {
    console.error(err.message);
  }
}

ex27POST();

//Ejercicio 28 PUT con Async Await

async function ex28PUT() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        "userId": 33,
        "title": "PUT",
        "body": "in the java, the mighty Java... (8)",
        "description": "testing new property",
      }),
    });
    if (!res.ok) throw new Error('Error EX28HTTPS: ', res.status);
    const data = await res.json();
    console.log('EX28 DATA PUT: ', data);
  } catch (error) {
    console.error(error.message);
  }
}

ex28PUT();

//Ejercicio 29 PATCH con Async Await

async function ex29PATCH() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        body: 'testing new body using PATCH',
      }),
    });
    if (!res.ok) throw new Error('EX29ERROR: ', res.status);
    const data = await res.json();
    console.log('EX29 DATA PATCH: ', data);
  } catch (error) {
    console.error(error.message);
  }
}

ex29PATCH();

// Ejercicio 30 DELETE con Async Await

async function ex30DELETE() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (!res.ok) throw new Error('EX30 ERROR: ', res.status);
    console.log('EX30 DELETE OK: ', res.status);
  } catch (error) {
    console.error(error.message);
  }
}

ex30DELETE();

