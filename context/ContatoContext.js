import { View, Text, Button } from "react-native";
import { getContatos } from "../data/contatos";
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";

export default function Contact(props) {
  // Aqui criamos a lista que será exibida na tela.
  // useState altera a tela automaticamente quando os dados mudam.
  const [lista, setLista] = useState([]);

  // useIsFocused avisa quando esta tela volta a ficar ativa.
  // Sempre que o usuário volta da tela de adicionar, a lista atualiza.
  const telaAtiva = useIsFocused();

  // useEffect roda sempre que a tela fica ativa.
  // Aqui carregamos os contatos do banco simulado.
  useEffect(
    function () {
      // pega os contatos do banco
      let dados = getContatos(); 
      setLista(dados);           
    },
    [telaAtiva] 
    // executa sempre que a tela volta a ser exibida
  );

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Lista de Contatos</Text>

      {/* 
        Aqui o map() é usado para exibir cada contato da lista.
        map transforma cada item do array em um conjunto de componentes
      */}
      {lista.map(function (contato) {
        return (
          <View key={contato.id} style={{ marginTop: 15 }}>
            <Text>Nome: {contato.nome}</Text>
            <Text>Telefone: {contato.telefone}</Text>

            {/* 
              Quando o usuário clicar no botão, enviamos os dados do contato
              para a tela de detalhes, que aqui se chama perfil, usando a navegação.
            */}
            <Button
              title="Ver detalhes"
              onPress={function () {
                props.navigation.navigate("Detalhes", {
                  nome: contato.nome,
                  telefone: contato.telefone,
                  email: contato.email,
                  observacao: contato.observacao,
                });
              }}
            />
          </View>
        );
      })}
    </View>
  );
}

