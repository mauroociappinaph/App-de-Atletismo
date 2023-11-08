import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Text, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { createCompeticion } from "../redux/reducer"; // Asegúrate de importar tus acciones.

// Importa tus acciones relacionadas con competiciones y el estado de Redux.


// Conecta el componente a Redux para poder usar las acciones y el estado.
function FormCompeticion({ createCompeticion }) {
  const [competicionData, setCompeticionData] = useState({
    nombre: "",
    categoria: "",
    disciplinas: [],
    fechaInicio: "",
    fechaFin: "",
    lugar: "",
    descripcion: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = () => {
    // ... Lógica de manejo de formulario ...
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Crear competición</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={(text) =>
            setCompeticionData({ ...competicionData, nombre: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Categoría"
          onChangeText={(text) =>
            setCompeticionData({ ...competicionData, categoria: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Disciplinas"
          onChangeText={(text) =>
            setCompeticionData({
              ...competicionData,
              disciplinas: text.split(","),
            })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha de inicio"
          onChangeText={(text) =>
            setCompeticionData({ ...competicionData, fechaInicio: text })
          }
        />
        {/* Agrega más campos de entrada para los datos de la competición */}
        <Button title="Crear Competición" onPress={handleSubmit} />

        {successMessage && (
          <Text style={styles.successMessage}>{successMessage}</Text>
        )}
        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  successMessage: {
    color: "green",
  },
  errorMessage: {
    color: "red",
  },
});

const mapDispatchToProps = {
  createCompeticion,
};

export default connect(null, mapDispatchToProps)(FormCompeticion);
