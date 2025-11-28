import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { adicionarContato } from "../data/contatos";

export default function Adicionar() {

  // Cada campo usa um useState para guardar o texto digitado.
  //É para controlar o formulário.
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [observacao, setObservacao] = useState("");

  // Função chamada ao clicar em "Salvar".
  function salvarContato() {
    let novo = {
      nome: nome,
      telefone: telefone,
      email: email,
      observacao: observacao,
    };

    // Aqui realmente salvamos os dados no "banco de dados".
    adicionarContato(novo);

    alert("Contato salvo com sucesso!");

    // Limpa os campos depois de salvar.
    setNome("");
    setTelefone("");
    setEmail("");
    setObservacao("");
  }

  // Essa é a parte visual da tela, o layout de como os dados vão aparecer
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Adicionar novo contato</Text>

      <Text>Nome:</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <Text>Telefone:</Text>
      <TextInput
        value={telefone}
        onChangeText={setTelefone}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <Text>E-mail:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <Text>Observação:</Text>
      <TextInput
        value={observacao}
        onChangeText={setObservacao}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <Button title="Salvar Contato" onPress={salvarContato} />
    </View>
  );
}

