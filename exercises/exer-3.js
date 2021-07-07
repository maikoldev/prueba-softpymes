/*
INSTRUCCIONES:

Cree una función tomando la variable "companies" como parámetro y devolviendo
un booleano que:

1. Valide que todos los nombres de las empresas y los atributos "firstName" y "lastName" de "users" están en mayúsculas.

2. Probar la operación de esta función importando la función creada en el "exer-1.js". */

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

cleanConsole(3, companies);
console.log('%c ---- RES 3 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

// Solución

// 2. Se importa la funcion y se ejecuta
import { companiesAfter } from './exer-1';
companiesAfter(companies);

// 1. Funcion para validar que la primera letra sea mayuscula
const validateFirstLetterCap = companies => {
  // Primero se valida company
  const valCharCompany = companies.every(company => {
    const charCompany = company.name.charAt(0);
    return charCompany === charCompany.toUpperCase();
  });

  // Luego se valida users
  const valCharUsername = companies.every(company => {
    return company.users.every(user => {
      const charFirstName = user.firstName.charAt(0);
      const charLastName = user.lastName.charAt(0);

      return charFirstName === charFirstName.toUpperCase() && charLastName === charLastName.toUpperCase();
    });
  });

  // Se valida que company y users sea true
  return valCharCompany && valCharUsername;
};

// Ejecuta e Imprime
const validation = validateFirstLetterCap(companies);
console.log(validation);
