// Importar un paquete
var currency = require('./conversion.js');

// Obteniendo datos
var valor = process.argv[2];
var desde = process.argv[3];
var to = process.argv[4];
var hacia = process.argv[5];


// Realizando conversiones
if(desde.toLowerCase() == 'mxn')
{
    if(hacia.toLowerCase() == 'usd')
    {
        var cantidadUsd = currency.mxnToUsd(valor);
        console.log('-- Currency * Pesos Mexicanos - Dolares Americanos --');
        console.log(`$${valor} MXN = $${cantidadUsd} USD`);
    }
    else if(hacia.toLowerCase() == 'euro')
    {
        var cantidadEuro = currency.mxnToEur(valor);
        console.log('-- Currency * Pesos Mexicanos - Euros --');
        console.log(`$${valor} MXN = €${cantidadEuro} EURO`);
    }
    else
    {
        console.log('Divisa incorrecto');
    }
}

if(desde.toLowerCase() == 'usd')
{
    if(hacia.toLowerCase() == 'mxn')
    {
        var cantidadMxn = currency.usdToMxn(valor);
        console.log('-- Currency * Dolares Americanos - Pesos Mexicanos --');
        console.log(`$${valor} USD = $${cantidadMxn} MXN`);
    }
    else if(hacia.toLowerCase() == 'euro')
    {
        var cantidadEuro = currency.usdToEur(valor);
        console.log('-- Currency * Dolares Americanos - Euros --');
        console.log(`$${valor} USD = €${cantidadEuro} EURO`);
    }
    else
    {
        console.log('Divisa incorrecto');
    }
}

if(desde.toLowerCase() == 'euro')
{
    if(hacia.toLowerCase() == 'usd')
    {
       var cantidadUsd = currency.eurToUsd(valor);
       console.log('-- Currency * Euros - Dolares Americanos --');
       console.log(`€${valor} EUROS = $${cantidadUsd} USD`);
    }
    else if(hacia.toLowerCase() == 'mxn')
    {
        var cantidadMxn = currency.eurToMxn(valor);
        console.log('-- Currency * Euros - Pesos Mexicanos --');
        console.log(`€${valor} EUROS = $${cantidadMxn} MXN`);
    }
    else
    {
        console.log('Divisa incorrecto');
    }
}