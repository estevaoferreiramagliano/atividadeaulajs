export function validar( a, b){
    if (typeof(a)!== "number" || typeof(b)!==  "number"){
        throw new Error("Os dois valores devem ser números.");
    }
}