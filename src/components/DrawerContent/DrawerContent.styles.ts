import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

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
  },
  circulo: {
    width: 65,
    height: 65,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 15,
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