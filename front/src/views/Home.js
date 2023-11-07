import { View, Text } from "react-native";
import React from "react";
import Boton from "../components/Boton";
export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Boton
        onPress={() => navigation.navigate("FormCompeticion")}
        titulo="Crear competición"
        color="#2980b9"
      />
      <Boton
        onPress={() => navigation.navigate("AllAtletas")}
        titulo="Ver atletas"
        color="#27ae60"
      />
      <Boton
        onPress={() => navigation.navigate("AllCompeticiones")}
        titulo="Ver Competición"
        color="#27ae60"
      />
    </View>
  );
}
