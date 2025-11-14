import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Adicionar from "./screens/Adicionar";
import Contato from "./screens/Contato";
import Perfil from "./screens/Perfil";
import Config from "./screens/Config";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contatos" component={Contato} />
        <Tab.Screen name="Adicionar" component={Adicionar} />
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen name="Configurações" component={Config} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Adicionar from "./screens/Adicionar";
// import Contato from "./screens/Contato";
// import Perfil from "./screens/Perfil";
// import Config from "./screens/Config";
// import { ContatoProvider } from "./context/ContatoContext";

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function ContatosStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Contatos" component={Contato} />
//       <Stack.Screen
//         name="Perfil"
//         component={Perfil}
//         options={{ title: "Detalhes do Contato" }}
//       />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <ContatoProvider>
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen name="Adicionar" component={Adicionar} />
//           <Tab.Screen
//             name="Contatos"
//             component={ContatosStack}
//             options={{ headerShown: false }}
//           />
//           <Tab.Screen name="Configurações" component={Config} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </ContatoProvider>
//   );
// }


