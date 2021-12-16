import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import { StatusBar } from "react-native";

const styles = StyleSheet.create({
  headerDrawer: {
    flexDirection: "row",
    padding: 18,
  },
  headerTitulo: {
    paddingLeft: 18,
    justifyContent: "center",
  },
  drawerStyle: {
    paddingLeft: 20,
    backgroundColor: "white",
  },
  circulo: {
    width: 65,
    height: 65,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  prin: {
    backgroundColor: colors.PRINCIPAL,
    paddingTop: StatusBar.currentHeight,
  },
  icon: {
    width: 32,
  },
  active: {
    fontWeight: "bold",
    fontSize: 15,
    color: colors.PRINCIPAL,
  },
  inactive: {
    fontSize: 16,
    color: "black",
  },
  img: {
    width: 60,
    height: 60,
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
  },
});
export default styles;
