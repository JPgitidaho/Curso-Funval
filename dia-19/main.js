/* Desestructuracion de array */

let nombres = ["Pablo", "Thomas", "Juana", "Mahonri", "Kevin", "Alex", "ALAN"];

let [nom2, , , , , nom6, nom7 = "estudianteName"] = nombres;

/* Propagacion de arrays */

let numeros = [1, 2, 3, 4, 5];

let numeroHasta10 = [...numeros, 6, 7, 8, 9, 10];

let arrayFusion = [...numeroHasta10, ...numeros]; ///[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]

/* Desestructuracion de objetos */

let estudiante = {
  nombre: "kevin",
  edad: 28,
  pais: "Bolivia",
  estado: "La Paz",
};

let { edad: pepito, pais, nombre, estado = "estadoName" } = estudiante;

/* Propagacion de objetos */

let superEstudiante = { ...estudiante, super: true };

let heroe = {
  nombre1: "spiderman",
  edad: 22,
  superPoder: "araña",
  situacionSentimental: "indefinida",
};

let heroe2 = {
  nombre: "capitan america",
  edad: "indefinida",
  arma: "escudo",
};
let capAraña = { ...heroe, ...heroe2 };

console.log(capAraña);

/* arrays desestructuracion y propgacion ejercicios */

let a = [1, 2, 3];

let b = ["a", "b", "c"];

/* SALIDA ESPERADA:[1,a,2,b,3,c] */

/* objetos */
let profesional = {
  carrera: "medico",
  especialidad: "pediatra",
};
/* agregar las llaves de turno y lista de pacientes q sera un array a ese objeto 
    convirtiendolo en un superProfesional :D
*/

/* 
Simular un sistema de gestión de usuarios que:

Crea usuarios nuevos.

Actualiza información de un usuario.

Filtra usuarios por rol.

Usa desestructuración y propagacion en todo momento.

Tareas a resolver
1. Mostrar todos los usuarios (usa desestructuración)
Imprime en consola: "Usuario: Ana, Rol: admin" para cada usuario usando forEach y desestructuración.

2. Agregar un nuevo usuario (usa spread)
Crea una función agregarUsuario(lista, nuevo) que devuelva una nueva lista con el usuario nuevo agregado. No modifiques el array original.

3. Actualizar un usuario por ID (usa spread)
Crea una función actualizarUsuario(lista, id, nuevosDatos) que:

4.Busque al usuario por id.

Devuelva una nueva lista con los datos actualizados del usuario.

Use spread para mantener los datos anteriores no modificados.*/
const usuarios = [
  { id: 1, nombre: "Ana", rol: "admin", edad: 28 },
  { id: 2, nombre: "Luis", rol: "editor", edad: 34 },
  { id: 3, nombre: "Carla", rol: "viewer", edad: 22 },
];

export { usuarios };
