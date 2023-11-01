import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CardAtleta from "../components/Atletas/CardAtleta";
import Boton from "../components/Boton";
import { useDispatch, useSelector } from "react-redux";
import { getAtletas } from "../redux/actions.JS";
/* const atletas = [
  {
    id: 1,
    nombre: "Patricio",
    nacimiento: "09/06/2001",
    nacionalidad: "Fondo Bikini",
    sexo: "Estrella",
  },
  {
    id: 2,
    nombre: "Arenita",
    nacimiento: "07/06/2001",
    nacionalidad: "Fondo Bikini",
    sexo: "Ardilla",
  },
  {
    id: 3,
    nombre: "Bob",
    nacimiento: "05/06/2001",
    nacionalidad: "Fondo Bikini",
    sexo: "Esponja",
  },
  {
    id: 4,
    nombre: "Calamardo",
    nacimiento: "04/06/2001",
    nacionalidad: "Fondo Bikini",
    sexo: "Calamar",
  },
  {
    id: 5,
    nombre: "Gary",
    nacimiento: "02/06/2001",
    nacionalidad: "Fondo Bikini",
    sexo: "Caracol",
  },
  {
    id: 6,
    nombre: "Plankton",
    nacimiento: "01/06/2001",
    nacionalidad: "Fondo Bikini",
    sexo: "Copépodo",
  },
  {
    id: 7,
    nombre: "Don Cangrejo",
    nacimiento: "05/05/2001",
    nacionalidad: "Fondo Bikini",
    sexo: "Cangrejo",
  },
]; */

const AllAtletas = () => {
  const atletas = useSelector((state) => state.AllAtletas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAtletas());
  }, [dispatch]);

  console.log(atletas);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atletas</Text>
      <FlatList
        data={atletas}
        renderItem={({ item }) => <CardAtleta item={item} />}
        keyExtractor={(item) => item.id.toString()}
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
