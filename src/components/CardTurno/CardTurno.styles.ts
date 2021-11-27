import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  boxGeneral: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  boxFecha: {
    backgroundColor: colors.PRINCIPAL,
    minWidth: 85,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  Semana: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.BLANCO,
  },
  Numero: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.BLANCO,
  },
  hora: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.BLANCO,
  },
  boxServicio: {
    backgroundColor: colors.BLANCO,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.PRINCIPAL,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
  },
  boton: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  servicios: {
    width: "100%",
    marginBottom: 10,
    minHeight: 35,
  },
  cancel: {
    paddingBottom: 4,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: colors.PRINCIPAL,
    textDecorationLine: "underline",
  },
  pagoL: {
    fontSize: 14,
    marginLeft: 5,
  },
  pagoB: {
    fontSize: 14,
    fontWeight: "bold",
  },
  flexR: {
    flexDirection: "row",
    marginTop: 5,
  },
  flexR2: {
    flexDirection: "row",
  },
  textoService: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.PRINCIPAL,
  },
});
export default styles;
