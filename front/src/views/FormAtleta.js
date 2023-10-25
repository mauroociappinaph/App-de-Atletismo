import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const FormAtleta = () => {
  const [nombre, setNombre] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [sexo, setSexo] = useState("");

  const handleSubmit = () => {
    // Aquí se enviaría el formulario al servidor
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
