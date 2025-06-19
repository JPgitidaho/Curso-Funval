/* PRACTICAR ITERACIONES */
/* fuerza bruta
    optimzando
    refactorizando
*/
// la serie de fibonacci
////  0,1,1,2,3,5,8,13
/* impelementar un programa q pidan un numero N al cliente
q representara la cantidad de elementos de la serie fibonacci
 
n=5
0,1,1,2,3
n=2
0,1
n=7
0,1,1,2,3,5,8
*/

/* resolver */
/* 
let a = 0;
let b = 1;
let c = 0;

let n = parseInt(prompt("ingrese el numero de la serie"));

for (let i = 1; i <= n; i++) {
  if (i === 1) {
    console.log(a);
  }
  if (i === 2) {
    console.log(b);
  }
  if (i > 2) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
} */

/* function nombre(numero) {
  if (numero > 1) {
    console.log("hola amigo");
    nombre(numero - 1);
  } else {
    console.log("bucle terminado");
  }
}
nombre(5);
 */

/* ARRAYS matrices */

let matriz = [
  [5, 3, 12],
  [8, 7, 4],
  [15, 10, 77],
];
/*deberan devoolver la suma de la diagonal principal
este programa debera funcionar con cualquier matriz cuadrada
15 min
*/
let resultado = 0;
for (let j = 0; j < matriz.length; j++) {
  resultado += matriz[j][j];
}

/* FUNCIONES DE ORDEN SUPERIOR */

function saludar(nombre) {
  console.log("hola " + nombre);
}
function despedida(nombre) {
  console.log("chau " + nombre);
}

function superSaludo(nombre, callback) {
  callback(nombre);
}

superSaludo("PEPITO", saludar);

superSaludo("KEVIN", despedida);

let notas = [0, 10, 64, 99];

/* forEach */
notas.forEach((nota) => {
  console.log(nota);
});

/* MAP */
let notasDoble = notas.map((nota) => nota * 2);

/* Filter */
let notasAprob = notas.filter((nota) => nota > 51);
console.log(notasAprob);
/* find */
let notaEncontrada = notas.find((nota) => nota > 9);
console.log(notaEncontrada);
/* findIndex */
let indice = notas.findIndex((nota) => nota > 300);
console.log(indice);
/* includes */
let tiene = notas.includes("64");
console.log(tiene);

/* Fill */
notas.fill(10, 1, 3); //modifica el array original
console.log(notas);
/* slice */
let subnotas = notas.slice(0);

let res = notas.map((nota) => nota * 3).filter((nota) => nota > 40);

/* EJERCICIOS */

const estudiantesFunval = [
  { nombre: "Felipe", nota: 89 },
  { nombre: "Thomas", nota: 34 },
  { nombre: "Pablo", nota: 77 },
  { nombre: "woodleine", nota: 68 },
  { nombre: "Mahonri", nota: 23 },
];
/* extraer los nombres solo de los estudiantes aprobados y mostrarlos en mayusculas 
se consideran apribados los estudiantes con nota arriba de 76
*/
//FELIPE----PABLO------ ESTA PROHIBIDO USAR FOR

const estudiantesFunval2 = [
  { nombre: "Lucía Gómez", pais: "Argentina", edad: 20, notas: [8, 7, 9, 10] },
  { nombre: "Mateo Rojas", pais: "México", edad: 22, notas: [6, 8, 7] },
  {
    nombre: "Valentina Pérez",
    pais: "Chile",
    edad: 21,
    notas: [9, 9, 10, 10, 8],
  },
  { nombre: "Carlos Silva", pais: "Colombia", edad: 23, notas: [7, 6, 7] },
  { nombre: "Sofía Torres", pais: "España", edad: 19, notas: [10, 9, 10] },
  { nombre: "Andrés Castillo", pais: "Perú", edad: 24, notas: [5, 6, 7, 8] },
  { nombre: "Camila Herrera", pais: "Uruguay", edad: 22, notas: [8, 9, 7] },
  { nombre: "Juan López", pais: "Bolivia", edad: 20, notas: [6, 7, 6, 5] },
  {
    nombre: "Isabela Ramírez",
    pais: "Ecuador",
    edad: 21,
    notas: [9, 8, 9, 10],
  },
  { nombre: "Tomás Díaz", pais: "Paraguay", edad: 23, notas: [6, 6, 7, 8] },
  {
    nombre: "Martina Aguilar",
    pais: "Argentina",
    edad: 20,
    notas: [10, 10, 9],
  },
  { nombre: "Diego Méndez", pais: "México", edad: 24, notas: [5, 6, 7, 6] },
  { nombre: "Paula Vargas", pais: "Colombia", edad: 22, notas: [8, 9, 10] },
  { nombre: "Alejandro Núñez", pais: "Chile", edad: 21, notas: [7, 7, 6, 7] },
  { nombre: "Fernanda Soto", pais: "España", edad: 19, notas: [10, 9, 10, 9] },
];

/* Obtener solo los nombres de los estudiantes:
Crear un nuevo array con objetos que incluyan nombre y promedio de notas:D
Filtrar estudiantes mayores de 21 años:D
Filtrar estudiantes con promedio mayor o igual a 8:D
Imprimir el nombre y país de cada estudiante:D
Imprimir todos los promedios (sin guardar):D
Encontrar al primer estudiante de México:D
Encontrar al estudiante que se llama "Paula Vargas":D
Buscar el índice del estudiante llamado "Tomás Díaz":D
Verificar si el país "Brasil" está en la lista de países de los estudiantes:
Obtener nombres de estudiantes que tengan al menos una nota menor a 6:
Contar cuántos estudiantes son de Argentina:
Ordenar estudiantes por edad de menor a mayor:
mostrar el pais q tiene mayor cantidad de estudiantes aprobados
*/

function promedioNotas(arrayNotas) {
  const valorInicial = 0;
  let promedio = arrayNotas.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
  }, valorInicial);
  promedio = promedio / arrayNotas.length;
  return promedio;
}

let nuevoArray = estudiantesFunval2.map((estudiante) => {
  let obj = {};
  obj.nombre = estudiante.nombre;
  obj.promedio = promedioNotas(estudiante.notas).toFixed(1);
  return obj;
});

//console.log(nuevoArray);

let arrayMayores = estudiantesFunval2.filter(
  (estudiante) => estudiante.edad > 21
);
//console.log(arrayMayores);

let estudianteReconocido = nuevoArray.filter((estudiante) => {
  return estudiante.promedio >= 8;
});
//console.log(estudianteReconocido);

estudiantesFunval2.forEach((estudiante) => {
  console.log("nombre: " + estudiante.nombre + " pais: " + estudiante.pais);
});

nuevoArray.forEach((estudiante) => {
  console.log(estudiante.promedio);
});

let Luis = estudiantesFunval2.find((estudiante) => {
  return estudiante.pais === "México";
});

let estudianteP = estudiantesFunval2.find((estudiante) => {
  return estudiante.nombre === "Paula Vargas";
});

let indiceEestudainte = estudiantesFunval2.findIndex((estudiante) => {
  return estudiante.nombre === "Tomás Díaz";
});

let numeros = [1, 100, 25, 10];
numeros.sort((a, b) => b - a);
/* numeros.reverse(); */
console.log(numeros); // [1, 10, 25, 100]
