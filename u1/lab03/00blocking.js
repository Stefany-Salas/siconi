//Blocking Model
//------------------

//Cargando la libreria fs de las funciones estandar 
const fs = require('fs');

//Leer el archivo de forma sincrona 
var content = fs.readFileSync("./index.html","utf8");

//Imprimir el contenido en la consola
console.log("> " + content);

//Imprimir un mensaje de fin de proceso
console.log("> Finalizo la lectura de index.html");