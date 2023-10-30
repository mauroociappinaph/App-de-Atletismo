import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Logo from "../../assets/Athlon.png";

export default Landing = ({ navigation }) => {
  return (
    <View className="bg-blue-500 h-full flex items-center justify-center">
      <Image source={Logo} className="h-50 w-50" />
      <TouchableOpacity
        onPress={() => navigation.navigate("FormAtleta")}
        className="bg-botones p-3 rounded-md mt-4"
      >
        <Text className="text-white">Crear atleta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("FormCompeticion")}
        className=" bg-botones p-3 rounded-md mt-4"
      >
        <Text className="text-white">Crear competición</Text>
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
        <Text className="text-white">Ver Competición</Text>
      </TouchableOpacity>
    </View>
  );
};
