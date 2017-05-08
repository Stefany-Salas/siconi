//Cargar el modulo http
var http = require("http");
//Cargar modulo fs
var fs = require("fs");
//Cargar modulo PATH
var path = require("path");
//cargar colors
var colors = require("colors");
// Cargando el modulo mime
var mime = require('mime');

//-- Cargando las configuraciones 
var config = require("./config/config");

// Importando los Handlers
var handlers = require('./internals/handlers');

// Importando la funcionalidad del servidor estatico
var staticServer = require('./internals/static-server');

//Establecer el tema de  colors
colors.setTheme(config.color_theme);

 //Creando el server
 var server = http.createServer(function(req,res){
     //Logeando la peticion
     console.log(`> Peticion entrante: ${req.url}`.data);
     
     // Verificando si la url corresponde
     // a un comando de mi API
     if(typeof(handlers[req.url]) == 'function'){ // typeof que tipo de dato es que se ocupa en javascript
         // Existe el manejador en mi API
         // Entonces mando a ejecutador el  
         // Manejador con los parametros que pide
         handlers[req.url](req, res);
     }else{
         // No existe el manejador en mi
         // API
         // Entonces intento servir la url
         // como un recurso estatico
         staticServer.serve(req, res);
     }
 });

 //Poniendo en ejecucion el server 
 server.listen(config.PORT,config.IP,function(){
     console.log(`> Server escuchando en http://${config.IP}:${config.PORT}`.info);
 });