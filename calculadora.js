function soma(a, b){
    if (typeof(a)!== "number" || typeof(b)!==  "number"){
        throw new Error("Os dois valores devem ser números.");
    }
    return a + b
}
function subtracao(a, b){
    if (typeof(a)!== "number" || typeof(b)!==  "number"){
        throw new Error("Os dois valores devem ser números.");
    }
    return a - b
}
function multiplica(a, b){
    if (typeof(a)!== "number" || typeof(b)!==  "number"){
        throw new Error("Os dois valores devem ser números.");
    }
    return a * b
}
function divide(a, b){
    if (typeof(a)!== "number" || typeof(b)!==  "number"){
        throw new Error("Os dois valores devem ser números.");
    }
    if (b===0){
        throw new Error("Não é possível dividir por zero")
    }
    
    return a / b
}
function processar(a, b, callback) {
    return callback(a, b);
}
try{
    console.log("soma:",soma(5, 6));
    console.log("subtração:",subtracao(20, 6));
    console.log("multiplicação:",multiplica(9, 6));
    console.log("divisão:",divide(126, 6));
}catch (erro) {
    console.log("Erro:", erro.message);
}