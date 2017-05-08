var mongo = require('mongodb').MongoClient;
//Conectandonos
mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err,db){
    var coleccion = db.collection('parrots');
    var primerArg = parseInt(process.argv[2]);
    coleccion.find({
        "age" : {$gt : primerArg}
    }).toArray(function(err, documents){
        console.log(documents);
        db.close();
    });
});