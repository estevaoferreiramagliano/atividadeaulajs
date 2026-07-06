import {
    listarProdutos,
    buscarProduto,
    cadastrarProduto,
    alterarProduto,
    removerProduto
} from "./produtoService.js";

try {

    console.log("===== LISTA DE PNEUS =====");
    console.log(listarProdutos());

    console.log("\n===== BUSCAR PNEU (ID 3) =====");
    console.log(buscarProduto(3));

    console.log("\n===== CADASTRAR PNEU =====");

    const pneuCadastrado = cadastrarProduto({
        id: 6,
        nome: "Pneu Dunlop SP Sport FM800",
        preco: 570,
        estoque: 9
    });

    console.log(`Pneu "${pneuCadastrado.nome}" cadastrado com sucesso!`);
    console.log(pneuCadastrado);

    console.log("\n===== ALTERAR PNEU (ID 2) =====");

    const pneuAlterado = alterarProduto(2, {
        nome: "Pneu Pirelli Cinturato P7 Plus",
        preco: 620,
        estoque: 7
    });

    console.log("Pneu alterado:");
    console.log(pneuAlterado);

    console.log("\n===== REMOVER PNEU (ID 5) =====");
    console.log(removerProduto(5));

    console.log("\n===== LISTA FINAL DE PNEUS =====");
    console.log(listarProdutos());

} catch (erro) {
    console.log("Erro:", erro.message);
}