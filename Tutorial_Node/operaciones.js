const matematicas={}

function sumar(n1,n2){
    return n1+n2;
}

function restar(n1,n2){
    return n1-n2;
}

function multiplicacion(n1,n2){
    return (n1*n2)*8
}

matematicas.multiplicacion=multiplicacion;
matematicas.sumar=sumar;
matematicas.restar=restar;

module.exports=matematicas;

/*exports.sumar=sumar;
exports.restar=restar;*/