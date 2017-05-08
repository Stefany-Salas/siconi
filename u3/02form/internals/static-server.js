//Funcionalidad de servidor estatico

//importando librerias-dependencias
var fs = require('fs'),
    mime = require('mime'),
    path = require('path'),
    config = require('../config/config');

//Exportando funcionalidad de
// servidor estatico
exports.serve = function(req, res){
    var resourcePath;
    if (req.url == "/"){
        //El cliente no especifica
        //recurso
        resourcePath = path.resolve('./static/index.html');
    }else{
        //Obteniendo la ruta
    //absoluta del recurso que se desea
    //servir
    resourcePath =
    path.resolve(config.STATIC_PATH + req.url);
    console.log(`>Recurso solicitado: ${resourcePath}`.data);

    }
    
    //Extratendo la extension de la url
    var extName = path.extname(resourcePath);

    //Crenado la variable content.type,
    //Aignando un content type depenciendo
    // de la exptencion de la url solicitada
    var contentType = mime.lookup(extName);

    //todo: verificar la existencia del recurso
    //Metodo exists--Nos permite averiguar si existe un archivo 
    fs.exists(resourcePath, function(exists){
        //si existe hay que guaerdarla
        if(exists){
            console.log('>El recurso existe'.info);
            //El recurso existe y se intentara leer
            fs.readFile(resourcePath,function(err, content){
                //Verifico si hubo un error en la lectura
                if(err){
                    console.log('>Error en lectura del archivo'.error);
                    //Hubo un error
                    res.writeHead(500,{
                        'content-Type' :'text/html'
                    });
                    res.end('<h1>500: Error interno</h1>');
                }else{
                    console.log(`>Se despacha recurso: ${resourcePath}`.info);
                    //No hubo error
                    //Se contesta el contenido al cliente
                    res.writeHead(200,{
                        'content-Type' : contentType,
                        'Server' : 'ITGAM@0.0.1'
                    });
                    res.end(content,'utf-8');
                }
            });

        }else{
            console.log('El recurso solicitado no fue encontrado...'.info);
            //El recurso no existe-- error 404
            res.writeHead(404,{
                'content-Type' : contentType,
                'Server' : 'ITGAM@0.0.1'
            });

             res.writeHead(404,{
                "Content-Type" : "text/html"
        });
           res.end(`<body background="/img/fon.jpg"` +
                `<font color="white"><br><h1><center>NOT FOUND</h1><br/>`+
                `<h2><center>Lo sentimos, el recurso solicitado no existe </center></font><br>`+
                `<center><img src="/img/Error-404.png"></center>` +
                `</body>`);
          ;
        }
            
    });
}
