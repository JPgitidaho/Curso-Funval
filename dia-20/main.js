/* import { renderizar, renderizarClientesFrecuentes } from "./funciones.js";
import { cliente } from "./data.js";

let lista = document.querySelector("#lista-clientes");
let frecuentes = document.querySelector("#clientes-frecuentes");
for (let i = 0; i < cliente.length; i++) {
  renderizar(cliente[i], lista);
}
for (let i = 0; i < cliente.length; i++) {
  renderizarClientesFrecuentes(cliente[i], frecuentes);
} */
/* renderizar el cliente completo 
funcion para traer solo a los clientes q hayan realizado mas de una compra
renderizar en una cards en tablas  en listas
tiempo :45 mins mas 15 min de receso
*/

/* GUARDAR ELEMENTOS EN LOCALSTORAGE */
/* 
localStorage.setItem("nombre", "Kevin");
localStorage.setItem("nombre1", "Felipe");
localStorage.setItem("nombre2", "Bastian");
 */
/* acceder a elementos guardados en localstorage */
/* 
console.log(localStorage.getItem("nombre")); */

/* eliminar elementos en localstoreage */

//localStorage.removeItem("nombre");

/* limpiar nuestro local storage */
/* 
localStorage.clear(); */

/* GUARDAR OBJETOS Y ARRAYS */
/* 
let notas = [1, 2, 3, 4, 5, 6];

let estudiantes = [
  {
    nombre: "juan",
    edad: 18,
    pais: "Argentina",
  },
  {
    nombre: "pedro",
    edad: 28,
    pais: "Chile",
  },
];

localStorage.setItem("estudiantes", JSON.stringify(estudiantes)); */
/* ACCEDER A UN ARRAY U OBJETO EN LOCAL */
//console.log(JSON.parse(localStorage.getItem("estudiantes")));

/* REALIZAR UN GESTOR DE LIBROS FAVORITOS

CREAR UNA APLICACION WEB Q PERMITA

1 AGREGAR NUEVOS LIBROS :D
2 MOSTRAR TODOS LOS LIBROS  :D
3 ELIMINAR UN LIBRO DE LA LISTA DE LIBROS FAVORITOS
4 RENDERIZAR LOS LIBROS DE FORMA DINAMICA EN EL HTML
*/

let libros = [
  {
    id: 1,
    nombre: "Harry Potter",
    autor: "J.K ROWLING",
    año: 1998,
  },
  {
    id: 2,
    nombre: "El Libro De Mormon",
    autor: "Varios",
    año: 1830,
  },
  {
    id: 3,
    nombre: "EL PRINCIPITO",
    autor: "Antoine :v",
    año: 2004,
  },
];

let tabla = document.querySelector("#tabla");
let arraynuevo = JSON.parse(localStorage.getItem("books"));

function renderizarLibros(libros) {
  tabla.innerHTML = "";
  for (let i = 0; i < libros.length; i++) {
    tabla.innerHTML += `<tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ${libros[i].nombre}
              </th>
              <td class="px-6 py-4">${libros[i].autor}</td>
              <td class="px-6 py-4">${libros[i].año}</td>
              <td class="px-6 py-4"><button class="bg-blue-800 text-white p-3 rounded-2xl" id="${libros[i].id}">eliminar</button></td>
            </tr>
    `;
  }
}
renderizarLibros(arraynuevo);
let btn = document.querySelector("#btn");
let modal = document.querySelector("#modalsito");
let closeModal = document.querySelector("#close");
let formulario = document.querySelector("#formulario");

btn.addEventListener("click", function (e) {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", function (e) {
  modal.classList.add("hidden");
});

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  modal.classList.add("hidden");
  const formularioData = new FormData(formulario);
  let nombreLibro = formularioData.get("nameBook");
  let nombreAutor = formularioData.get("nameAutor");
  let year = formularioData.get("yearPublic");
  let nuevolibro = {};
  nuevolibro.nombre = nombreLibro;
  nuevolibro.autor = nombreAutor;
  nuevolibro.año = year;

  let arrayLocal = JSON.parse(localStorage.getItem("books"));
  nuevolibro.id = arrayLocal.length + 1;
  arrayLocal.push(nuevolibro);
  console.log(arrayLocal);
  renderizarLibros(arrayLocal);
  localStorage.setItem("books", JSON.stringify(arrayLocal));
});

tabla.addEventListener("click", function (e) {
  console.log(e.target.id);
  let idBoton = e.target.id;
  let arrayLocal = JSON.parse(localStorage.getItem("books"));
  let arrayLocal2 = [];
  for (let j = 0; j < arrayLocal.length; j++) {
    if (idBoton != arrayLocal[j].id) {
      arrayLocal2.push(arrayLocal[j]);
    }
  }
  console.log(arrayLocal2);
  renderizarLibros(arrayLocal2);
  localStorage.setItem("books", JSON.stringify(arrayLocal2));
});
