// Simulando um banco de dados simples
let contatos = [
{
    id: 1,
    nome: "João Aquino",
    telefone: "9999-1111",
    email: "joao@email.com",
    observacao: "obs 1",
    endereco: "Rua America",
},

{
    id: 2,
    nome: "Maria das Graças",
    telefone: "9999-2222",
    email: "maria@email.com",
    observacao: "obs 2",
    endereco: "Rua America",
},

{
    id: 3,
    nome: "Carlos",
    telefone: "9999-3333",
    email: "carlos@email.com",
    observacao: "obs 3",
    endereco: "Rua America",
    },
];
// Apenas retornar a lista
export function getContatos() {
    return contatos;
}
// Apenas inserir na lista
export function adicionarContato(novoContato) {
    // id sequencial simples
    novoContato.id = contatos.length + 1;
    contatos.push(novoContato);
}