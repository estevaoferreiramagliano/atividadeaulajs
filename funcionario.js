export class Funcionario {
    constructor(nome, cargo, salario, departamento) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.departamento = departamento;
    }

    promover(novoCargo) {
        this.cargo = novoCargo;
    }

    aumentarSalario(valor) {
        this.salario += valor;
    }

    apresentar() {
        console.log("===== DADOS DO FUNCIONÁRIO =====");
        console.log(`Nome: ${this.nome}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Salário: R$ ${this.salario}`);
        console.log(`Departamento: ${this.departamento}`);
    }
}
const funcionario = new Funcionario(
    "Estevão Ferreira",
    "Auxiliar Administrativo",
    2500,
    "Administrativo"
);

funcionario.apresentar();

console.log("\nPromovendo funcionário...\n");

funcionario.promover("Supervisor Administrativo");

console.log("Aumentando salário...\n");

funcionario.aumentarSalario(800);

funcionario.apresentar();