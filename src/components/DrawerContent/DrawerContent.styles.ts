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
    paddingLeft: 22,
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
    width: 30,
  },
  active: {
    fontWeight: "bold",
    fontSize: 15,
    color: colors.PRINCIPAL,
  },
  inactive: {
    fontSize: 15,
  },
});
export default styles;
