import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux"; // Importa useSelector para acceder al estado de Redux
import { deleteAtleta } from "../redux/actions.JS";

const AllAtletas = () => {
  const atletas = useSelector((state) => state.atletas.atletas); // Accede al estado de Redux para obtener la lista de atletas
  const dispatch = useDispatch();

  const handleDeleteAtleta = (id) => {
    // Llama a la acción para eliminar un atleta
    dispatch(deleteAtleta(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Atletas</Text>
      <FlatList
        data={atletas}
        keyExtractor={(item) => item.id.toString()} // Asegúrate de que cada elemento tenga una propiedad "id" única
        renderItem={({ item }) => (
          <View style={styles.atletaItem}>
            <Text>{item.nombre}</Text>
            <Text>{item.nacimiento}</Text>
            <Text>{item.nacionalidad}</Text>
            <Text>{item.sexo}</Text>
            <Button
              title="Eliminar"
              onPress={() => handleDeleteAtleta(item.id)} // Llama a la función para eliminar el atleta con su ID
            />
            <Button
              title="Actualizar"
              onPress={() => {
                // Navega a la pantalla de actualización de atletas y pasa el ID del atleta como parámetro
                navigation.navigate("ActualizarAtleta", { atletaId: item.id });
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e5e5e5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  atletaItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default AllAtletas;
