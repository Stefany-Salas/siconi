var mongo = require('mongodb').MongoClient //mongodb es un driver - Mongoclient es el intermeriario entre el codigo y el driver para comunicarse con la bd
var url = 'mongodb://localhost:27017/learnyoumongo'
var firstName = process.argv[2]
var lastName = process.argv[3]
var doc = { //un documento es un objeto javascript en mongo
    firstName: firstName,
    lastName: lastName
}

mongo.connect(url, function(err, db) {
    if (err) throw err
    var collection = db.collection('docs')
    collection.insert(doc, function(err, data){ //data es la respuesta de las operaciones que pediste a mongodb, muestra lo que se hizo
        if (err) throw err
        console.log(JSON.stringify(doc))
        db.close()
    });
});