import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CardAtleta from "../components/Atletas/CardAtleta";
import Boton from "../components/Boton";
import { useDispatch, useSelector } from "react-redux";
import { getAtletas } from '../redux/actions'; 

const AllAtletas = ( ) => {
  const atletas = useSelector((state) => state.allAthletas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAtletas());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atletas</Text>
      <FlatList
        data={atletas}
        renderItem={({ item }) => <CardAtleta item={item} />}
        keyExtractor={(item) => Number(item.id)}
      />
      <Boton
        onPress={() => navigation.navigate("FormAtleta")}
        titulo="Crear atleta"
        color="#8E94F2"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffff",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#717B94",
  },
});

export default AllAtletas;
