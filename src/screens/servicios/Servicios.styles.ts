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
