// Banco.js — Banco de dados simulado usado pelo aplicativo

// Aqui eu guardo os contatos em um array.
let contatos = [
  // { nome: "Maria", telefone: "99999-9999" }
];

// Retorna todos os contatos armazenados
export function listarContatos() {
  return contatos;
}

// Adiciona um novo contato ao "banco"
export function adicionarContatoNoBanco(contato) {
  contatos.push(contato);
}
