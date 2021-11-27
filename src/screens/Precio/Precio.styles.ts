import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  boxService: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingTop: 10,
    marginHorizontal: 10,
    borderColor: colors.PRINCIPAL,
  },
  title: {
    color: colors.PRINCIPAL,
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 18,
    marginTop: 10,
  },
  linea: {
    height: 1.5,
    flex: 1,
    backgroundColor: colors.PRINCIPAL,
    display: "flex",
    alignSelf: "center",
    marginHorizontal: 10,
    marginTop: 2,
  },
  boxAutocomplete: {
    width: "100%",
    marginTop: 20,
  },
  botonera: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  boxBoton: {
    flex: 1,
    marginRight: 10,
  },
});
export default styles;
