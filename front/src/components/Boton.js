import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Boton = ({ onPress, titulo, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
      }}>
      <Text style={{ color: "white", textAlign: "center" }}>{titulo}</Text>
    </TouchableOpacity>
  );
};

export default Boton;
