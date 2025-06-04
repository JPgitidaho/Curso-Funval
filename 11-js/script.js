let estudios=true;
let canasado=true;

let almuerzo = false;
 



// aqui podemos poner comentarios en una sola fila

/*ya 
puedo
poner
comentarios
multi-linea */

/* console.log  LA MANERA DE MOSTRAR COSAS EN CONSOLA */

console.log("HOLA MUNDO");

console.log(3 + 2);

console.log("hola mundo y amigos de funval");

let var1 = 12;

console.log(var1);

/* CREACION DE VARIABLES Y CONSTANTES */

// var
var pepito = "hola pepito"; //NO DEBE USARSE POR EL SCOPE GLOBAL Q TIENE
console.log(pepito);
// let
let juanito = "hola juanito";
console.log(juanito);
juanito = 77;
console.log(juanito);
//const
const pedrito = "hola pedrito";
console.log(pedrito);
// pedrito = "hola kevin"; NO SE PUEDE REASIGNAR UNA CONSTANTE!!!!!!
/* lower CAMEL CASE */
let apellidoPaterno;
let apellidoMaterno;
let apellidoPaternoAbuelo;

/* TIPOS DE DATOS PRIMITIVOS */
// TENEMOS 7 TIPOS DE DATOS PRIMITIVOS

/* STRING */
let nombre = "Kevin"; // string o cadena de texto
let apellido = "Rodriguez Calderon"; // se toma todos los caracteres incluyendo los espacios

/* NUMBER */
let enteros = 12; //enteros
let decimales = 45.5; //flotantes o decimales
let negativo = -15; //negativos

/* BOOLEAN */
let johan = true; //o es verdadero
let nojohan = false; // o es falso

/* UNDEFINED */
let indefinida;

/* NULL */
let valor_null = null;

/* symbol */
let simbolo = Symbol("numerico2");

/* BIG INT */
let numeroGrande = 21348734958439567349879813749812798347129847912847n;
let numeroGrande2 = BigInt(21348734958439567349879813749812798347129847912847);

console.log(typeof nombre);
console.log(typeof enteros);
console.log(typeof johan);
console.log(typeof indefinida);
console.log(typeof valor_null);
console.log(typeof simbolo);
console.log(typeof numeroGrande);

// 1. Escribe un comentario en una línea 
// este es un comentario de una sola linea

// 2. Escribe un comentario en varias líneas
/* este 
es 
un 
comentario de varias lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let stringLine = "Hola clase";        
let numberLine = 1234;                   
let booleanLine = true;                
let undefinedLine = undefined;         
let nullLine = null;                  
let symbolLine = Symbol("#");   
let bigintLine = 12345678901234567890n; 

// 4. Imprime por consola el valor de todas las variables
console.log("Yo soy una cadena", stringLine);
console.log("Yo soy un numero:", numberLine);
console.log("Yo soy un boleano falso/verdadero:", booleanLine);
console.log("yo soy indefinido:", undefinedLine);
console.log("yo soy linea nula:(", nullLine);
console.log("yo soy un simbolo:#", symbolLine.toString());
console.log("yo soy un biginline 1223342543654576657n:", bigintLine);

// 5. Imprime por consola el tipo de todas las variables

console.log("typeof stringLine:", typeof stringLine);
console.log("typeof numberLine:", typeof numberLine);
console.log("typeof booleanLine:", typeof booleanLine);
console.log("typeof undefinedLine:", typeof undefinedLine);
console.log("typeof nullLine:", typeof nullLine); // Esto imprimirá "object"
console.log("typeof symbolLine:", typeof symbolLine);
console.log("typeof bigintLine:", typeof bigintLine);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
stringLine = "Nuevo texto";
numberLine = 3.14;
booleanLine = false;
undefinedLine = undefined; 
nullLine = null; 
symbolLine = Symbol("otro simbolo");
bigintLine = 9007199254740991n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
stringLine = 100;
numberLine = "Ahora soy texto";
booleanLine = "true como string";
undefinedLine = false;
nullLine = 0;
symbolLine = "no soy más un símbolo";
bigintLine = "cambié a string";

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const CONST_STRING = "Soy constante";
const CONST_NUMBER = 10;
const CONST_BOOLEAN = true;
const CONST_UNDEFINED = undefined;
const CONST_NULL = null;
const CONST_SYMBOL = Symbol("constante");
const CONST_BIGINT = 1000000000000000000000n;
// 9. A continuación, modifica los valores de las constantes
//CONST_STRING = "Nuevo valor"; 
//CONST_NUMBER = 20;           
//CONST_BOOLEAN = false;       
//CONST_UNDEFINED = "definido"; 
//CONST_NULL = "no nulo";       
//CONST_SYMBOL = Symbol("nuevo"); 
//CONST_BIGINT = 0n;          

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse porque al ser constantes no pueden modificarse
/*CONST_STRING = "Nuevo valor"; 
CONST_NUMBER = 20;            
CONST_BOOLEAN = false;        
CONST_UNDEFINED = "definido"; 
CONST_NULL = "no nulo";       
CONST_SYMBOL = Symbol("nuevo"); 
CONST_BIGINT = 0n;    */        


let a =2;
let b=5;
let resultado =a + b;
let suma = 5 + 2;

/* EJERCICIOS CONDICIONALES */

// 1. Imprime por consola tu nombre si una variable toma su valor
let name = "Juan";
if (nombre === "Juan") {
  console.log("Juan");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coinciden con unos establecidos
let usuario = "admin";
let contraseña = "1234";
if (usuario === "admin" && contraseña === "1234") {
  console.log("Acceso concedido");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -5;
if (numero > 0) {
  console.log("Positivo");
} else if (numero < 0) {
  console.log("Negativo");
} else {
  console.log("Cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 16;
if (edad >= 18) {
  console.log("Puede votar");
} else {
  console.log(`Le faltan ${18 - edad} años para votar`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
edad = 20;
let tipo = edad >= 18 ? "adulto" : "menor";
console.log(tipo);

/* SWITCH */

// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "julio";
switch (mes.toLowerCase()) {
  case "diciembre":
  case "enero":
  case "febrero":
    console.log("Verano");
    break;
  case "marzo":
  case "abril":
  case "mayo":
    console.log("Otoño");
    break;
  case "junio":
  case "julio":
  case "agosto":
    console.log("Invierno");
    break;
  case "septiembre":
  case "octubre":
  case "noviembre":
    console.log("Primavera");
    break;
  default:
    console.log("Mes no válido");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
switch (mes.toLowerCase()) {
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    console.log("30 días");
    break;
  case "febrero":
    console.log("28 o 29 días");
    break;
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    console.log("31 días");
    break;
  default:
    console.log("Mes no válido");
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "inglés";
switch (idioma.toLowerCase()) {
  case "español":
    console.log("Hola");
    break;
  case "inglés":
    console.log("Hello");
    break;
  case "francés":
    console.log("Bonjour");
    break;
  case "alemán":
    console.log("Hallo");
    break;
  default:
    console.log("Idioma no soportado");
}
