/* variables de los elementos seleccionados */
let cabecera = document.querySelector(".cabecera");
let estudiantes = document.querySelector(".estudiantes-general");
let estudiantesAprobados = document.querySelector(".estudiantes-aprobados");
let estudiantesReprobados = document.querySelector(".estudiantes-reprobados");
/* ARRAY DE OBJETOS ESTUDIANTES */
let estudiantesFunval = [
  {
    tipo: "profesor",
    nombre: "Kevin",
    edad: 28,
    pais: "Bolivia",
    imagen:
      "https://w7.pngwing.com/pngs/148/1010/png-transparent-spiderman-logo-mask-comics-and-fantasy-spiderman-thumbnail.png",
  },
  {
    tipo: "estudiante",
    nombre: "Felipe",
    edad: 23,
    pais: "Chile",
    imagen:
      "https://i.pinimg.com/736x/10/75/66/10756645923d3de335533157b1ae0a0e.jpg",
    notas: [100, 34, 31, 25],
  },
  {
    tipo: "estudiante",
    nombre: "Pablo",
    edad: 33,
    pais: "Argentina",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWVLoembHh_Lca1_c1_Xl8DDTuvZaPCI-UNA&s",
    notas: [10, 90, 20, 5],
  },
  {
    tipo: "estudiante",
    nombre: "Edwin",
    edad: 39,
    pais: "Colombia",
    imagen:
      "https://www.madinjapan.fr/35800-large_default/the-flash-figurine-batman-modern-suit-movie-masterpiece-hot-toys.jpg",
    notas: [0, 10, 31, 25],
  },
  {
    tipo: "estudiante",
    nombre: "Luis",
    edad: 25,
    pais: "Mexico",
    imagen:
      "https://alfabetajuega.com/hero/2023/11/halo-infinite.1699531337.9737.jpg?width=768&aspect_ratio=16:9&format=nowebp",
    notas: [100, 90, 88, 0],
  },
  {
    tipo: "estudiante",
    nombre: "Johan",
    edad: 25,
    pais: "Chile",
    imagen:
      "https://snworksceo.imgix.net/bsd/e08b54af-db5d-4a31-be34-260e5a6da34a.sized-1000x1000.jpg?w=1000",
    notas: [33, 60, 98, 66],
  },
  {
    tipo: "estudiante",
    nombre: "Carlo",
    edad: 37,
    pais: "Peru",
    imagen:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/07/iron-man-vr-1983107.jpg?tf=3840x",
    notas: [77, 45, 32, 7],
  },
  {
    tipo: "estudiante",
    nombre: "Alan",
    edad: 29,
    pais: "Argentina",
    imagen:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_39.jpg",
    notas: [100, 88, 51, 77],
  },
  {
    tipo: "estudiante",
    nombre: "Thomas",
    edad: 21,
    pais: "Argentina",
    imagen:
      "https://i.pinimg.com/564x/9f/19/96/9f1996bce265edcec6050469dd875963.jpg",
    notas: [45, 35, 99, 68],
  },
];
/* insersion de la logica */
for (let i = 0; i < estudiantesFunval.length; i++) {
  if (estudiantesFunval[i].tipo === "profesor") {
    cabecera.innerHTML += `<h2 class="flex justify-center items-center">${estudiantesFunval[i].nombre}</h2>
      <img src="${estudiantesFunval[i].imagen}" alt="" class="size-15 rounded-full">`;
  } else {
    estudiantes.innerHTML += `
<a href="#" class="flex flex-col w-full md:justify-between p-4 md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiantesFunval[i].nombre}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">EDAD: ${estudiantesFunval[i].edad}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">PAIS: ${estudiantesFunval[i].pais}</p>
        </div>
    <img class="size-20 rounded-full" src="${estudiantesFunval[i].imagen}" alt="">
</a>
`;
  }
}

/* funciones reutilizables */

function promedio(notas) {
  let promedio = 0;
  for (let index = 0; index < notas.length; index++) {
    promedio += notas[index] / notas.length;
  }
  return promedio;
}

for (let i = 0; i < estudiantesFunval.length; i++) {
  if (estudiantesFunval[i].tipo === "estudiante") {
    let prom = promedio(estudiantesFunval[i].notas);
    if (prom >= 51) {
      estudiantesAprobados.innerHTML += `
<a href="#" class="flex flex-col w-full text-white md:justify-between p-4 md:flex-row items-center bg-green-500 border border-gray-200 rounded-lg shadow-sm  hover:bg-green-700 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">${estudiantesFunval[i].nombre}</h5>
        <p class="mb-3 font-normal  dark:text-gray-400">EDAD: ${estudiantesFunval[i].edad}</p>
        <p class="mb-3 font-normal  dark:text-gray-400">PAIS: ${estudiantesFunval[i].pais}</p>
        <p class="mb-3 font-normal  dark:text-gray-400">PROMEDIO: ${prom}</p>
        </div>
    <img class="size-20 rounded-full" src="${estudiantesFunval[i].imagen}" alt="">
</a>
`;
    } else {
      estudiantesReprobados.innerHTML += `
<a href="#" class="flex flex-col w-full text-white md:justify-between p-4 md:flex-row items-center bg-red-600 border border-gray-200 rounded-lg shadow-sm  hover:bg-red-800 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiantesFunval[i].nombre}</h5>
        <p class="mb-3 font-normal  dark:text-gray-400">EDAD: ${estudiantesFunval[i].edad}</p>
        <p class="mb-3 font-normal  dark:text-gray-400">PAIS: ${estudiantesFunval[i].pais}</p>
        <p class="mb-3 font-normal  dark:text-gray-400">PROMEDIO: ${prom}</p>
        </div>
    <img class="size-20 rounded-full" src="${estudiantesFunval[i].imagen}" alt="">
</a>
`;
    }
  }
}
