import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { createAtleta } from "../redux/actions.JS"; // Importa la acción para crear un atleta

const CrearAtleta = ({ navigation }) => {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [sexo, setSexo] = useState("");

  const handleCreateAtleta = () => {
    const nuevoAtleta = {
      nombre,
      nacimiento,
      nacionalidad,
      sexo,
    };

    // Llama a la acción para crear un nuevo atleta
    dispatch(createAtleta(nuevoAtleta));

    // Luego de crear el atleta, puedes navegar a la lista de atletas
    navigation.navigate("AllAtletas");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Atleta</Text>
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
      <Button
        title="Crear Atleta"
        onPress={handleCreateAtleta}
        color="#007AFF"
      />
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

export default CrearAtleta;
