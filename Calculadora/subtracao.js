import { validar } from "./validar.js"
export function  subtracao(a, b){
    validar(a, b)
    return a - b
}