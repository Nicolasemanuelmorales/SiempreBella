import { StatusBar, StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  boxGeneral: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: StatusBar.currentHeight + 20,
  },
  minH: {
    marginBottom: 20,
  },
  img: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  title: {
    color: colors.PRINCIPAL,
    textAlign: "center",
    marginTop: -20,
    fontSize: 40,
    fontFamily: "RBlack",
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
    fontFamily: "RMedium",
  },
  mb25: {
    marginBottom: 25,
  },
  fFM: {
    fontFamily: "RMedium",
  },
  boxBoton: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxRecordar: {
    flexDirection: "row",
    alignItems: "center",
  },
  recor: {
    fontSize: 16,
    marginRight: 2,
    color: "#757575",
  },
  ingresar: {
    flex: 1,
    marginRight: 20,
  },
  elev: { elevation: 0 },
  imgG: {
    width: 20,
    height: 21,
  },
  olvPass: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#757575",
  },
});
export default styles;
