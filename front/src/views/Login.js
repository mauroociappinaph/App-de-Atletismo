import React, { useState } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import Boton from "../components/Boton";
import Logo from "../../assets/AthlonSinFondo.png";

const LoginForm = ({ navigation }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (key, text) => {
    setForm({ ...form, [key]: text });
  };

  const handleSubmit = () => {
    console.log("Correo electrónico:", form.email);
    console.log("Contraseña:", form.password);
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ height: 450, width: 450 }} />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={handleInputChange}
        value={form.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={handleInputChange}
        value={form.password}
      />
      <Boton
        onPress={() => navigation.navigate("Home")}
        titulo="Log In"
        color="#8E94F2"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    flexDirection: "column",
    margin: 0,
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LoginForm;
