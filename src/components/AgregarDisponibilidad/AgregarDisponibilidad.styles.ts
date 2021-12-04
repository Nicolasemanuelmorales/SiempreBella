import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: colors.PRINCIPAL,
    marginTop: 20,
  },
  boxAutocomplete: {
    width: "100%",
    backgroundColor: colors.BLANCO,
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
