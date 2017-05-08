// Tipo de cambio
var mxnPerDollar = 20.43;

// Funcion de redondeo
function roundTwoDecimal(amount){
    return Math.round(amount * 100)/100;
}

// Exportando funcion usd to mxn
exports.usdToMxn = function(usdAmount){
    return roundTwoDecimal(
        usdAmount * mxnPerDollar
    );
};