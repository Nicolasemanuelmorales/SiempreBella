import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  boxGeneral: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 4,
  },
  boxFecha: {
    backgroundColor: colors.PRINCIPAL,
    minWidth: 85,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
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
    textTransform: "uppercase",
  },
  Numero: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.BLANCO,
    textTransform: "uppercase",
  },
  hora: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.BLANCO,
    textTransform: "uppercase",
  },
  boxServicio: {
    backgroundColor: colors.BLANCO,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.PRINCIPAL,
    flex: 1,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
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
    textAlign: "center",
    fontSize: 14,
    borderWidth: 0,
    fontWeight: "bold",
    color: colors.PRINCIPAL,
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
