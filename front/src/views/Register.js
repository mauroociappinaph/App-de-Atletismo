import React, { useState } from "react";
import {
  View,
  TextInput,
  Picker,
  StyleSheet,
  Button,
  DatePickerIOS,
  Image,
  Text,
} from "react-native";
import Logo from "../../assets/AthlonSinFondo.png";
import Boton from "../components/Boton";
import validation from "./validations/validationRegister";

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
  const [error, setError] = useState({
    fullName: "",
    email: "",
    sex: "Seleccionar",
    nationality: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  });
  const [sexError, setSexError] = useState("");

  const handleSubmit = () => {
    setSexError("");
    if (!form.sex || form.sex === "Seleccionar") {
      setSexError("Por favor, selecciona un género.");
      return;
    }
  };

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
    setError(validation({ ...form, [key]: value }));
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
      {error.fullName && <Text style={styles.error}>{error.fullName}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={(text) => handleInputChange("email", text)}
        value={form.email}
      />
      {error.email && <Text style={styles.error}>{error.email}</Text>}

      <Picker
        style={styles.input}
        selectedValue={form.sex}
        onValueChange={(itemValue) => handleInputChange("sex", itemValue)}>
        <Picker.Item label="Hombre" value="Hombre" />
        <Picker.Item label="Mujer" value="Mujer" />
        <Picker.Item label="Seleccionar" value="Seleccionar" />
      </Picker>
      {sexError !== "" && <Text style={styles.error}>{sexError}</Text>}

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
      {error.password && <Text style={styles.error}>{error.password}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        secureTextEntry
        onChangeText={(text) => handleInputChange("confirmPassword", text)}
        value={form.confirmPassword}
      />
      {error.confirmPassword && (
        <Text style={styles.error}>{error.confirmPassword}</Text>
      )}

      <Boton onPress={handleSubmit} titulo="Register" color="#8E94F2" />
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
    marginBottom: 11,
    paddingHorizontal: 10,
  },
  error: {
    color: "#E46962",

    marginBottom: 10,
  },
});

export default Register;
