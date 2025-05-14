console.log("hola mundo");

/*let nombre = " "; // se establece la variable
nombre = prompt("Cual es tu nombre"); // se utiliza una funcion promp para darle valor a la variable
alert("Bienvenida " + nombre); // se utiliza la funcion alert para dar la bienvenida y concatenar el valor de name ingresado
*/
function aleatorio(min, max) {
  //se establece el parametro y se define la funcion
  return Math.floor(Math.random() * (max - min + 1) + min); //let pc = Math.floor(Math.random() * (max - min +1) + min)//algoritmo
}

function eleccion(jugada) {
  let resultado = "";

  if (jugada == 1) {
    resultado = "piedra 🏐";
  } else if (jugada == 2) {
    resultado = "papel 📋";
  } else if (jugada == 3) {
    resultado = "tijera ✂";
  } else {
    resultado = "Mala Eleccion!!";
  }
  return resultado;
}

let jugador = 0;
let max = 1;
let min = 3;
let pc = 0;
let triunfo = 0;
let perdidas = 0;

while (triunfo > 3 && perdidas < 3) {
  pc = aleatorio(1, 3); //se define el valor
  jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

  alert("Pc elige: " + eleccion(pc));
  alert("Tu eliges: " + eleccion(jugador));
  //COMBATE
  if (pc == jugador) {
    alert("EMPATE");
  } else if (jugador == 1 && pc == 3) {
    // && es y...
    alert("GANASTE");
    triunfos += 1;
  } else if (jugador == 2 && pc == 2) {
    alert("GANASTE");
    triunfos += 1;
  } else if (jugador == 3 && pc == 1) {
    alert("GANASTE");
    triunfos += 1;
  } else {
    alert("PERDISTE");
    perdidas += 1;
  }
}
alert("Ganaste " + triunfos + "veces. Perdiste " + perdidas + " veces.");
