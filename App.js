import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// O NavigationContainer é para a navegação entre as telas.
// O createBottomTabNavigator cria as abas inferiores, o menu.


import Add from "./screens/Adicionar";
import Contact from "./screens/Contato";
import Perfil from "./screens/Perfil"
import Config from "./screens/Config";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contatos" component={Contact} />
        <Tab.Screen name="Adicionar" component={Add} />
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen name="Configurações" component={Config} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Essa é tela "main" digamos assim, onde juntamos tudo e colocamos para funcionar.
// Passamos as informações e a tela busca os métodos e classes necessários que faram o trabalho.

