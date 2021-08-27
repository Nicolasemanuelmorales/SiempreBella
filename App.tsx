import React from "react";
import Login from "./src/navigators/loginStackNavigator";
import { configureFontAwesomePro } from "react-native-fontawesome-pro";
import { Provider } from "react-native-paper";

configureFontAwesomePro();

export default function App() {
  return <Login />;
}
