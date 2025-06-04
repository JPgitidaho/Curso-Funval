let opcion = prompt(
  "Calculadora de Áreas Geométricas\n\n" +
  "1. Área de un Cuadrado\n" +
  "2. Área de un Rectángulo\n" +
  "3. Área de un Triángulo\n\n" +
  "Elige una opción (1-3):"
);

if (opcion === "1") {
  let lado = parseFloat(prompt("Ingresa el lado del cuadrado:"));
  if (isNaN(lado) || lado <= 0) {
    alert("Lado inválido.");
  } else {
    let area = lado * lado;
    alert(`El área del cuadrado es: ` + area);
  }
}

else if (opcion === "2") {
  let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
  let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));

  if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
    alert("Datos inválidos.");
  } else {
    let area = base * altura;
    alert(`El área del rectángulo es: `+ area);
  }
}

else if (opcion === "3") {
  let base = parseFloat(prompt("Ingresa la base del triángulo:"));
  let altura = parseFloat(prompt("Ingresa la altura del triángulo:"));

  if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
    alert("Datos inválidos.");
  } else {
    let area = (base * altura) / 2;
    alert(`El área del triángulo es: ` + area);
  }
}

else {
  alert("Opción inválida. Por favor elige 1, 2 o 3.");
}
