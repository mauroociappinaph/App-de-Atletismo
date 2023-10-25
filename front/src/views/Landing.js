import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";


export default Landing = ({ navigation }) => {
  return (
    <View className="bg-blue-500 h-full flex items-center justify-center">
      <FontAwesome5 name="running" size={200} color="white" />
      <Text className="text-white text-4xl mt-4">Atletismo</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("FormAtleta")}
        className="bg-green-500 p-3 rounded-md mt-4"
      >
        <Text className="text-white">Crear atleta</Text>
        <Text className="text-white">Crear competición</Text>
      </TouchableOpacity>
    </View>
  );
};
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8E94F2",
  },
  text: { color: "#ffff", fontSize: 90 },
  button: {
    backgroundColor: "#fff3",
    padding: 10,
    borderRadius: 5,
    margin: 20,
  },
}); */

//STUB - Botón de login

  /*<TouchableOpacity style={styles.button}>
        <Text>Login</Text>
    </TouchableOpacity> */

