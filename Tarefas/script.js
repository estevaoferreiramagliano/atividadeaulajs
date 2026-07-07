// Vou pegar o campo onde o usuário vai digitar a tarefa
const input = document.getElementById("tarefa");

// Vou pegar o botão de adicionar
const botao = document.getElementById("adicionar");

// Vou pegar a lista onde as tarefas serão exibidas
const lista = document.getElementById("lista");

// Quando o usuário clicar no botão, vou chamar a função que adiciona a tarefa
botao.addEventListener("click", adicionarTarefa);

// Essa função vai ser responsável por criar uma nova tarefa
function adicionarTarefa() {

    // Vou verificar se o usuário tentou adicionar uma tarefa vazia
    if (texto === "") {

        // Se estiver vazia, vou avisar o usuário
        alert("Digite uma tarefa.");

        // E vou encerrar a função para não adicionar uma tarefa sem texto
        return;
    }

    // Agora vou criar um novo item da lista
    const li = document.createElement("li");

    // Vou colocar dentro desse item o texto que o usuário digitou
    li.textContent = texto + " ";

    // Agora vou criar um botão para excluir essa tarefa
    const btnExcluir = document.createElement("button");

    // Vou definir o texto que aparecerá no botão
    btnExcluir.textContent = "Excluir";

    // Quando o botão for clicado, quero remover somente essa tarefa
    btnExcluir.addEventListener("click", function () {

        // Aqui removo apenas o <li> que pertence a esse botão
        li.remove();

    });

    // Vou colocar o botão dentro da tarefa
    li.appendChild(btnExcluir);

    // Agora vou adicionar essa tarefa na lista
    lista.appendChild(li);

    // Como a tarefa já foi adicionada, vou limpar o campo de texto
    input.value = "";

    // Por fim, vou deixar o cursor pronto para o usuário digitar outra tarefa
    input.focus();
}