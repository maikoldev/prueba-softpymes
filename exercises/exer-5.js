/*
INSTRUCCIONES:

1. Use la función creada en el ejemplo 4 para crear una nueva función tomando como parámetro
   la variable "companies" y devuelve un nuevo objeto con los siguientes atributos:

    'size' => total de "users"
    'average' => edad promedio de "users"
    'hasCar' => total de "users" propietarios de un carro
    'averageWithCar' => edad promedio de los "users" con un carro
 */
const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

cleanConsole(5, companies);
console.log('%c ---- RES 5 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

// Solución

// Se importa la funcion y se ejecuta
import { allUsers } from './exer-4';

// Se declara el nuevo objeto
let moreAtts = {};

const moreAttributes = users => {
  let ageCount = 0;
  let carCount = 0;
  let withCarCount = 0;

  // Se generar los valores
  users.map(user => {
    ageCount = user.age + ageCount;
    carCount = user.car ? 1 + carCount : carCount;
    withCarCount = user.car ? user.age + withCarCount : withCarCount;
  });

  // 1. Se asiganan los valores al nuevo objeto
  moreAtts.size = users.length;
  moreAtts.average = ageCount / users.length;
  moreAtts.hasCar = carCount;
  moreAtts.averageWithCar = withCarCount / carCount;
};

// Ejecuta e Imprime
moreAttributes(allUsers);
console.log(moreAtts);
