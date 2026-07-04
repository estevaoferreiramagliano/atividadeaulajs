import { soma } from "./soma.js";
import { subtrair } from "./subtracao.js";
import { multiplicar } from "./multiplica.js";
import { divide } from "./divide.js";

try {
    console.log("Soma:", soma(10, 5));
    console.log("Subtração:", subtracao(10, 5));
    console.log("Multiplicação:", multiplica(10, 5));
    console.log("Divisão:", divide(10, 5));
} catch (erro) {
    console.log(erro.message);
}