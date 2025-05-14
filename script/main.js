console.log("hola mundo");

/*let nombre = " "; // se establece la variable
nombre = prompt("Cual es tu nombre"); // se utiliza una funcion promp para darle valor a la variable
alert("Bienvenida " + nombre); // se utiliza la funcion alert para dar la bienvenida y concatenar el valor de name ingresado

function aleatorio(min, max) {  //se establece el parametro y se define la funcion
  return Math.floor(Math.random() * (max - min + 1) + min); //let pc = Math.floor(Math.random() * (max - min +1) + min)//algoritmo
}

function eleccion(jugada) {
  const pociones = ["", "piedra 🏐", "papel 📋", "tijera ✂"];
  return pociones[jugada] || "Mala eleccion";
}

let jugador = 0;
let min = 3;
let max = 1;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(min, max); //se define el valor
  jugador = parseInt(
    prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
  );

  alert("Pc elige: " + eleccion(pc));
  alert("Tu eliges: " + eleccion(jugador));
  //COMBATE
  if (pc == jugador) {
    alert("EMPATE");
  } else if (
    (jugador == 1 && pc == 3) || //  || conector "O"
    (jugador == 2 && pc == 1) ||
    (jugador == 3 && pc == 2)
  ) {
    alert("GANASTE");
    triunfos++;
  } else if (jugador >= 1 && jugador <= 3) { // && CONECTOR Y
    alert("PERDISTE");
    perdidas++;
  } else {
    alert("Eleccion invalida.");
  }
}

alert(`Ganaste ${triunfos} veces. Perdiste ${perdidas} veces.`);

let edad = 0;
let permiso = "si";

edad = parseInt(edad);// convierte la edad de string a entero

edad = prompt("Ingresa tu edad"); // promp se usa para pedir datos
permiso = prompt("Tienes permiso? (si/no)");

if (edad >= 18) { // evalua si el usuario tiene 18 o mas
  alert("No necesitas permiso, puedes ir"); // si cumple no necesita permiso y puede viajar
} else if (permiso === "si" && edad < 18) { //si tiene menos de 18 y tiene permiso puede viajr
  alert("Puedes ir, permiso aprobado.");
} else {                              // sino cumple con ninguna de las anteriores no puede ir
  alert("Necesitas permiso para ir");
}

//DECLARAR UNA VARIABLE DE TIPO NUMERICA Y DETERMINAR SI EL NUMERO ES PAR O IMPAR

let numero = 0 
numero = parseInt(numero);
numero = prompt("Ingresa un numero para determinar si es par o impar")

if (numero % 2 === 0) {  // operador [ % ] modulo calcula el RESTO de la divicion entre numero y 2
// si el resultado es 0 el numero es par // si el resultado es 1 el numero es impar
  console.log("El numero es par")
}else {
 console.log("El numero es impar")
}
 

//CONDICIONES ANIDADAS

let dinero = 0
dinero = parseInt(dinero)
 dinero =prompt("Cuanto dinero tienes? Te ayudo a conocer lo que puedes adquirir")

if (dinero > 0) {
  console.log("Puedes comprar varios promociones")
  if (dinero > 50) {
    console.log("Puedes comprar una promo papas")
    if (dinero > 100) {
      console.log("Puedes comprar pizza y una hambuergueza")
      if (dinero > 500) {
        console.log("Puedes comprar mucha comida!")
      }
    } else {
      console.log("Y puedes conseguir un sandwich")
    }
  } else {
    console.log("Solo pudes conseguir jugos")
  }
} else {
  if(dinero == 0){
    console.log("Espero no tengas deudas :(")
  }
  console.log("No puedes comprar ")
}
*/
/*evaluar a que organizacion pertenece una persona
0-11 Primaria
12-17 Jovenes
18-35 Jas
36--- Adulto */

let edad = prompt("Ingresa tu edad");
edad = parseInt(edad); // Convertir a número

if (edad >= 0) {
  if (edad <= 11) {
    alert("Pertenece a Primaria");
  } else {
    if (edad <= 17) {
      alert("Pertenece a Jóvenes");
    } else {
      if (edad <= 35) {
        alert("Pertenece a JAS");
      } else {
        alert("Pertenece a Adultos");
      }
    }
  }
} else {
  alert("Edad inválida");
}
