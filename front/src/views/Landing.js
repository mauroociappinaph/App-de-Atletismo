import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import Logo from "../../assets/AthlonSinFondo.png";

export default Landing = ({ navigation }) => {
  return (
    <View className="#ffff h-full flex items-center justify-center">
      <Image source={Logo} className="h-50 w-50" />
      <TouchableOpacity
        onPress={() => navigation.navigate("FormAtleta")}
        className="bg-botones p-3 rounded-md mt-4">
        <Text className="text-white">Crear atleta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("FormCompeticion")}
        className=" bg-botones p-3 rounded-md mt-4">
        <Text className="text-white">Crear competición</Text>
      </TouchableOpacity>
    </View>
  );
};
