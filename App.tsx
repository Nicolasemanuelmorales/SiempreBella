import React, { useEffect, useState } from "react";
import Login from "./src/navigators/stackNavigator";
import { Provider } from "react-redux";
import { DefaultTheme, Provider as ProviderPaper } from "react-native-paper";
import { createStore } from "redux";
import rootReducer from "./src/redux/reducers/rootReducer";
import * as Font from "expo-font";
import { theme } from "./assets/theme";

export default function App() {
  const [fonLoad, setFonLoad] = useState(false);
  const loadFont = async () => {
    await Font.loadAsync({
      RBlack: require("./assets/font/Roboto-Black.ttf"),
      RBold: require("./assets/font/Roboto-Bold.ttf"),
      RMedium: require("./assets/font/Roboto-Medium.ttf"),
      RRegular: require("./assets/font/Roboto-Regular.ttf"),
      RLight: require("./assets/font/Roboto-Light.ttf"),
      RThin: require("./assets/font/Roboto-Thin.ttf"),
    }).then(() => setFonLoad(true));
  };
  const callFunctionAsync = () => {
    loadFont();
  };
  useEffect(() => callFunctionAsync(), []);
  return (
    <ProviderPaper theme={theme}>
      <Provider store={createStore(rootReducer)}>
        {fonLoad ? <Login /> : <></>}
      </Provider>
    </ProviderPaper>
  );
}
