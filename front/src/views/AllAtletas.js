import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CardAtleta from "../components/Atletas/CardAtleta";

const atletas = [
  {
    id: 1,
    nombre: "Patricio",
    nacimiento: "09/06/2001",
    nacionalidad: "Fondo Bikini",
    sexo: "Estrella",
  },
  {
    id: 2,
    nombre: "Arenita",
    nacimiento: "07/06/2001",
    nacionalidad: "Fondo Bikini",
    sexo: "Ardilla",
  },
  {
    id: 3,
    nombre: "Bob",
    nacimiento: "05/06/2001",
    nacionalidad: "Fondo Bikini",
    sexo: "Esponja",
  },
];

const AllAtletas = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Atletas</Text>
      <FlatList
        data={atletas}
        renderItem={({ item }) => <CardAtleta item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffff",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#717B94",
  },
});

export default AllAtletas;
