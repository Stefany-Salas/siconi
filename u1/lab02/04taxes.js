var valor = process.argv[2];
var honorario = Number(process.argv[3]);

    if(valor == "honorarios" && honorario == honorario){
    var iva = honorario * 0.16;
    var subTotal = iva + honorario;
    var retIva = -(iva*2)/3;
    var isr = -(honorario*0.1);
    var total = ((subTotal + isr)+retIva);
    var pagoIva = -(iva + retIva);
    var neto = total+pagoIva;
        console.log('-------------Taxes-------------');
        console.log(`|Honorarios: $` + Math.round(honorario));
        console.log('-------------------------------');
        console.log(`|IVA: $` + Math.round(iva));
        console.log('-------------------------------');
        console.log(`|SubTotal: $` + Math.round(subTotal));
        console.log('-------------------------------');
        console.log(`|Retencion IVA: -$` + Math.round(retIva));
        console.log('-------------------------------');
        console.log(`|ISR: -$` + Math.round(isr));
        console.log('-------------------------------');
        console.log(`|Total: $` + Math.round(total));
        console.log('-------------------------------');
        console.log(`|Pago IVA: $` + Math.round(pagoIva));
        console.log('-------------------------------');
        console.log(`|Neto: $` + Math.round(neto));
        console.log('-------------------------------');
    }

    else if(valor == "neto" && honorario == honorario){
    var neto = honorario;
    var honorario2 = neto/.9;
    var iva = honorario2*0.16;
    var retIva = Math.round((iva*2)/3);
    var isr = (honorario2*0.1);
    var honorario = Math.round(honorario2+iva-isr-retIva);
    var subTotal = iva + honorario2;
    var total = ((subTotal + isr)+retIva);
    var pagoIva = Math.round(-(iva + retIva));

        console.log('-------------Taxes-------------');
        console.log(`|Honorarios: $` + Math.round(honorario));
        console.log('-------------------------------');
        console.log(`|IVA: $` + Math.round(iva));
        console.log('-------------------------------');
        console.log(`|SubTotal: $` + Math.round(subTotal));
        console.log('-------------------------------');
        console.log(`|Retencion IVA: -$` + Math.round(retIva));
        console.log('-------------------------------');
        console.log(`|ISR: -$` + Math.round(isr));
        console.log('-------------------------------');
        console.log(`|Total: $` + Math.round(total));
        console.log('-------------------------------');
        console.log(`|Pago IVA: $` + Math.round(pagoIva));
        console.log('-------------------------------');
        console.log(`|Neto: $` + Math.round(neto));
        console.log('-------------------------------');

    }
    
    else{
        console.log('Palabra invalida');
    }
    
    

    