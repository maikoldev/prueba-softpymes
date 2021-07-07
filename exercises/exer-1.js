/*
INSTRUCCIONES:

Crear una función tomando la variable "companies" como parámetro y reemplazar:

1. Todos los valores "undefined" en "usuarios" por un string vacío.

2. El nombre de cada "company" debe tener la primer letra en mayúscula.

3. El nombre y el apellido de cada "user" debe tener la primer letra en mayúscula.

4. Las "companies" deben ordenarse por su total de "user" (orden decreciente).

5. Los "users" de cada "company" deben aparecer en orden alfabético.
*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const companies = createAll();

cleanConsole(1, companies);
console.log('%c ---- RES 1 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

// Solución

// Funcion para poner la primera letra en mayuscula.
const firstLetterCapitalized = name => {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
};

const companiesAfter = companies => {
  companies.map(company => {
    // 1. Recorro los users y se reemplazan los undefined por string vacio
    for (let user of company.users) {
      for (let [key, value] of Object.entries(user)) {
        user[key] = value == undefined ? '' : value;
      }

      // 3. Primera letra en mayuscula para nombre y apellido del usuario
      user.firstName = firstLetterCapitalized(user.firstName);
      user.lastName = firstLetterCapitalized(user.lastName);
    }

    // 2. Primera letra en mayuscula para el nombre de company
    company.name = firstLetterCapitalized(company.name);

    // 5. Orden de usuario por nombre ascendente
    company.users.sort((a, b) => {
      if (a.firstName < b.firstName) {
        return -1;
      }
      if (a.firstName > b.firstName) {
        return 1;
      }
      return 0;
    });

    return company;
  });

  // 4. Orden de companies por cantidad de usuarios.
  companies.sort((a, b) => b.usersLength - a.usersLength);
};

// Ejecuta e Imprime
companiesAfter(companies);
console.table(companies);

export { companiesAfter };
