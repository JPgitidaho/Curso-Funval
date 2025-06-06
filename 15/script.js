/*🔹 1. getElementById
Selecciona un elemento por su atributo id.

html


<input id="nombre">
js

const input = document.getElementById("nombre");
🔹 2. getElementsByClassName
Selecciona todos los elementos con una clase (retorna un HTMLCollection).

html

<div class="caja"></div>
<div class="caja"></div>
js

const cajas = document.getElementsByClassName("caja");
// Para acceder al primero: cajas[0]
🔹 3. getElementsByTagName
Selecciona todos los elementos por su etiqueta.

html

<p>Texto 1</p>
<p>Texto 2</p>
js

const parrafos = document.getElementsByTagName("p");
// parrafos[1] sería el segundo <p>
🔹 4. querySelector
Selecciona el primer elemento que coincida con un selector CSS.

html


<div class="contenido"></div>
js


const div = document.querySelector(".contenido");
Puedes usar:

#id → por ID

.clase → por clase

etiqueta → por etiqueta

etiqueta.clase → combinados

🔹 5. querySelectorAll
Selecciona todos los elementos que coincidan con un selector CSS (retorna un NodeList).

html


<li class="item">Uno</li>
<li class="item">Dos</li>
js


const items = document.querySelectorAll(".item");
// items.forEach(item => console.log(item.textContent));
🧠 ¿Cuándo usar cada uno?
Método	Devuelve	¿Múltiples elementos?	Selector tipo
getElementById	Elemento único	❌ No	Solo por id
getElementsByClassName	HTMLCollection	✅ Sí	Por clase
getElementsByTagName	HTMLCollection	✅ Sí	Por etiqueta
querySelector	Elemento único	❌ No	Selector CSS
querySelectorAll	NodeList	✅ Sí	Selector CSS
🛠️ MODIFICADORES EN JAVASCRIPT
🔹 1. Modificar el contenido
→ textContent
Cambia o accede al texto de un elemento.

js


document.getElementById("mensaje").textContent = "Hola mundo";
→ innerHTML
Permite insertar HTML (etiquetas incluidas).

js


document.querySelector("#mensaje").innerHTML = "<strong>Hola</strong> mundo";
🔹 2. Modificar estilos
→ element.style.propiedad
js


const caja = document.querySelector(".caja");
caja.style.backgroundColor = "red";
caja.style.fontSize = "20px";
📝 Se escribe en camelCase (no font-size, sino fontSize).

🔹 3. Modificar clases
→ classList.add() / remove() / toggle() / contains()
js


const caja = document.querySelector(".caja");

caja.classList.add("activo");      // Agrega clase
caja.classList.remove("activo");   // Elimina clase
caja.classList.toggle("activo");   // Agrega si no está, elimina si está
caja.classList.contains("activo"); // Devuelve true o false
🔹 4. Modificar atributos
→ setAttribute() / getAttribute() / removeAttribute()
js


const imagen = document.querySelector("img");

imagen.setAttribute("src", "foto.jpg");
let ruta = imagen.getAttribute("src");
imagen.removeAttribute("alt");
🔹 5. Modificar valores de inputs
js


const input = document.getElementById("nombre");

input.value = "Juan"; // Cambia el valor
let valor = input.value; // Lee el valor
🔹 6. Modificar eventos (opcional avanzado)
js


document.querySelector("button").onclick = function() {
    alert("¡Botón presionado!");
};*/








let frutas = ["Manzana", "Banana", "Naranja", "Uva", "Sandía"];
let lista = document.querySelector(".lista");

let html = "";

for (let i = 0; i < frutas.length; i++) {
  html += "<li>" + frutas[i] + "</li>";
}

lista.innerHTML = html;



//lista.innerHTML = frutas.map(fruta => `<li>${fruta}</li>`).join("");// //map recorre, join une todo, inner lo ingresa a html//


let estudiantes = [
  { nombre: "Felipe", edad: 33, pais: "Chile" },
  { nombre: "Pablo", edad: 28, pais: "Argentina" },
  { nombre: "Juana", edad: 22, pais: "Chile" },
  { nombre: "Mahonri", edad: 18, pais: "Guatemala" },
  { nombre: "Carlo", edad: 50, pais: "Peru" },
  { nombre: "Thomas", edad: 33, pais: "Argentina" },
];

let contenedor = document.querySelector(".contenido-tabla");

let tarjetas = "";

for (let i = 0; i < estudiantes.length; i++) {
  tarjetas += `
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiantes[i].nombre}</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">Edad: ${estudiantes[i].edad}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400">País: ${estudiantes[i].pais}</p>
    </a>
  `;
}

contenedor.innerHTML = tarjetas;
