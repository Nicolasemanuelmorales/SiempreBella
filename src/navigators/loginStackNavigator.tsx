import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login/Login.screen";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./homeStackNavigator";
// import Modal from "react-native-modal";
// import Loading from "../components/Loading/Loading.component";
// import { IRootState } from "../redux/reducers/rootReducer";
// import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export default function LoginStackNavigator() {
  //   const loader = useSelector((state: IRootState) => state.showLoader.value);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#FFF",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ gestureEnabled: false, headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeStack" component={HomeStackNavigator} />
      </Stack.Navigator>
      {/* <Modal isVisible={loader} backdropOpacity={0.4} animationIn="flash">
        {loader ? <Loading size={50} /> : <View></View>}
      </Modal> */}
    </NavigationContainer>
  );
}
