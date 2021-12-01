import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  boxGeneral: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
  },
  minH: {
    minHeight: 200,
  },
  img: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.PRINCIPAL,
    textAlign: "center",
    marginTop: -20,
  },
  boxGeneral2: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  mb: {
    marginBottom: 20,
  },
  labelS: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 6,
    marginRight: 6,
  },
  mb25: {
    marginBottom: 25,
  },
  boxBoton: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ingresar: {
    flex: 1,
    marginRight: 20,
  },
  elev: { elevation: 0 },
  imgG: {
    width: 30,
    height: 30,
    marginLeft: 0,
  },
});
export default styles;
