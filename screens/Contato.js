import { View, Text, Button } from "react-native";
import { getContatos } from "../data/contatos";
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";

export default function Contact(props) {

  // O motivo de usar useState é que, quando a lista for atualizada,
  // a tela também atualiza automaticamente.
  const [lista, setLista] = useState([]);

  //Aqui retorna para a tela principal já com os dados atualizados.
  const telaAtiva = useIsFocused();

  useEffect(
    function () {
      let dados = getContatos();
      setLista(dados);
    },
    [telaAtiva]
  ); // Quando a tela ativa muda, atualiza
    return (
      <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18 }}>Lista de Contatos</Text>
          { 
            lista.map (
              function (contato) {

                {/* O map usado aqui é para os dados dinâmicos, ou seja
                  ele serve para seja criado um "card" com os dados de todos os contatos,
                  sem precisar fazer isso manualmente */}

                  {/* Essa parte é parte de separar os dados para serem exibidos: */}
              return (
                <View key={contato.id} style={{ marginTop: 15 }}>
                  <Text>Nome: {contato.nome}</Text>
                  <Text>Telefone: {contato.telefone}</Text>
                  <Button
                    title="Ver detalhes"
                    onPress={
                      function () {
                          props.navigation.navigate("Perfil", {
                          nome: contato.nome,
                          telefone: contato.telefone,
                          email: contato.email,
                          observacao: contato.observacao,
                          endereco: contato.endereco,
                        });
                      }
                    }
                  />
                </View>
              );
            })}
      </View>
    );
}



