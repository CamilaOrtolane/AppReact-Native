import { View, Text, Button } from "react-native";

export default function Detail(props) {

  // Aqui recebemos os dados que passaram pela tela de Contatos, e listamos eles.
  const { nome, telefone, email, observacao } = props.route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Tela de Detalhes</Text>

      <Text>Nome: {nome}</Text>
      <Text>Telefone: {telefone}</Text>
      <Text>E-mail: {email}</Text>
      <Text>Observação: {observacao}</Text>

      {/* Botão para voltar para a lista */}
      <Button
        title="Voltar para Contatos"
        onPress={function () {
          props.navigation.navigate("Contatos");
        }}
      />
    </View>
  );
}
