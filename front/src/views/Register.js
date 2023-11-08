import React, { useState } from "react";
import {
  View,
  TextInput,
  Picker,
  StyleSheet,
  Button,
  DatePickerIOS,
  Image,
} from "react-native";
import Logo from "../../assets/AthlonSinFondo.png";
import Boton from "../components/Boton";

const Register = ({ navigation }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    sex: "Seleccionar",
    nationality: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ height: 300, width: 300 }} />
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        onChangeText={(text) => handleInputChange("fullName", text)}
        value={form.fullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={handleInputChange}
        value={form.email}
      />
      <Picker
        style={styles.input}
        selectedValue={form.sex}
        onValueChange={(itemValue) => handleInputChange("sex", itemValue)}>
        <Picker.Item label="Hombre" value="Hombre" />
        <Picker.Item label="Mujer" value="Mujer" />
        <Picker.Item label="Seleccionar" value="Seleccionar" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Nacionalidad"
        onChangeText={(text) => handleInputChange("nationality", text)}
        value={form.nationality}
      />
      {/*  <DatePickerIOS
        style={{ width: 200 }}
        date={formData.birthdate}
        mode="date"
        placeholder="Fecha de Nacimiento"
        format="YYYY-MM-DD"
        minDate="1900-01-01"
        maxDate={new Date()}
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={(date) => handleInputChange("birthdate", date)}
      /> */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(text) => handleInputChange("password", text)}
        value={form.password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        secureTextEntry
        onChangeText={(text) => handleInputChange("confirmPassword", text)}
        value={form.confirmPassword}
      />
      <Boton
        onPress={() => navigation.navigate("Home")}
        titulo="Register"
        color="#8E94F2"
      />
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
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default Register;
