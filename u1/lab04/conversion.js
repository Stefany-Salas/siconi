// Tipo de cambio
var mxnPerDollar = 0.04;
var mxnPerEur = 0.05;
var usdPerMxn = 20.43;
var usdPerEur = 0.94;
var euroPerDollar = 1.05;
var euroPerMxn = 21.5;


// Funcion de redondedo
function roundTwoDecimal(amount)
{
    return Math.round(amount * 100)/100;
}

//Exportando funcion mxn to usd
exports.mxnToUsd = function(usdAmount){
    return roundTwoDecimal(usdAmount * mxnPerDollar);
};

//Exportando funcion mxn to euro
exports.mxnToEur = function(euroAmount){
    return roundTwoDecimal(euroAmount * mxnPerEur);
};

//Exportando funcion usd to mxn
exports.usdToMxn = function(mxnAmount){
    return roundTwoDecimal(mxnAmount * usdPerMxn);
};

//Exportando funcion usd to euros
exports.usdToEur = function(euroAmount){
    return roundTwoDecimal(euroAmount * usdPerEur);
};

//Exportando funcion euro to usd
exports.eurToUsd = function(usdAmount){
    return roundTwoDecimal(usdAmount * euroPerDollar);
};

//Exportando funcion euro to mxn
exports.eurToMxn = function(mxnAmount){
    return roundTwoDecimal(mxnAmount * euroPerMxn);
};






