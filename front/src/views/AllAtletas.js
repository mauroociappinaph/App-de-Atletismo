import { View, Text, StyleSheet } from "react-native";


const AllAtletas = () => {
  return (
    <View style={styles.container}>
      <Text>  
        All Atletas
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e5e5e5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  atletaItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default AllAtletas;
