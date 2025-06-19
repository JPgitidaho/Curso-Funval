let contenedor = document.querySelector("#contenedor-cards");
let listaTipos = document.querySelector("#listado-clases");
let btn = document.querySelector("#boton-drop");
let menu = document.querySelector("#dropdown");
let ant = document.querySelector("#ant");
let sig = document.querySelector("#sig");

// Variables de estado
let pokemons = [];
let tipoActual = null;
let pokemonsFiltradosGlobal = [];
let paginaActual = 1;
const porPagina = 12;

// Colores para los tipos
const typeColors = {
  grass: "bg-green-600",
  water: "bg-blue-600",
  fire: "bg-red-600",
  electric: "bg-yellow-400",
  bug: "bg-lime-600",
  normal: "bg-gray-400",
  poison: "bg-purple-600",
  ground: "bg-yellow-700",
  fairy: "bg-pink-400",
  fighting: "bg-red-700",
  psychic: "bg-pink-600",
  rock: "bg-yellow-800",
  ghost: "bg-indigo-600",
  dark: "bg-gray-700",
  dragon: "bg-indigo-800",
  ice: "bg-blue-200",
  steel: "bg-gray-500",
  flying: "bg-sky-400",
};

// Mostrar skeletons mientras se cargan los datos
function mostrarSkeleton() {
  contenedor.innerHTML = "";
  for (let i = 0; i < porPagina; i++) {
    contenedor.innerHTML += `
      <div class="card animate-pulse bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center gap-4">
        <div class="w-24 h-24 bg-gray-300 rounded-xl"></div>
        <div class="w-full space-y-2">
          <div class="h-4 bg-gray-300 rounded w-1/2"></div>
          <div class="h-6 bg-gray-400 rounded w-3/4"></div>
          <div class="flex gap-2">
            <div class="h-6 w-1/3 bg-gray-300 rounded"></div>
            <div class="h-6 w-1/3 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    `;
  }
}

// Renderizar tarjetas
function renderizarPokes(pokemons) {
  contenedor.innerHTML = "";
  pokemons.forEach((pokemon) => {
    contenedor.innerHTML += `
      <div class="card flex flex-col items-center justify-center">
        <div id="cont-img" class="bg-gray-100 rounded-xl">
          <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="" />
        </div>
        <div id="cont-pkm" class="flex flex-col justify-start w-full p-2 gap-1">
          <h3 class="text-gray-500 font-semibold">#000${pokemon.id}</h3>
          <h2 class="text-2xl">${pokemon.name}</h2>
          <div id="tipos" class="flex gap-2">
            ${pokemon.types
              .map((tipo) => {
                const colorClass = typeColors[tipo.type.name] || "bg-gray-300";
                return `<p class="${colorClass} text-white px-4 rounded-xs w-[30%] text-center">${tipo.type.name}</p>`;
              })
              .join("")}
          </div>
        </div>
      </div>`;
  });
}

// Mostrar Pokémon normales paginados
async function traerPokemons(pagina) {
  mostrarSkeleton();
  pokemons = [];
  let inicio = (pagina - 1) * porPagina + 1;
  let fin = inicio + porPagina - 1;

  for (let i = inicio; i <= fin; i++) {
    if (i > 1025) break;
    let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    pokemons.push(data);
  }

  renderizarPokes(pokemons);
}

// Mostrar menú
btn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

// Renderizar tipos en el dropdown
async function renderizarTipos() {
  listaTipos.innerHTML = "";

  // Opción "Todos"
  const verTodos = document.createElement("li");
  const linkTodos = document.createElement("a");
  linkTodos.href = "#";
  linkTodos.textContent = "Todos";
  linkTodos.className =
    "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white";
  linkTodos.addEventListener("click", (e) => {
    e.preventDefault();
    tipoActual = null;
    paginaActual = 1;
    traerPokemons(paginaActual);
    menu.classList.add("hidden");
  });
  verTodos.appendChild(linkTodos);
  listaTipos.appendChild(verTodos);

  // Tipos desde la API
  let { data } = await axios.get("https://pokeapi.co/api/v2/type/");
  let arrayTipos = data.results;

  arrayTipos.forEach((tipo) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = tipo.name;
    a.className =
      "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white";
    a.addEventListener("click", async (e) => {
      e.preventDefault();
      await filtrarPorTipo(tipo.name);
      menu.classList.add("hidden");
    });
    li.appendChild(a);
    listaTipos.appendChild(li);
  });
}

// Filtrar por tipo
async function filtrarPorTipo(tipo) {
  tipoActual = tipo;
  paginaActual = 1;

  let { data } = await axios.get(`https://pokeapi.co/api/v2/type/${tipo}`);
  pokemonsFiltradosGlobal = data.pokemon.map((p) => p.pokemon);

  renderizarPaginaFiltrada();
}

// Mostrar página del filtro actual
async function renderizarPaginaFiltrada() {
  mostrarSkeleton();

  let inicio = (paginaActual - 1) * porPagina;
  let fin = inicio + porPagina;

  let paginaPokemons = pokemonsFiltradosGlobal.slice(inicio, fin);
  let pokemonsFiltrados = [];

  for (let poke of paginaPokemons) {
    let { data } = await axios.get(poke.url);
    pokemonsFiltrados.push(data);
  }

  renderizarPokes(pokemonsFiltrados);
}

// Botón siguiente
sig.addEventListener("click", async function () {
  paginaActual++;
  if (tipoActual) {
    let totalPaginas = Math.ceil(pokemonsFiltradosGlobal.length / porPagina);
    if (paginaActual <= totalPaginas) {
      await renderizarPaginaFiltrada();
    } else {
      paginaActual--;
    }
  } else {
    let totalPaginas = Math.ceil(1025 / porPagina);
    if (paginaActual <= totalPaginas) {
      await traerPokemons(paginaActual);
    } else {
      paginaActual--;
    }
  }
});

// Botón anterior
ant.addEventListener("click", async function () {
  if (paginaActual > 1) {
    paginaActual--;
    if (tipoActual) {
      await renderizarPaginaFiltrada();
    } else {
      await traerPokemons(paginaActual);
    }
  }
});

// Inicializar
renderizarTipos();
traerPokemons(paginaActual);
