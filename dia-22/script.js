/*// asincronico
function irACapilla() {
  console.log("Son las 9:00 AM, me estoy preparando para ir a la capilla...");

  setTimeout(() => {
    console.log(" Ya estoy en la capilla a las 10:00 AM.");
  }, 2000); 
}

irACapilla();
console.log(" Mientras tanto, reviso mi celular.");

// noche de hogar

function prepararNocheDeHogar() {
  console.log("Inicio de preparación para la noche de hogar...");

  setTimeout(() => {
    console.log("Asignamos la oracion");
  }, 5000); 

  setTimeout(() => {
    console.log("Preparamos refigerio para después.");
  }, 8000); 

  setTimeout(() => {
    console.log("Asignamos quién dará el pensamiento espiritual.");
  }, 1000); 

  setTimeout(() => {
    console.log("Asignamos quién dará la clase.");
  }, 2000); 

  
}
  setTimeout(() => {
    console.log("Fin de la planificación");
    
  }, 10000); 



prepararNocheDeHogar();




//asincronico con promesa

function prepararNocheDeHogar() {
  return new Promise((resolve, reject) => {
    console.log("Inicio de preparación para la noche de hogar...");

    setTimeout(() => {
      console.log("Asignamos quién dará el pensamiento espiritual.");
    }, 1000);

    setTimeout(() => {
      console.log("Asignamos quién dará la clase.");
    }, 2000);

    setTimeout(() => {
      console.log("Asignamos la oración.");
    }, 5000);

    setTimeout(() => {
      console.log("Preparamos refrigerio para después.");
    }, 8000);

    setTimeout(() => {
      console.log("Fin de la planificación");
      const todoListo = true; 

      if (todoListo) {
        resolve("¡Noche de hogar lista con éxito!");
      } else {
        reject(" Hubo un error en la planificación.");
      }
    }, 10000);
  });
}

prepararNocheDeHogar()
  .then((mensajeFinal) => {console.log(mensajeFinal);})
  .catch((error) => {console.error(error);}); 
  

/* COMO SE CREAN PROMESAS CLASE PROFE */
/* COMO SE CREAN PROMESAS */
/* 
let datos = [
  {
    nombre: "pepe",
    edad: 18,
    pais: "Argentia",
  },
  {
    nombre: "juan",
    edad: 34,
    pais: "Peru",
  },
  {
    nombre: "kevin",
    edad: 28,
    pais: "Narnia",
  },
  {
    nombre: "Thomas",
    edad: 28,
    pais: "Argentina",
  },
  {
    nombre: "Johan",
    edad: 28,
    pais: "Chile",
  },
  {
    nombre: "Juana",
    edad: 28,
    pais: "Chile",
  },
];
//ella me prometio esperarme 2 años
function traerDatos() {
  let exito = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(datos);
      } else {
        reject("error al traer los datos");
      }
    }, 3000);
  });
}
let lista = document.querySelector("#listado");
let estChile = document.querySelector("#estudiantesChile");
/* lista.innerHTML = `
<div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>
`; */
/* traerDatos()
  .then((datos) => {
    lista.innerHTML = "";
    datos.forEach((estudiante) => {
      lista.innerHTML += `<li><p>nombre: ${estudiante.nombre}</p>
      <p>edad:${estudiante.edad}</p></li>`;
    });
  })
  .catch((err) => console.log(err)); 

datos.forEach((estudiante) => {
  lista.innerHTML += `
  <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div role="status" class="max-w-sm animate-pulse">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span class="sr-only">Loading...</span>
        </div>
  </div>
`;
  if (estudiante.pais === "Chile") {
    estChile.innerHTML += `<div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div role="status" class="max-w-sm animate-pulse">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span class="sr-only">Loading...</span>
        </div>
  </div>`;
  }
});

traerDatos()
  .then((datos) => {
    lista.innerHTML = "";
    datos.forEach((estudiante) => {
      lista.innerHTML += `   
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">${estudiante.edad} - ${estudiante.pais}</p>
</a>
    `;
    });
  })
  .catch((err) => console.log(err)); 

//async y await 

async function renderizarDatos() {
  try {
    let estudiantes = await traerDatos(); //espera a q la promesa se resuleva
    lista.innerHTML = "";
    estChile.innerHTML = "";
    estudiantes.forEach((estudiante) => {
      lista.innerHTML += `   
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">${estudiante.edad} - ${estudiante.pais}</p>
</a>
    `;
      if (estudiante.pais === "Chile") {
        estChile.innerHTML += `<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">${estudiante.edad} - ${estudiante.pais}</p>
</a>`;
      }
    });
  } catch (error) {
    console.log(error);
  }
}

renderizarDatos();
*/

// tarea
const datos = [
      { nombre: "pepe", edad: 18, pais: "Argentina" },
      { nombre: "juan", edad: 34, pais: "Peru" },
      { nombre: "kevin", edad: 28, pais: "Narnia" },
      { nombre: "Thomas", edad: 28, pais: "Argentina" },
      { nombre: "Johan", edad: 28, pais: "Chile" },
      { nombre: "Juana", edad: 28, pais: "Chile" },
    ];

    const traerDatos = () =>
      new Promise((resolve) => setTimeout(() => resolve(datos), 2000));

    const crearCard = ({ nombre, edad, pais }) => `
      <div class="w-48 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-white">
        <h5 class="text-lg font-semibold">${nombre}</h5>
        <p class="text-sm text-gray-400">${edad} años - ${pais}</p>
      </div>
    `;

    const crearSkeleton = () => `
      <div class="w-48 p-4 rounded-lg bg-gray-800 animate-pulse space-y-2">
        <div class="h-4 bg-gray-700 rounded w-3/4"></div>
        <div class="h-3 bg-gray-700 rounded w-1/2"></div>
      </div>
    `;

    const renderSeccion = (contenedor, datos) => {
      contenedor.innerHTML = datos.map(crearCard).join("");
    };

    const mostrarSkeletons = (contenedor, cantidad) => {
      contenedor.innerHTML = Array.from({ length: cantidad }, crearSkeleton).join("");
    };

    async function renderizarDatos() {
      const secciones = {
        todos: document.getElementById("todos"),
        argentinos: document.getElementById("argentinos"),
        edad28: document.getElementById("edad28")
      };

      // Mostrar skeletons genéricamente
      Object.values(secciones).forEach(sec => mostrarSkeletons(sec, 3));

      try {
        const estudiantes = await traerDatos();

        const filtrados = {
          todos: estudiantes,
          argentinos: estudiantes.filter(e => e.pais.toLowerCase() === "argentina"),
          edad28: estudiantes.filter(e => e.edad === 28)
        };

        // Mostrar skeletons exactos por cantidad real de datos
        Object.entries(secciones).forEach(([key, contenedor]) => {
          mostrarSkeletons(contenedor, filtrados[key].length);
        });

        // Espera breve para efecto de carga (opcional)
        setTimeout(() => {
          Object.entries(secciones).forEach(([key, contenedor]) => {
            renderSeccion(contenedor, filtrados[key]);
          });
        }, 1000);

      } catch (error) {
        secciones.todos.innerHTML = `<p class="text-red-500">Error al cargar los datos</p>`;
      }
    }

    renderizarDatos();


