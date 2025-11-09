import React, { createContext, useState } from "react";

export const ContatoContext = createContext();

export function ContatoProvider({ children }) {
  const [contatos, setContatos] = useState([
    {
      id: 1,
      nome: "João",
      telefone: "9999-1111",
      email: "joao@email.com",
      endereco: "Rua das Laranjeiras, 45",
    },
  ]);

  function adicionarContato(novoContato) {
    setContatos((prev) => [...prev, { id: Date.now(), ...novoContato }]);
  }

  return (
    <ContatoContext.Provider value={{ contatos, adicionarContato }}>
      {children}
    </ContatoContext.Provider>
  );
}
