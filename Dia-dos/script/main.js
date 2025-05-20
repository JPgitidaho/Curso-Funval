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
36--- Adulto 

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

// pide la edad y si es mayor de 18 años indica que ya puede conducir
function evaluarEdad() {
  let edad = parseInt(document.getElementById("edad").value);
  let respuesta = document.getElementById("respuesta");

  if (edad >= 18) 
    respuesta.textContent = "Ya eres mayor de Edad y puedes conducir"
  else {
respuesta.textContent ="No puedes conducir aun en Chile"
  }
}
  
let edad =prompt("Ingresa tu edad")

if(Number(edad) == edad) {
  if (edad > 18) {
    alert("Puedes conducir")
  }else {
  alert("No puedes conducir")

}
}

let nota;

do {
  nota = prompt("Ingresa tu nota (0 a 10):");

  if (nota !== null) { // Verifica que no se haya presionado "Cancelar"
    if (!isNaN(nota) && nota.trim() !== "") {
      nota = Number(nota);
      
      if (nota >= 0 && nota <= 10) {
        if (nota < 3) {
          alert("Muy deficiente");
        } else if (nota < 5) {
          alert("Insuficiente");
        } else if (nota < 6) {
          alert("Suficiente");
        } else if (nota < 7) {
          alert("Bien");
        } else if (nota < 9) {
          alert("Notable");
        } else {
          alert("Sobresaliente");
        }
      } else {
        alert("La nota debe estar entre 0 y 10.");
      }
    } else {
      alert("Introduce un número válido.");
    }
  }

} while (nota !== null); // Se repite hasta que se presione Cancelar



Realiza un script que pida cadenas de texto  
hasta que se pulse “cancelar”. Al salir con
 “cancelar” deben mostrarse todas las cadenas 
 concatenadas con un guión -.
 var resultado = ""
 do {
  var texto = prompt("Introduce una oracion")
  if(resultado == "") {
    resultado = resultado + texto;
  }
  else {resultado = resultado + "-" + texto
  }
 }while (texto !== null);

alert("Resultado final: " + resultado);

let i = 0;

while (i < 11) {
  if (i == 5) {
    break;
  }

  console.log("Iteración número ", i);
  i = i + 1;
}

console.log("Bucle finalizado.")*/

// Realiza un script que escriba una pirámide del 1 al 30:
/*  
//Si haces clic en "Cancelar", prompt() devuelve null.
if (limite !== null &&  
 
//"es un número válido".
!isNaN(limite) &&   
 
//elimina los espacios en blanco antes o después del texto    
limite.trim() !== "") { 
   
//convierte el texto en un número entero.    
limite = parseInt(limite);
        
// Luego, se crea la variable salida = "" para comenzar a construir la pirámide.
let salida = "";*/

/*   
//Comienza en 1 
for (let i = 1;       

//Repite mientras i sea menor o igual que el número que escribió el usuario      
i <= limite;   
    
//En cada vuelta, suma 1 a i (va de 1 en 1)
i++) {                
//Convierte el número i a texto.      
salida += String(i)   
 
//Repite ese texto i veces.
.repeat(i)            

//Agrega un salto de línea al final. Esto hace que cada fila de la pirámide esté en una línea diferente.
 + "\n";               
}
function generarPiramide() {
      let limite = prompt("¿Hasta qué número quieres construir la pirámide?");

      if (limite !== null && !isNaN(limite) && limite.trim() !== "") {
        limite = parseInt(limite);
        let salida = "";

        for (let i = limite; i >=1 ; i--) {
          salida += String(i).repeat(i) + "\n";
        }

        document.getElementById("resultado").textContent = salida;
      } else {
        alert("Debes ingresar un número válido.");
      }
    }
*/