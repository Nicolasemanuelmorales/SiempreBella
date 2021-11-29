import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  agregar: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  margen: { marginBottom: 20 },
  botonera: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  boxBoton: {
    flex: 1,
    marginRight: 10,
  },
  modalDelete: {
    color: colors.PRINCIPAL,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default styles;
