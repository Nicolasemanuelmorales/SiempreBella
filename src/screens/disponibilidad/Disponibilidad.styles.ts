import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  boxGeneral: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: "center",
  },
  boxDispo: {
    padding: 5,
    borderColor: colors.PRINCIPAL,
    width: "100%",
    borderTopWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  agregar: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  icono: {
    marginRight: 10,
    display: "flex",
    alignSelf: "center",
  },
});
export default styles;
