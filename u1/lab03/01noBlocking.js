//No Blocking 
//--------------
//cargar la libreria fs
const fs = require('fs');
var colors = require('colors');

//Leyendo el archivo de forma asincrona 
//objetos.accion(<paramar>,cb); "cb: CallBack""
fs.readFile('./index.html',
'utf8',
function(err,content){
    if(err){
        throw err;
    }
    //Imprimiendo el contenido del archivo leido
    console.log(content.america.bold);
//Imprimir el mensaje de fin de proceso
console.log('> La lectura ha finalizado'.random);
});