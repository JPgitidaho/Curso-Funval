/* ITERACIONES  */

/* let cantidadHomeros = false;
let numero = 1;
while (cantidadHomeros) {
  console.log(`homero numero ` + numero);
  numero++;
  if (numero == 6) {
    break;
  }
}
console.log("error acabas de salir del bucle"); */

/* DO while */

/* let numeroKevin = 8;
do {
  console.log("kevin numero " + numeroKevin);
  numeroKevin++;
} while (numeroKevin < 5); */
/* validar datos */

/* let condicionDo = true;
do {
  let username = prompt("ingresa tu nombre de usuario");
  let password = parseInt(prompt("ingresa tu contraseña"));
  if (username === "kevin123" && parseInt(password) === 123456) {
    condicionDo = false;
  } else {
    alert("ingresa datos correctos x favor");
  }
} while (condicionDo); */

/* For */

/* for (let i = 0; i <= 5; i++) {
  console.log("este mensaje se va imprimir " + i);
}
 */
// 2,4,6,8,10,12,14

/* realizar un programa q pida un numero x y mostrar en pantalla la cantidad x de elemntos de la serie de los numeros pares */

/*  x=4
    2,4,6,8
    x=2
    2,4
    x=6
    2,4,6,8,10,12
*/

/* let numeroX = parseInt(prompt("ingresa un numero x favor"));
let pares = 2;
for (let j = 1; j <= numeroX; j++) {
  console.log(pares);
  pares += 2;
}
 */
/* generar los x terminos de la serie de los numeros multiplis de 5

    x= 3
    5,10,15

    x=5
    5,10,15,20,25
*/
/* let x = parseInt(prompt("ingresa un numero x favor"));
let multi5 = 5;
for (let j = 1; j <= x; j++) {
  console.log(multi5);
  multi5 += 5;
} */
/* 
    quiero q realicen una calculadora de exponentes sin utilizar **
    piden 2 numeros al usuario 1ro sera el q deberan multiplicar reiteradas veces>
    y el 2do sera la cantidad de veces q sera iterado

    5**2= 5*5=25
    2**3= 2*2*2=8
*/

/* let numero1 = parseInt(prompt("ingresa el 1er numero"));
let numero2 = parseInt(prompt("ingresa el 2do numero"));
let resultado = numero1;

for (let j = 1; j < numero2; j++) {
  resultado = resultado * numero1;
}
console.log(resultado);
 */
/* LA SERIE FIBONACI
LA SUMA DE LOS 2 ELEMENTOS ANTERIORES
1,1,2,3,5,8,13,21

LOS FACTORIALES DE UN NUMERO
5!=1*2*3*4*5
*/

/* DECLARAR UNA FUNCION */

/* function duplicar(numero) {
  let resultado = 0;
  resultado = numero * 2;
  return resultado;
} */
/* el codigo sera reutilizable?
    el codigo maneja su propia logica?
    q taanto alcance tendra mi funcion?
*/
/* como llamamos una funcion */
/* console.log(duplicar(5));
console.log(duplicar(33));
console.log(duplicar(77)); */
/* invertir un string y eliminar los espacios  "kevin rodriguez " "zeugirdoznivek" 
    funcion para eliminar los espacios de un string
    funcion para invertir los elementos de un string
*/

/* function eliminaEspacios(cadena) {
  let resultado = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== " ") {
      resultado = resultado + cadena[i];
    }
  }
  return resultado;
}

console.log(eliminaEspacios("kevin rodr igu ez")); */

/* ejercicios BUCLES */
/* 
    WHILE
1 Contar del 1 al 10:
2 Sumar los primeros 5 números:
    DO WHILE
3 Pedir un número hasta que el usuario escriba 0:
4 Pedir al usuario una contraseña hasta que acierte:
6 Leer números hasta que se escriba uno negativo:
    FOR
5 Contar hacia atrás del 5 al 1:
7 Mostrar los números pares del 1 al 20:
8 Mostrar la tabla del 5:
9 Contar de 10 a 1:

*/
/* 
let numeroInicial = 1;

while (numeroInicial <= 10) {
  console.log(numeroInicial);
  numeroInicial++;
}

numeroInicial = 0;
resultado = 0;

while (numeroInicial <= 5) {
  resultado = resultado + numeroInicial;
  numeroInicial++;
}
console.log(resultado); */

/* do while ejercicios */
/* let swich = true;
do {
  let datoUsuario = parseInt(prompt("ingresa un numero"));
  if (datoUsuario === 0) {
    swich = false;
  }
} while (swich);
alert("lograste salir de la matrix"); */

/* ejercicio contraseña correcta */
/* let swich = true;
do {
  let contraseña = prompt("ingresa tu contraseña");
  let contraseñaHasheada = "chanchito feliz";
  if (contraseña === contraseñaHasheada) {
    swich = false;
  } else {
    swich = true;
  }
} while (swich);

alert("FELICIDADES CONTRASEÑA CORRECTA"); */

//5 Contar hacia atrás del 5 al 1:

/* let numero = 5;

for (let index = 5; index >= 1; index--) {
  console.log(numero);
  numero--;
} */

/* ejercicios de funciones  */

function saludar() {
  console.log("hola amigos bienvenidos a este curso de JS");
}

saludar();

/* ejemplo con párametros */

function saludarNombre(nombre) {
  console.log("hola cm estas " + nombre + " querido amigo");
}

saludarNombre("Kevin");
saludarNombre("Thomas");
saludarNombre("Alan");

/* ejemplo con mas de 1 parametro */
function sumarVariables(a, b, c) {
  let resultado = 0;
  resultado = a + b + c;
  console.log(resultado);
}
