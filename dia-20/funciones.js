function suma(a, b) {
  let resultado = a + b;
  return resultado;
}

function resta(a, b) {
  let resultado = a - b;
  return resultado;
}

function multiplicacion(a, b) {
  let resultado = a * b;
  return resultado;
}

function division(a, b) {
  let resultado = a / b;
  return resultado;
}

function renderizar(cliente, elemento) {
  elemento.innerHTML += `<li>${cliente.nombre}</li>`;
}

function renderizarClientesFrecuentes(cliente, elemento) {
  let initialValue = 0;
  let sumatotal = cliente.compras.reduce(
    (acumulador, currtenValue) => acumulador + currtenValue,
    initialValue
  );

  if (cliente.compras.length > 1 || cliente.compras[0] > 1) {
    elemento.innerHTML += `<li>
    <p>${cliente.nombre}</p>
    <p>${cliente.edad}</p>
    <p>${cliente.correo}</p>
    <p>numero de compras:${sumatotal}</p>
    </li>`;
  }
}

export {
  suma,
  resta,
  multiplicacion,
  division,
  renderizar,
  renderizarClientesFrecuentes,
};
