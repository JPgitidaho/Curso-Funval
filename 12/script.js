let base = parseInt(prompt("Ingresa la base:"));
let exponente = parseInt(prompt("Ingresa el exponente (≥ 0):"));

if (isNaN(base) || isNaN(exponente) || exponente < 0) {
  alert("❌ Entrada inválida. Asegúrate de ingresar números válidos y que el exponente no sea negativo.");
} else {
  let resultado = 1;
  for (let i = 0; i < exponente; i++) {
    resultado *= base;
  }
  alert(resultado);
}



//FUNCIONES//

function duplicar(numero){
    let resultado = 0;          //parametros//
    resultado = numero * 2;     //
    return resultado
}

function eliminaEspacios(cadena) {
    let resultado ="";
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i]!= " ") {
            resultado = resultado + cadena[i];
        }
    }
    return resultado;
}
console.log(eliminaEspacios("Kevin rodr igu ez"));


function eliminaEspaciosEInvierte(cadena) {
  let resultado = "";

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== " ") { 
      resultado += cadena[i];
    }
  }


  let invertido = "";
  for (let i = resultado.length - 1; i >= 0; i--) {
    invertido += resultado[i];
  }

  return invertido;
}

console.log(eliminaEspaciosEInvierte("Kevin rodr igu ez"));  

//const eliminaEspaciosEInvierte = str => str.replace(/\s+/g, '').split('').reverse().join('');//
let swich = true;

do {
  let numero = parseFloat(prompt("Ingresa un número (negativo para salir):"));

  if (numero >= 0) {
    swich = true;
  } else {
    swich = false;
  }
} while (swich);
