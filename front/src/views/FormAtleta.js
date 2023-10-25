import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import tw from "tailwind-react-native-classnames";

const FormAtleta = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [deporte, setDeporte] = useState("");

  const handleSubmit = () => {
    // Aquí se enviaría el formulario al servidor
  };

  return (
    <View style={tw`mt-10 flex`}>
    <Text style={tw`text-lg font-bold mb-5`}>Crear atleta</Text>
    <TextInput
      style={tw`w-full h-12 px-4 py-2 border border-gray-300 rounded-md mb-5`}
      placeholder="Nombre"
      value={nombre}
      onChangeText={setNombre}
    />
    <TextInput
      style={tw`w-full h-12 px-4 py-2 border border-gray-300 rounded-md mb-5`}
      placeholder="Apellido"
      value={apellido}
      onChangeText={setApellido}
    />
    <TextInput
      style={tw`w-full h-12 px-4 py-2 border border-gray-300 rounded-md mb-5`}
      placeholder="Edad"
      value={edad}
      onChangeText={setEdad}
    />
    <TextInput
      style={tw`w-full h-12 px-4 py-2 border border-gray-300 rounded-md mb-5`}
      placeholder="Deporte"
      value={deporte}
      onChangeText={setDeporte}
    />
    <Button title="Crear atleta" onPress={handleSubmit} style={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`} />
  </View>
);
};

export default FormAtleta;
