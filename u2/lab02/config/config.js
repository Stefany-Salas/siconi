// Archivo de configuraciones
// Puertos e IP

var IP = process.env.IP || '127.0.0.1';
var PORT = process.env.PORT || 3000;

// Exportando las variables al
// exterior del Archivo

exports.IP = IP;
exports.PORT = PORT;