import { View, Text, StyleSheet, TextInput } from "react-native";
import { Picker } from "react-native-date-picker";
import DatePickerIOS from "react-native-date-picker";
import React, { useState } from "react";

export default function FormAtleta() {
  const [form, setForm] = useState({
    nombre: "",
    nacimiento: new Date(),
    nacionalidad: "",
    sexo: "sexo",
  });
  const [chosenDate, setChosenDate] = useState(new Date());
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro atleta</Text>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={form.nombre}
        placeholder="Ingresa tu nombre"
      />

      <Text style={styles.label}>Nacionalidad:</Text>
      <TextInput
        style={styles.input}
        value={form.nacionalidad}
        placeholder="Nacionalidad"
      />
      <Text style={styles.label}>Sexo:</Text>

      {/*  <Text style={styles.label}>Selecciona una fecha:</Text>
      <DatePickerIOS
        style={styles.datePicker}
        date={chosenDate}
        mode="date"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#8E94F2",
    padding: 30,
  },
  titulo: {
    color: "#ffff",
    fontSize: 50,
  },
});
