import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
/* import { useDispatch } from "react-redux"; // Importa useDispatch
import { axiosCrearAtleta } from "../redux/Slices/athletaSlice"; */

const FormAtleta = () => {
  /*  const dispatch = useDispatch(); // Obtiene la función dispatch
  const [nombre, setNombre] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [sexo, setSexo] = useState("");

  const handleSubmit = () => {
    // Crea un objeto con los datos del nuevo atleta
    const nuevoAtleta = {
      nombre,
      nacimiento,
      nacionalidad,
      sexo,
    };

    // Envia una acción para crear el nuevo atleta
    dispatch(axiosCrearAtleta(nuevoAtleta))
      .unwrap() // Trata de desempaquetar el resultado
      .then((response) => {
        // Acciones después de crear el atleta
        console.log("Atleta creado:", response);
      })
      .catch((error) => {
        // Maneja errores en caso de que la creación falle
        console.error("Error al crear el atleta:", error);
      });
  }; */

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear atleta</Text>
      {/*  <TextInput
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
      <Button title="Crear atleta" onPress={handleSubmit} color="#007AFF" /> */}
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
