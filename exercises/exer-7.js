/*
INSTRUCCIONES:

1. Crear una función tomando como parámetro un "id" de "company" y devolver el nombre de la "company".

2: Crear una función tomando como parámetro un "id" de "company" y quitar la "company" de la lista.

4: Crear una función tomando como parámetro un "id" de "company" y un nuevo "user" cuyo el apelido es "Delgado",
   el nombre "Juan", de 35 años y dueño de un carro.
   El nuevo "user" debe agregarse a la lista de "users" de este "company" y tener un "id" generado automáticamente.
   La función también debe modificar el atributo "usersLength" de "company".

5: Crear una función tomando como parámetro un "id" de "company" y un "id" de "user".
   La función debe quitar este "user" de la lista de "users" de "company" y cambiar el atributo "usersLength" de "company".

6: Crear una función tomando como parámetro dos "id" de "company" y un "id" de "user".
   La función debe permitir que el user sea transferido de la primera "company" a la una "company".
   El atributo "usersLength" de cada "company" debe actualizarse. */

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

cleanConsole(7, companies);

console.log('%c ---- RES 7 --- part 1', 'background: #bada55; color: #222', 'Put here your method: ');

const getCompanyById = id => {
  const value = companies.find(company => company.id === id);
  console.log(value);
  return value;
};

getCompanyById(4);

console.log('%c ---- RES 7 --- part 2', 'background: #bada55; color: #222', 'Put here your method: ');

const removeCompanyById = id => {
  const index = companies.findIndex(company => company.id === id);
  if (index !== -1) {
    companies.splice(index, 1);
    console.log(companies);
  } else {
    console.log(`La compañia con id ${id} no existe`);
  }
};

removeCompanyById(5);

console.log('%c ---- RES 7 --- part 3', 'background: #bada55; color: #222', 'Put here your method: ');

console.log('No hay parte 3 🥴');

console.log('%c ---- RES 7 --- part 4', 'background: #bada55; color: #222', 'Put here your method: ');

const addNewUser = (id, newUser) => {
  const company = companies.find(company => company.id === id);

  newUser.id = company.users.length;
  company.users.push(newUser);
  company.usersLength = company.users.length;

  console.log(companies);
};

let newUser = {
  firstName: 'Juan',
  lastName: 'Delgado',
  age: 35,
  car: true,
  id: null
};

addNewUser(4, newUser);

console.log('%c ---- RES 7 --- part 5', 'background: #bada55; color: #222', 'Put here your method: ');

const removeUserFromCompany = (idCompany, idUser) => {
  const company = companies.find(company => company.id === idCompany);

  const userIndex = company.users.findIndex(user => user.id === idUser);
  if (userIndex !== -1) {
    company.users.splice(userIndex, 1);
    company.usersLength = company.users.length;
    console.log(companies);
  }
};

removeUserFromCompany(4, 10);

console.log('%c ---- RES 7 --- part 6', 'background: #bada55; color: #222', 'Put here your method: ');
