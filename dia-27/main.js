let opciones = [
  "accion",
  "ficcion",
  "terro",
  "comedia",
  "infantil",
  "novelas",
  "kdramas",
];

let btn = document.querySelector("#btn");
let menu = document.querySelector("#dropdwn");
let lista = document.querySelector("#lista");
btn.addEventListener("click", function (e) {
  menu.classList.toggle("hidden");
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.add("hidden");
  }
});

lista.innerHTML = "";
opciones.forEach((categoria) => {
  lista.innerHTML += `<li class="hover:bg-gray-100 p-2">${categoria}</li>`;
});

/* let btncomedia = document.querySelector("#btncomedia");
let menu2 = document.querySelector("#submenucontenedor");
let subcom = document.querySelector("#comedia");
btncomedia.addEventListener("click", function (e) {
  menu2.classList.toggle("hidden");
  subcom.classList.toggle("hidden");
}); */

let supercontenedor = document.querySelector("#supercontenedor");

supercontenedor.addEventListener("click", function (e) {
  console.log(e.target);
});
