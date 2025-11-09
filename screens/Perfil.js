import React from "react";
import { View, Text, Button } from "react-native";

export default function Perfil({ route, navigation }) {
  const { nome, telefone, email, endereco } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Detalhes do Contato</Text>
      <Text>Nome: {nome}</Text>
      <Text>Telefone: {telefone}</Text>
      <Text>E-mail: {email || "Não informado"}</Text>
      <Text>Endereço: {endereco || "Não informado"}</Text>

      <Button title="Voltar para Contatos" onPress={() => navigation.goBack()} />
    </View>
  );
}

