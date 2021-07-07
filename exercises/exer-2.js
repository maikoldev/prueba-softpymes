/* INSTRUCCIONES:

Crear una función tomando como parámetro la variable "companies" y un booleano "hasCar":

1. Para cada "company" debe conservar solo "users" cuyo valor de atributo "car" es igual al parámetro del booleano "hasCar".

2. El atributo "usersLength" deben indicar el total de "users" correspondientes al parámetro "hasCar".

*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

cleanConsole(2, companies);
console.log('%c ---- RES 2 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

// Solución

const usersWithCar = (companies, hasCar) => {
  companies.map(company => {
    // 1. Filtro de usuario por hasCar
    company.users = company.users.filter(user => user.car === hasCar);

    // 2. Moficiar el valor de usersLength
    company.usersLength = company.users.length;
    return company;
  });
};

// Ejecuta e Imprime
usersWithCar(companies, false);
console.table(companies);
