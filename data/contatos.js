// Este arquivo funciona como um "banco de dados simulado".
// essa é uma lista fixa de contatos para começar o app.
// os novos contatos serão inseridos também, usando a função adicionarContato().

// Os dados servem como exemplo para aparecer na tela do app
let contatos = [
  {
    id: 1,
    nome: "Camila Ortolane",
    telefone: "6999280-8409",
    email: "camila@gmail.com",
    observacao: "Aluna",
  },
  {
    id: 2,
    nome: "Dome",
    telefone: "6999280-8409",
    email: "Dome@email.com",
    observacao: "Aluna",
  },
  {
    id: 3,
    nome: "Maria",
    telefone: "699280-8409",
    email: "maria@email.com",
    observacao: "Mãe",
  },
];

// Esta função apenas devolve todos os contatos existentes.
// As telas usam ela para exibir os dados.
export function getContatos() {
  return contatos;
}

// Esta função adiciona um novo contato na lista.
// Aqui também criamos um ID novo automaticamente.
export function adicionarContato(novoContato) {
  novoContato.id = contatos.length + 1;
  contatos.push(novoContato);           
}
