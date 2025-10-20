import './style.css'

const anchorElement = document.querySelector("#app");

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
    ex2ParrafoLosCojones.textContent = 'LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones LosCjones ';
    const ex2BotonLosCojones = document.createElement('button'); // crea boton e inserta texto dentro
    ex2BotonLosCojones.textContent = 'Continuar';
    susmuertos.appendChild(ex2ParrafoLosCojones); // inserta parrafo dentro de elemento seleccionado
    susmuertos.appendChild(ex2BotonLosCojones); // inserta boton dentro de elemento seleccionado 
    anchorElement.appendChild(susmuertos); // inserta elemento seleccionado (con su contendido insertado) dentro de div principal
  })

//Ejercicio 3 Crea una Web en HTML
console.log('//Ejercicio 3 Crea una Web en HTML');

const ex3Container = document.querySelector('.ex3Container'); //Selector de elemento en HTML

function ex3CallBoxes(nSquares) { //Recibe numero cuadrados
  for (let n = 0; n < nSquares; n++) { //Repite lo siguiente el numero de cajas introducido
    const numberClass = (n % 3) +1; //Crea numero para clase (cuando sea 4 resto 1, + 1 clase 2, iterando 123123123)
    const ex3DivSquare = document.createElement('div'); //crea un div en cada iteracion
    ex3DivSquare.className = 'ex3Container__box'+numberClass; //asigna clase y numero 1, 2 o 3 en cada iteracion
    ex3Container.appendChild(ex3DivSquare); //inserta los elementos dentro de ex3Container
  }
anchorElement.appendChild(ex3Container); //inserta ex3Container dentro de div principal.
}

ex3CallBoxes(10);

//Ejercicio 4 Crea un elemento “card”
console.log('Ejercicio 4. Crea un elemento “card”');

