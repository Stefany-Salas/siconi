// Importar un paquete
var currency = require('./currency.js');
// Obteniendo la cantidad a convertir
var cantidadUsd = Number(process.argv[2]);
// Realizando la converison
var cantidadMxn = currency.usdToMxn(cantidadUsd);
// Imprimiendo resultados en la consola
console.log(`> 1500 usd -> $${cantidadMxn}`);