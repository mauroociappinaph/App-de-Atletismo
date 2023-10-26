import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./src/views/Landing";
import FormAtleta from "./src/views/FormAtleta";
import store from "./src/redux/store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="FormAtleta" component={FormAtleta} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
