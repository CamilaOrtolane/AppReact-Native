import { View, Text, Button } from "react-native";
import { getContatos } from "../data/contatos";
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";

export default function Contact(props) {

  const [lista, setLista] = useState([]);

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



// import React, { useContext } from "react";
// import { View, Text, Button, ScrollView } from "react-native";
// import { ContatoContext } from "../context/ContatoContext";

// export default function Contato({ navigation }) {
//   const { contatos } = useContext(ContatoContext);

//   return (
//     <ScrollView style={{ padding: 20 }}>
//       <Text style={{ fontSize: 18 }}>Lista de Contatos</Text>

//       {contatos.map((c) => (
//         <View key={c.id} style={{ marginTop: 15 }}>
//           <Text>Nome: {c.nome}</Text>
//           <Text>Telefone: {c.telefone}</Text>

//           <Button
//             title="Ver detalhes"
//             onPress={() =>
//               navigation.navigate("Perfil", {
//                 nome: c.nome,
//                 telefone: c.telefone,
//                 email: c.email,
//                 endereco: c.endereco,
//               })
//             }
//           />
//         </View>
//       ))}
//     </ScrollView>
//   );
// }

