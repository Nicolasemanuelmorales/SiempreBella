import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000000bd",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    width: "90%",
    maxHeight: "95%",
  },
  modalText: {
    textAlign: "center",
  },
});
export default styles;
