function estatisticas(...numeros){
    let maior = numeros[0];
    let menor = numeros[0];
    let soma = 0;
for (let numero of numeros) {
soma += numero;

        if (numero > maior) {
            maior = numero;
        }

        if (numero < menor) {
            menor = numero;
        }
    }

    let media = soma / numeros.length;

    return {
        maior,
        menor,
        media,
        soma
    };
}
console.log(estatisticas(10, 20, 30, 40, 50));