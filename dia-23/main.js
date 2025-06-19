/* let contenedor = document.querySelector("#contenedor-cards");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((usuario) => {
      contenedor.innerHTML += `        
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${usuario.name}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">${usuario.email} - ${usuario.company.name}</p>
</a>
`;
    });
  });
 */
import { traerDatosDogs } from "./data.js";
const contenedor = document.getElementById("contenedor");
const input = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");

const subrazaContainer = document.getElementById("subraza-container");
const subrazaInput = document.getElementById("subrazaInput");
const subrazaDropdown = document.getElementById("subrazaDropdown");

let suggestions = [];

// === Obtener todas las razas ===
fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => res.json())
  .then((data) => {
    suggestions = Object.keys(data.message);
  });

// === Generar tarjeta con nombre personalizado ===
function generarCard(imagenURL, index, nombre = `Perrito bonito ${index}`) {
  return `
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm
      md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
      <img class="object-cover w-full rounded-t-lg h-44 md:w-48 md:rounded-none md:rounded-s-lg" src="${imagenURL}" alt="${nombre}">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${nombre}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">¡Adopta un perrito hoy! 🐶</p>
      </div>
    </a>
  `;
}

// aleatorias de perros 
for (let i = 1; i <= 15; i++) {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      const imageUrl = data.message;

    
      const parts = imageUrl.split('/');
      const breedsIndex = parts.indexOf('breeds');
      let raza = "Raza desconocida";
      if (breedsIndex !== -1 && parts.length > breedsIndex + 1) {
        raza = parts[breedsIndex + 1].replace(/-/g, " ");
      }

      // Capitalizamos cada palabra
      raza = raza
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      contenedor.innerHTML += generarCard(imageUrl, i, raza);
    });
}


// === Buscar por raza ===
function buscarRaza(raza) {
  fetch(`https://dog.ceo/api/breed/${raza}/images`)
    .then((res) => res.json())
    .then((data) => {
      contenedor.innerHTML = "";
      const max = Math.min(data.message.length, 10);

      let nombreRazaFormateado = raza
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      for (let j = 0; j < max; j++) {
        contenedor.innerHTML += generarCard(data.message[j], j + 1, nombreRazaFormateado);
      }

      fetch(`https://dog.ceo/api/breed/${raza}/list`)
        .then((res) => res.json())
        .then((data) => {
          if (data.message.length > 0) {
            mostrarSubrazas(raza, data.message);
          } else {
            mostrarMensajeSinSubrazas();
          }
        });
    });
}

// Mostrar subrazas disponibles 
function mostrarSubrazas(raza, subrazas) {
  subrazaContainer.classList.remove("hidden");
  subrazaDropdown.classList.remove("hidden");
  subrazaDropdown.innerHTML = "";

  subrazas.forEach((subraza) => {
    const div = document.createElement("div");
    div.textContent = subraza;
    div.className = "px-4 py-2 cursor-pointer hover:bg-blue-700";
    div.addEventListener("click", () => {
      subrazaInput.value = subraza;
      buscarSubraza(raza, subraza);
      subrazaDropdown.classList.add("hidden");
    });
    subrazaDropdown.appendChild(div);
  });
}

// Mostrar mensaje si no hay subrazas 
function mostrarMensajeSinSubrazas() {
  subrazaContainer.classList.remove("hidden");
  subrazaDropdown.classList.remove("hidden");
  subrazaDropdown.innerHTML = `
    <div class="px-4 py-2 text-gray-700">No hay subrazas disponibles</div>
  `;
}

//Buscar por subraza 
function buscarSubraza(raza, subraza) {
  fetch(`https://dog.ceo/api/breed/${raza}/${subraza}/images`)
    .then((res) => res.json())
    .then((data) => {
      contenedor.innerHTML = "";
      const max = Math.min(data.message.length, 10);

      let nombreCompleto = `${subraza} ${raza}`
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      for (let j = 0; j < max; j++) {
        contenedor.innerHTML += generarCard(data.message[j], j + 1, nombreCompleto);
      }
    });
}

// Mostrar sugerencias al escribir raza 
input.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  dropdown.innerHTML = "";

  if (query) {
    const filtered = suggestions.filter((item) =>
      item.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
      dropdown.classList.remove("hidden");
      filtered.forEach((item) => {
        const div = document.createElement("div");
        div.textContent = item;
        div.className = "px-4 py-2 cursor-pointer bg-white hover:bg-blue-100";
        div.addEventListener("click", () => {
          input.value = item;
          dropdown.classList.add("hidden");
          buscarRaza(item);
        });
        dropdown.appendChild(div);
      });
    } else {
      dropdown.classList.add("hidden");
    }
  } else {
    dropdown.classList.add("hidden");
  }
});

// Mostrar nuevamente el dropdown de subrazas al hacer clic en el input 
subrazaInput.addEventListener("focus", () => {
  if (subrazaDropdown.innerHTML.trim() !== "") {
    subrazaDropdown.classList.remove("hidden");
  }
});

// Ocultar dropdowns al hacer clic fuera 
document.addEventListener("click", function (event) {
  if (!event.target.closest("#search")) {
    dropdown.classList.add("hidden");
  }
  if (!event.target.closest("#subraza-container")) {
    subrazaDropdown.classList.add("hidden");
  }
});

