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
    (jugador == 1 && pc == 3) ||
    (jugador == 2 && pc == 1) ||
    (jugador == 3 && pc == 2)
  ) {
    alert("GANASTE");
    triunfos++;
  } else if (jugador >= 1 && jugador <= 3) {
    alert("PERDISTE");
    perdidas++;
  } else {
    alert("Eleccion invalida.");
  }
}

alert(`Ganaste ${triunfos} veces. Perdiste ${perdidas} veces.`);
