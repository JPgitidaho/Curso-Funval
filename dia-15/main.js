/* SELECCION DE ELEMENTOS */

let titulo = document.getElementById("titulo");
let parrafo = document.querySelector(".parrafo");
let contendor = document.querySelector(".contenedor");
let imagen = document.querySelector("#imagen-jesucristo");
/* MODIFICADORES DE ELEMENTOS */

titulo.textContent = "Hola estudiantes de funval";

/* contendor.innerHTML = "<p>hola kevin ya te recuperaste?</p>"; */

/* modificadores de atributos y clases */
/* atributos */
console.log(imagen.getAttribute("src"));
imagen.setAttribute(
  "src",
  "https://www.shutterstock.com/image-illustration/jesus-christ-holding-lamb-his-260nw-2352359419.jpg"
);
/* clases */
/* console.log(contendor.classList);

contendor.classList.add("kevin");

contendor.classList.remove("kevin");

contendor.classList.toggle("kevin");

console.log(contendor.classList.contains("pablo")); */

/* contendor.innerHTML = "";

for (let i = 1; i <= 5; i++) {
  contendor.innerHTML += `

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
`;
}
 */
/* let frutas = [
  "manzana",
  "pera",
  "papaya",
  "mandarinas",
  "banana",
  "naranjas",
  "kiwi",
  "chirimoya",
];
let lista = document.querySelector(".lista");
for (let j = 0; j < frutas.length; j++) {
  lista.innerHTML += `<li>${frutas[j]}</li>`;
}

lista.innerHTML = "<li>manzana</li>"; */

let estudiantes = [
  {
    nombre: "Felipe",
    edad: 33,
    pais: "Chile",
  },
  {
    nombre: "Pablo",
    edad: 28,
    pais: "Argentina",
  },
  {
    nombre: "Juana",
    edad: 22,
    pais: "Chile",
  },
  {
    nombre: "Mahonri",
    edad: 18,
    pais: "Guatemala",
  },
  {
    nombre: "Carlo",
    edad: 50,
    pais: "Peru",
  },
  {
    nombre: "Thomas",
    edad: 33,
    pais: "Argentina",
  },
  {
    nombre: "Johan",
    edad: 100,
    pais: "Chile",
  },
];

/* let tabla = document.querySelector(".contenido-tabla");

for (let i = 0; i < estudiantes.length; i++) {
  tabla.innerHTML += `<tr>
            <td>${estudiantes[i].nombre}</td>
            <td>${estudiantes[i].edad}</td>
            <td>${estudiantes[i].pais}</td>
          </tr>`;
} */

for (let edwin = 0; edwin < estudiantes.length; edwin++) {
  contendor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiantes[edwin].nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">EDAD:${estudiantes[edwin].edad}</p>
<p class="font-normal text-gray-700 dark:text-gray-400">PAIS:${estudiantes[edwin].pais}</p>
</a>
`;
}
