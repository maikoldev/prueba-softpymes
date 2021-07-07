/*
INSTRUCCIONES:
1. Cree una función tomando la variable "companies" como parámetro y devolviendo un nuevo objeto
   cuyos atributos son la concatenación del apellido, nombre y edad de cada "user".

2. Cada atributo debe tener el valor de boolean "car".

Ver ejemplo de la variable exampleObj. */

const exampleObj = {
  johnDoe32: true,
  BernardoMinet45: false,
  alinaChef23: true
};

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

console.log(`%c ---- EXAMPLE TEST 6 --- Example object: `, 'background: #222; color: #bada55', exampleObj);
cleanConsole(6, companies);
console.log('%c ---- RES 6 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

// Solución

// Se importa la funcion y se ejecuta
import { allUsers } from './exer-4';

const getUsersFullName = users => {
  let newUsers = {};
  for (const user of users) {
    // 1. Se contatena nombre, apellido y age
    const fullName = `${user.firstName}${user.lastName}${user.age}`;

    // 2. Se agrega el valor de user.car
    newUsers[fullName] = user.car;
  }

  return newUsers;
};

// Ejecuta e Imprime
const usersFullName = getUsersFullName(allUsers);
console.log(usersFullName);
