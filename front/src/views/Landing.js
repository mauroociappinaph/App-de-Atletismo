import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
export default Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="running" size={200} color="white" />
      <Text style={styles.text}>Atletismo</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("FormAtleta")}>
        <Text>Crear atleta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

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
});
