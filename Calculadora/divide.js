import { validar } from "./validar.js"
export function divide(a, b){
 
    if (b===0){
        throw new Error("Não é possível dividir por zero")
    }
    validar(a, b)
    return a / b
}