import React from "react";
import { View, Image } from "react-native";
import Boton from "../components/Boton";
import Logo from "../../assets/AthlonSinFondo.png";

const Landing = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#ffff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Image source={Logo} style={{ height: 450, width: 450 }} />

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
};

export default Landing;
