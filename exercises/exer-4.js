/*
INSTRUCCIONES:

Crear una función tomando como parámetro la variable "companies":

1. Agrupar todos los "users" de todas las "companies" en una sola tabla.

2. Cada "user" debe tener un nuevo atributo "company" que tenga como valor el nombre de la "company".

3. Los "users" deben ordenarse de acuerdo con su edad (de mayor a menor).
*/
const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

cleanConsole(4, companies);
console.log('%c ---- RES 4 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

// Solución

// Declaro una varible para contener todos los usuarios
let allUsers = [];

const tableUsers = companies => {
  for (const company of companies) {
    // 2. Se recorren los usarios y se agrega el atributo company
    for (const user of company.users) {
      user.company = company.name;
    }

    // 1. Se hace un push a allUsers, y a su vez un spred de los usuarios de cada company,
    // para generar el listado completo
    allUsers.push(...company.users);
  }

  // 3. Se ordenan los usuarios de mayor a menos por edad.
  allUsers.sort((a, b) => b.age - a.age);
};

// Ejecuta e Imprime
tableUsers(companies);
console.table(allUsers);

export { tableUsers, allUsers };
