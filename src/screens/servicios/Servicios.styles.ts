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
    marginTop: 20,
  },
});
export default styles;
