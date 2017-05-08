var http = require('http');
// Caragar el modulo que nos va a permitir la lectura
// de un archivo del sistema
var fs = require('fs'); //Se de define en ESTADAR POSIX
// Cargando las configuraciones
var appConfig = require('./config/config');
//Variable que cuenta
contador = 0;
// Creacion y programacion del server
var server = http.createServer(function(req, res){
    if(req.url == '/favicon.ico'){
        res.writeHead(200, {'Content-Type':'image/x-icon'});
        res.end();
        return;
    }
    
    //Aumenta variable
    contador ++;
    //Escribir en consola la url de peticion
    console.log(`> URL Solicitada: ${req.url}`);
    // Escribir los encabezados
    res.writeHead(200,{
        'Content-Type':'text/html',
        'server' : 'ITGAM@1.0.0'
    });
    //Leer el archivo que serviremos al cliente;
    fs.readFile('./static/index.html','utf-8',function(err, content){
        // Verificar si hay un error
        if(err){
            //Escribe y cierra la conexion
            res.end(err);
        }else{
            //Escribe y cierra la conexion
            res.end(content.replace("contador", contador));
        }
    });
});

//Iniciar el server
server.listen(appConfig.PORT, appConfig.IP, function(){
    console.log(`<Server escuchando en http:${appConfig.IP}:${appConfig.PORT}`);
});