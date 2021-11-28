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
    height: 2,
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
  agregar: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
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
  modalDelete: {
    color: colors.PRINCIPAL,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  icono: {
    marginRight: 10,
    display: "flex",
    alignSelf: "center",
  },
  nombreService: {
    maxWidth: "60%",
    display: "flex",
    alignSelf: "center",
  },
  price: {
    display: "flex",
    alignSelf: "center",
  },
});
export default styles;
