//Extra18

/* Crea un pequeño programa en JavaScript (puede ejecutarse en consola, como en Node.js o desde el inspector del navegador) que permita:

Guardar tareas en una lista (array).

Mostrar todas las tareas.

Marcar una tarea como completada.

Eliminar una tarea.

Salir del programa.

No necesitas usar HTML, solo console.log(), prompt() o readline (si estás en Node.js).*/

let Ext18Tasks = [];

if (localStorage.getItem("tareas")) {
  Ext18Tasks = localStorage.getItem("tareas");
  Ext18Tasks = JSON.parse(Ext18Tasks);
}

function guardarCambios() {
  localStorage.setItem("tareas", JSON.stringify(Ext18Tasks));
}

function GenID() {
  let idAsignado = 1;
  if (Ext18Tasks.length === 0) {
    return 1;
  } else {
    const IDsEnUSo = Ext18Tasks.map((tarea) => tarea.id);
    while (IDsEnUSo.includes(idAsignado)) {
      idAsignado++;
    }
    return idAsignado;
  }
}

function buelcom() {
  const pendientes = Ext18Tasks.filter((tarea) => tarea.isDone !== true);
  if (pendientes.length > 0) {
    alert(
      `Bienvenio a "Hoy no, mañana!"\nTienes ${pendientes.length} tareas por hacer. A trabajar!!`
    );
  } else {
    alert(
      `Bienvenio a "Hoy no, mañana!"\nNo tienes tareas pendientes, crea una, no te pago por dormir`
    );
  }
  funcion0();
}

buelcom();

function funcion0() {
  console.log("1.- Crear una tarea.");
  console.log("2.- Ver todas las tareas.");
  console.log("3.- Marcar una tarea como completada.");
  console.log("4.- Eliminar una tarea");
  console.log("5.- Salir del programa.");

  let entradaPromptMainMenu = prompt("Seleccione una accion:");

  if (entradaPromptMainMenu == 1) {
    crearTarea();
  } else if (entradaPromptMainMenu == 2) {
    mostrarTareas();
  } else if (entradaPromptMainMenu == 3) {
    marcarTarea();
  } else if (entradaPromptMainMenu == 4) {
    eliminarTarea();
  } else if (entradaPromptMainMenu == 5) {
    salirPrograma();
  } else {
    alert("Comando no valido");
    funcion0();
  }
}

function crearTarea() {
  console.log("Introduzca nombre de tarea o pulse 0 para volver atras...");
  let entradacrearTarea = prompt("Tarea nueva:");

  if (entradacrearTarea == 0) {
    funcion0();
  } else if (!entradacrearTarea || entradacrearTarea.trim() === "") {
    alert("El campo no puede estar vacio");
    crearTarea();
  } else {
    Ext18Tasks.push({
      id: GenID(),
      isDone: false,
      name: entradacrearTarea,
    });
    alert(`Tarea creada: ${entradacrearTarea}`);
    guardarCambios();
    funcion0();
  }
}
function mostrarTareas() {
  Ext18Tasks.sort((a, b) => a.id - b.id);
  Ext18Tasks.forEach((tarea) => {
    console.log(
      `#${tarea.id} - ${tarea.name} - ${
        tarea.isDone ? "Terminada" : "Pendiente"
      }`
    );
  });
  funcion0();
}
function marcarTarea() {
  let entradamarcarTarea = prompt(
    "Introduzca numero de tarea para alternar completada o pendiente:"
  );

  if (entradamarcarTarea == 0) {
    funcion0();
  } else {
    Ext18Tasks.forEach((tarea) => {
      if (entradamarcarTarea == tarea.id) {
        tarea.isDone = !tarea.isDone;
        alert(
          `La tarea ${tarea.name} esta ahora ${
            tarea.isDone ? "terminada" : "pendiente"
          }`
        );
      }
    });
    guardarCambios();
    funcion0();
  }
}

function eliminarTarea() {
  let entradaeliminarTarea = prompt("Introduzca numero de tarea para eliminarla:");
  entradaeliminarTarea = parseInt(entradaeliminarTarea);

  if (entradaeliminarTarea == 0) {
    funcion0();
  } else {
    Ext18Tasks = Ext18Tasks.filter((tarea) => tarea.id !== entradaeliminarTarea);
    guardarCambios();
    mostrarTareas();
  }
}

function salirPrograma() {
  guardarCambios();

  return console.log("Los cambios se han guardado en local");
}
