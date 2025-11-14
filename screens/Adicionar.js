import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { adicionarContato } from "../data/contatos";

export default function Add() {

  const [nome, setNome] = useState("");

  const [telefone, setTelefone] = useState("");

  const [email, setEmail] = useState("");

  const [observacao, setObservacao] = useState("");

  const [endereco, setEndereco] = useState("");

  function salvarContato() {
    let novo = {
      nome: nome,
      telefone: telefone,
      email: email,
      observacao: observacao,
      endereco: endereco,
    };
    adicionarContato(novo);
    alert("Contato salvo com sucesso!");
    setNome("");
    setTelefone("");
    setEmail("");
    setObservacao("");
    setEndereco("");
  }
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Adicionar novo contato</Text>
      <Text>Nome:</Text>
      <TextInput
        value={nome}
        onChangeText={function (texto) {
          setNome(texto);
        }}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Text>Telefone:</Text>
      <TextInput
        value={telefone}
        onChangeText={function (texto) {
          setTelefone(texto);
        }}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Text>E-mail:</Text>
      <TextInput
        value={email}
        onChangeText={function (texto) {
          setEmail(texto);
        }}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Text>Observação:</Text>
      <TextInput
        value={observacao}
        onChangeText={function (texto) {
          setObservacao(texto);
        }}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Text>Endereço:</Text>
      <TextInput
        value={endereco}
        onChangeText={function (texto) {
          setEndereco(texto);
        }}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Button title="Salvar Contato" onPress={salvarContato} />
    </View>
  );
}
// import React, { useState, useContext } from "react";
// import { View, Text, TextInput, Button } from "react-native";
// import { ContatoContext } from "../context/ContatoContext";

// export default function Adicionar() {
//   const { adicionarContato } = useContext(ContatoContext);

//   const [nome, setNome] = useState("");
//   const [telefone, setTelefone] = useState("");
//   const [email, setEmail] = useState("");
//   const [endereco, setEndereco] = useState("");

//   function salvarContato() {
//     if (!nome || !telefone) {
//       alert("Preencha pelo menos o nome e telefone!");
//       return;
//     }

//     adicionarContato({ nome, telefone, email, endereco });
//     alert("Contato adicionado com sucesso!");
//     setNome("");
//     setTelefone("");
//     setEmail("");
//     setEndereco("");
//   }

//   return (
//     <View style={{ padding: 20 }}>
//       <Text style={{ fontSize: 18 }}>Adicionar novo contato</Text>

//       <Text>Nome:</Text>
//       <TextInput
//         value={nome}
//         onChangeText={setNome}
//         placeholder="Digite o nome"
//         style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
//       />

//       <Text>Telefone:</Text>
//       <TextInput
//         value={telefone}
//         onChangeText={setTelefone}
//         placeholder="Digite o telefone"
//         keyboardType="phone-pad"
//         style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
//       />

//       <Text>E-mail:</Text>
//       <TextInput
//         value={email}
//         onChangeText={setEmail}
//         placeholder="Digite o e-mail"
//         keyboardType="email-address"
//         style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
//       />

//       <Text>Endereço:</Text>
//       <TextInput
//         value={endereco}
//         onChangeText={setEndereco}
//         placeholder="Digite o endereço"
//         style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
//       />

//       <Button title="Salvar Contato" onPress={salvarContato} />
//     </View>
//   );
// }
