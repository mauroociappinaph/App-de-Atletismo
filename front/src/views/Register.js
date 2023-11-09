import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Image, Text } from "react-native";
import Logo from "../../assets/AthlonSinFondo.png";
import Boton from "../components/Boton";
import validation from "./validations/validationRegister";
import axios from "axios";

const Register = ({ navigation }) => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    repetirPassword: "",
  });
  const [error, setError] = useState({
    nombre: "",
    email: "",
    password: "",
    repetirPassword: "",
  });

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
    setError(validation({ ...form, [key]: value }));
  };

  const [errorRegister, setErrorRegister] = useState("");
  const hasErrorsOrEmptyFields = () => {
    return (
      error.nombre ||
      error.email ||
      error.password ||
      error.repetirPassword ||
      !form.nombre ||
      !form.email ||
      !form.password ||
      !form.repetirPassword
    );
  };
  const handleSubmit = () => {
    axios
      .post("/user", form)
      .then((response) => {
        if (response.status === 200) {
          console.log("Registro exitoso");
          navigation.navigate("Home");
        } else {
          setErrorRegister("Algo salió mal");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        setErrorRegister("Error en la solicitud");
      });
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ height: 300, width: 300 }} />
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        onChangeText={(text) => handleInputChange("nombre", text)}
        value={form.nombre}
      />
      {error.nombre && <Text style={styles.error}>{error.nombre}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={(text) => handleInputChange("email", text)}
        value={form.email}
      />
      {error.email && <Text style={styles.error}>{error.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(text) => handleInputChange("password", text)}
        value={form.password}
      />
      {error.password && <Text style={styles.error}>{error.password}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        secureTextEntry
        onChangeText={(text) => handleInputChange("repetirPassword", text)}
        value={form.repetirPassword}
      />
      {error.repetirPassword && (
        <Text style={styles.error}>{error.repetirPassword}</Text>
      )}

      <Boton
        onPress={handleSubmit}
        disabled={hasErrorsOrEmptyFields()}
        titulo="Register"
        color="#8E94F2"
      />
      {errorRegister && <Text style={styles.error}>{errorRegister}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 11,
    paddingHorizontal: 10,
  },
  error: {
    color: "#E46962",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default Register;
