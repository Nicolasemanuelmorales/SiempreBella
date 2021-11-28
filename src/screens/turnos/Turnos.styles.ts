import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  agregar: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  icono: {
    marginRight: 10,
    display: "flex",
    alignSelf: "center",
  },
  margen: {
    marginBottom: 20,
  },
  boxGeneral: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.PRINCIPAL,
    borderTopWidth: 2,
    marginHorizontal: 20,
    paddingVertical: 5,
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
  time: {
    flexDirection: "column",
    marginLeft: 20,
    alignItems: "center",
  },
  name: {
    flex: 1,
    flexDirection: "column",
  },
  diner: {
    color: "#28B463",
    fontWeight: "bold",
  },
  tiempo: {
    color: colors.PRINCIPAL,
    fontWeight: "bold",
  },
  filter: {
    flexDirection: "row",
    marginBottom: 20,
  },
  textFilter: {
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.PRINCIPAL,
  },
  boton: {
    flex: 1,
  },
  fil: {
    borderWidth: 2,
    borderColor: colors.PRINCIPAL,
    alignSelf: "center",
    padding: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
});
export default styles;
