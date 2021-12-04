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
      Brblack: require("./assets/font/Brandon_bld.otf"),
      BrBrregular: require("./assets/font/Brandon_reg.otf"),
      Brmedium: require("./assets/font/Brandon_med.otf"),
      Brlight: require("./assets/font/Brandon_light.otf"),
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
