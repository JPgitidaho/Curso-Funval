/* ARRAY  
CM DECLARAR UN ARRAY O COMO CREARLO
*/
let kevin = "NOmbre";
let miArray = [kevin, 322, true, 32.7];
let arrayLoco = ["pablo", 777];
//console.log(miArray[1]);

/* METODOS ARRAYS */

//console.log(miArray.length);
/* metodos de incersion */

miArray.push("Pablo");

miArray.unshift("felipe", "Thomas");

/* metodos de eliminacion */
miArray.pop();

miArray.shift();

/* REGLA DE ORO IMPORTANTISIMO!!!!!!!
SIEMPRE Q USTEDES VEAN UN ARRAY SU INSTINTO PRINCIPAL SERA ITERARLO
*/
for (let index = 0; index < miArray.length; index++) {
  console.log(miArray[index]);
}

/* 
1.Crear un array de frutas y mostrarlo
2.Mostrar el primer y el último elemento de un array
3.Agregar un elemento al final de un array
4.Eliminar el primer elemento del array
5.Sumar todos los números de un array
6.Contar cuántos elementos hay en un array
7.Encontrar el número mayor de un array
8.Contar cuántos elementos son mayores a 10
9.Crear un nuevo array con el doble de cada número
10.Convertir todos los elementos a mayúsculas
11.Buscar si un elemento existe en el array
*/

//console.log(nombres[0], nombres[nombres.length - 1]);

/* nombres.shift();
console.log(nombres);

console.log(nombres.length); */

/* let notas = [3, 7, 44, 6, 100, 89, 20, 45, 51, 2, 12, 4, -1, 32, 2, 11, 10];
let contador = 0;
for (let i = 0; i < notas.length; i++) {
  if (notas[i] > 10) {
    contador++;
  }
}
console.log(contador); */

let nombres = ["juanito", "pepito", "menganito", "kevin"];
let nombresMayusculas = [];
for (let i = 0; i < nombres.length; i++) {
  nombresMayusculas.push(nombres[i].toUpperCase());
}

console.log(nombresMayusculas);

/* metodos avanzados */

/* const juanito = () => {
  console.log("hola amigos");
};

juanito(); */
/* FOR EACH */
/* let estudiantes = [
  "felipe",
  "thomas",
  "johan",
  "antony",
  "alex",
  "carlo",
  "alan",
  "felipe",
  "alan",
];

estudiantes.forEach((alumno) => {
  //itera el array pero no lo modifica
  console.log(alumno);
}); */
/* iterar usando foreach y sacar el promedio de los estudiantes de funval */
let notasFunval = [100, 90, 10, 15, 67, 70, 0, 88];

/* OBJETOS */

/* const persona = {
  nombre: "Kevin",
  edad: 28,
  pais: "Bolivia",
  genero: "masculino",
  altura: 1.65,
};
persona.edad = 29;
persona.celular = "+591 78768015";
delete persona.altura;
console.log(persona); */

let estudianteFunval = {
  nombre: "Marco",
  edad: 22,
  pais: "Peru",
  notas: [100, 90, 0, 51, 85],
};
/* mostrar el nombre del estudiante y su promedio de notas */

console.log(estudianteFunval.nombre);
let promedio = 0;
for (let i = 0; i < estudianteFunval.notas.length; i++) {
  promedio = promedio + estudianteFunval.notas[i];
}
promedio = promedio / estudianteFunval.notas.length;
console.log(promedio);

/* tenemos un array de estudiantes con diferentes notas quiero q me muestre un listado
de los estudiantes aprobados, se considerara aprobado aquel q tenga un promedio mayor a 51
*/

let estudiantes = [
  {
    nombre: "Marco",
    edad: 22,
    pais: "Peru", //estudiantes[0]
    notas: [100, 90, 0, 51, 85],
  },
  {
    nombre: "Pablo",
    edad: 33,
    pais: "Argentina", //estudiantes[1]
    notas: [90, 75, 0, 0, 10],
  },
  {
    nombre: "Thomas",
    edad: 21, //estudiantes[2]
    pais: "Argentina",
    notas: [51, 30, 20, 41, 85],
  },
  {
    nombre: "Woodleine",
    edad: 33, //estudiantes[2]
    pais: "Chile",
    notas: [88, 11, 33, 77, 99],
  },
  {
    nombre: "Kevin",
    edad: 28, //estudiantes[2]
    pais: "Bolivia",
    notas: [31, 30, 12, 51, 77],
  },
];
function calcularPromedio(notas) {
  let promedio = 0;
  for (let index = 0; index < notas.length; index++) {
    promedio = promedio + notas[index];
  }
  promedio = promedio / notas.length;
  return promedio;
}

for (let index = 0; index < estudiantes.length; index++) {
  let estudiantePromedio = calcularPromedio(estudiantes[index].notas);
  if (estudiantePromedio >= 51) {
    console.log(
      "estudiante " +
        estudiantes[index].nombre +
        " aprobado con un promedio de: " +
        estudiantePromedio
    );
  }
}

/* del array de estudiantes mostrar a todos los estudiantes que pertenezcan al pais de argentina */
