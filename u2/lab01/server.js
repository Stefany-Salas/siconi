//Cargando modulo HTTP
var http = require('http');
var colors = requiere('colors');

// Variables Configuracion
var PORT = process.env.PORT || 3000;  // PROCESS.-objeto que permite acceder al proceso, ENV.-permite variables de entorno
var IP = process.env.IP || '127.0.0.1'; // operadores de orden de corto circuito

//Creando server --- clase.accion([param],cb)
var server = http.createServer(function(req,res){

    // Obtener la URL de peticion
    var urlReq = req.url;
    console.log(`> url solicitada: ${urlReq}` .yellow);

    //Para responder una peticion se utiliza el objeto respuesta
    //Establecemos los encabezados de respuesta
    res.writeHead(200, {'Content-Type':'text/html'});

    //Escribiendo informacion en el flujo de salida del server 
    res.write('<h1 style="color:pink"> Stefany Salas<h1>');
    res.write('<p> Pandita <3 </p>');
    res.write('<p>url solicitada: ${urlReq}</p>');

    //Finalizar la conexion 
    res.end();
});

//Poner a trabajar al server 
server.listen(PORT, IP, function(){

    //Mensaje de aviso
    console.log(`> Server listening at http://${IP}:${PORT}`);
});