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
        onPress={() => navigation.navigate("Login")}
        titulo="Log In"
        color="#27ae60"
      />
      <Boton
        onPress={() => navigation.navigate("Register")}
        titulo="Register"
        color="#27ae60"
      />
    </View>
  );
};

export default Landing;
