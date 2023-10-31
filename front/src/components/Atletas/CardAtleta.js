import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const CardAtleta = ({ item, onPressEdit }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>{item.nombre}</Text>
      <Text>Nacimiento: {item.nacimiento}</Text>
      <Text>Nacionalidad: {item.nacionalidad}</Text>
      <Text>Sexo: {item.sexo}</Text>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => onPressEdit(item.id)} // Pasa el ID del atleta al presionar el botón
      >
        <AntDesign name="edit" size={24} color="#9FA0FF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: "relative",
    padding: 10,
    borderWidth: 3,
    borderColor: "#BBADFF",
    borderRadius: 8,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 10,
  },
});

export default CardAtleta;
