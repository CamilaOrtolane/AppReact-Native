import React, { useContext } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { ContatoContext } from "../context/ContatoContext";

export default function Contato({ navigation }) {
  const { contatos } = useContext(ContatoContext);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Lista de Contatos</Text>

      {contatos.map((c) => (
        <View key={c.id} style={{ marginTop: 15 }}>
          <Text>Nome: {c.nome}</Text>
          <Text>Telefone: {c.telefone}</Text>

          <Button
            title="Ver detalhes"
            onPress={() =>
              navigation.navigate("Perfil", {
                nome: c.nome,
                telefone: c.telefone,
                email: c.email,
                endereco: c.endereco,
              })
            }
          />
        </View>
      ))}
    </ScrollView>
  );
}

