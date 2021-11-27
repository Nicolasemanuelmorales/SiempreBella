import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    backgroundColor: "#ffffff",
  },
  menuOptionStyle: {
    padding: 10,
  },
  cajaDesplegable: {
    alignSelf: "center",
    width: "98%",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  triangle: {
    fontSize: 25,
  },
  boxGeneral: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.54)",
    borderRadius: 4,
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    alignItems: "center",
  },
  inputDisabled: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.20)",
    borderRadius: 4,
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    alignItems: "center",
  },
  placeHolder: {
    height: 30,
    position: "absolute",
    top: -10,
    left: 14,
    paddingHorizontal: 3,
  },
  label: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: 12,
  },
  timeMultiple: {
    color: colors.PRINCIPAL,
    fontWeight: "bold",
    marginRight: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default styles;
