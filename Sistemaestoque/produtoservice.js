import fs from "fs";

const caminho = "./produtos.json";

// Listar todos os produtos
export function listarProdutos() {
    try {
        const dados = fs.readFileSync(caminho, "utf-8");
        return JSON.parse(dados);
    } catch (erro) {
        throw new Error("Erro ao ler o arquivo.");
    }
}

// Buscar produto pelo ID
export function buscarProduto(id) {
    const produtos = listarProdutos();

    const produto = produtos.find(produto => produto.id === id);

    if (!produto) {
        throw new Error("Produto não encontrado.");
    }

    return produto;
}

// Cadastrar produto
export function cadastrarProduto(produto) {
    const produtos = listarProdutos();

    const existe = produtos.find(p => p.id === produto.id);

    if (existe) {
        throw new Error("ID já cadastrado.");
    }

    if (produto.preco < 0) {
        throw new Error("Preço não pode ser negativo.");
    }

    if (produto.estoque < 0) {
        throw new Error("Estoque não pode ser negativo.");
    }

    produtos.push(produto);

    try {
        fs.writeFileSync(
            caminho,
            JSON.stringify(produtos, null, 2)
        );
    } catch (erro) {
        throw new Error("Erro ao salvar o arquivo.");
    }

    return produto;
}

// Alterar produto
export function alterarProduto(id, novoProduto) {
    const produtos = listarProdutos();

    const indice = produtos.findIndex(produto => produto.id === id);

    if (indice === -1) {
        throw new Error("Produto não encontrado.");
    }

    if (novoProduto.preco < 0) {
        throw new Error("Preço não pode ser negativo.");
    }

    if (novoProduto.estoque < 0) {
        throw new Error("Estoque não pode ser negativo.");
    }

    produtos[indice] = {
        ...novoProduto,
        id
    };

    try {
        fs.writeFileSync(
            caminho,
            JSON.stringify(produtos, null, 2)
        );
    } catch (erro) {
        throw new Error("Erro ao salvar o arquivo.");
    }

    return produtos[indice];
}

// Remover produto
export function removerProduto(id) {
    const produtos = listarProdutos();

    const indice = produtos.findIndex(produto => produto.id === id);

    if (indice === -1) {
        throw new Error("Produto não encontrado.");
    }

    produtos.splice(indice, 1);

    try {
        fs.writeFileSync(
            caminho,
            JSON.stringify(produtos, null, 2)
        );
    } catch (erro) {
        throw new Error("Erro ao salvar o arquivo.");
    }

    return "Produto removido com sucesso.";
}