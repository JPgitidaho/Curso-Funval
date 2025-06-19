/* let btn = document.querySelector("#btn");
let parrafo = document.querySelector("#parrafo");
let contador = 0;

btn.addEventListener("click", function (evento) {
  console.log(evento);
});
 */

/* let btn = document.querySelector("#btn");
let img = document.querySelector("#imagen");
let dia = true;

btn.addEventListener("click", function () {
  dia = !dia;
  if (dia) {
    btn.textContent = "Dia";
    img.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/en/d/d0/Fiona_standing_human.png"
    );
  } else {
    btn.textContent = "noche";
    img.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Princess_Fiona.png/130px-Princess_Fiona.png"
    );
  }
}); */

let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const formularioData = new FormData(formulario);

  let nombreInput = formularioData.get("nombre");
  let edadInput = formularioData.get("edad");
  console.log("hola amigo " + nombreInput + " edad: " + edadInput);
});
