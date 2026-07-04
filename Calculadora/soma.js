import { validar } from "./validar.js"
export function soma(a, b){
    validar(a, b)
    return a + b
}