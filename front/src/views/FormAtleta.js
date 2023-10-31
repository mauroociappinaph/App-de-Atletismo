import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import { useNavigation } from "@react-navigation/native";

const FormAtleta = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [nombre, setNombre] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [sexo, setSexo] = useState("");

const handleSubmit = async () => {
  try {
    const nuevoAtleta = {
      nombre,
      nacimiento,
      nacionalidad,
      sexo,
    };

    const response = await dispatch(axiosCrearAtleta(nuevoAtleta)).unwrap();

    Alert.alert(
      "Éxito",
      "Atleta creado correctamente",
      [
        {
          text: "Aceptar",
          onPress: () => {
            navigation.navigate("AllAtletas");
          },
        },
      ]
    );
  } catch (error) {
    console.error("Error al crear el atleta:", error);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear atleta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Nacimiento"
        value={nacimiento}
        onChangeText={setNacimiento}
      />
      <TextInput
        style={styles.input}
        placeholder="Nacionalidad"
        value={nacionalidad}
        onChangeText={setNacionalidad}
      />
      <TextInput
        style={styles.input}
        placeholder="Sexo"
        value={sexo}
        onChangeText={setSexo}
      />
      <Button title="Crear atleta" onPress={handleSubmit} color="#007AFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e5e5e5",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
});

export default FormAtleta;
