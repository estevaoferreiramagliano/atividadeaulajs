let contador = 0;

const numero = document.getElementById("contador");

const btnAumentar = document.getElementById("btnAumentar");
const btnDiminuir = document.getElementById("btnDiminuir");
const btnResetar = document.getElementById("btnResetar");

btnAumentar.addEventListener("click", function () {
    contador++;
    numero.textContent = contador;
});

btnDiminuir.addEventListener("click", function () {
    contador--;
    numero.textContent = contador;
});

btnResetar.addEventListener("click", function () {
    contador = 0;
    numero.textContent = contador;
});