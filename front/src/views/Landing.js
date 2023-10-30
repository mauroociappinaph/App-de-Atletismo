import React from "react";
import { View, TouchableOpacity, Text ,  Image} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Logo from "../../assets/Athlon.png"


export default Landing = ({ navigation }) => {
  return (
    <View className="bg-blue-500 h-full flex items-center justify-center">
      <Text className="text-white text-4xl mt-4">Atletismo</Text>
      <FontAwesome5 name="running" size={200} color="white" />
      <Image source={Logo} className="h-20 w-20" />
      <TouchableOpacity
        onPress={() => navigation.navigate("FormAtleta")}
        className="bg-green-500 p-3 rounded-md mt-4"
      >
        <Text className="text-white">Crear atleta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("AllAtletas")}
        className="bg-green-500 p-3 rounded-md mt-4"
      >
        <Text className="text-white">Ver atletas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Competición")}
        className="bg-green-500 p-3 rounded-md mt-4"
      >
        <Text className="text-white">Competición</Text>
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

