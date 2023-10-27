// index.js
import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import App from "./App";
import store from "./src/redux/store";

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("Athlon", () => ReduxApp);
