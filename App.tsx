import React from "react";
import Login from "./src/navigators/loginStackNavigator";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./src/redux/reducers/rootReducer";
export default function App() {
  return (
    <Provider store={createStore(rootReducer)}>
      <Login />
    </Provider>
  );
}
