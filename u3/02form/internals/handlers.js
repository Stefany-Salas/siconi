const staticServer = require('./static-server'),
    querystring = require('querystring'),
    mongo = require('mongodb').MongoClient;


var url = 'mongodb://localhost:27017/pwpc';

var getPostRoot = function (req, res) {
    if (req.method === "POST") {
        var postData = "";


        req.on("data", function (dataChunk) {
            postData += dataChunk;

            if (postData.length > 1e6) {
                console.log("> Actividad sospecha detectada por parte de un cliente");
                req.connection.destroy();
            }

            req.on("end", function () {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });

                console.log(`> Data Recived: ${postData}`.data);
                var data = querystring.parse(postData);

                res.write(`<link rel="stylesheet" href="vendor/sweetalert/dist/sweetalert.css">
                <script src="vendor/sweetalert/dist/sweetalert.min.js"></script>`)

                res.write('<ul>');
                for (var key in data) {
                    if (Object.prototype.hasOwnProperty.call(data, key)) {
                        res.write(`<li>${key.toString().toUpperCase()} : ${data[key]}</li>`);
                    }
                }

                mongo.connect(url, function (err, db) {
                    console.log("mongo");
                    if (err) {
                        res.end(`<script>sweetAlert("Error", "La conexion a la base de datos no fue exitosa", "error");</script>`)
                    } else {
                        var collection = db.collection('inventario');
                        collection.insert(querystring.parse(postData), function (err, data) {
                            if (err) {
                                throw err;
                                res.write(`<script>sweetAlert("Error", "No se guardaron los datos", "error");</script>`)
                            };
                            console.log("script");
                            res.write(`<script>sweetAlert("Excelente", "Se guardaron los datos exitosamente", "success");</script>`);
                            db.close();
                            res.end();
                        });
                    }
                });
                console.log("end");
                res.write(`</ul> <a href="index.html">index</a>`)
            });
        });
    } else {
        staticServer.server(req, res);
    }
}

var getitems = function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    mongo.connect(url, function (err, db) {
        var collection = db.collection('inventario');
        collection.find().toArray(function (err, items) {
            console.log(items);
            if (err) throw err;
            res.write('<link rel="stylesheet" href="vendor/bootstrap/dist/css/bootstrap.css">');
            for (var item in items) {
                res.write('<div class="container col-md-3"><ul>')
                for (var key in items[item]) {
                    if (Object.prototype.hasOwnProperty.call(items[item], key)) {
                        res.write(`<li>${key.toString().toUpperCase()} : ${items[item][key]}</li>`);
                    }
                }
                res.write('</ul></div>')
            }
            res.end(`</ul> <a href="index.html">index</a>`);
        });
        db.close();
    });
}

var handlers = {};

handlers["/registro"] = getitems;
handlers["/formulario"] = getPostRoot;
handlers["/show.html"] = getitems;
module.exports = handlers;