import { StyleSheet } from "react-native";

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
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    maxHeight: 150,
    elevation: 3,
    paddingTop: 5,
  },
  arrowStyle: {
    position: "absolute",
    right: 0,
    alignItems: "flex-end",
    paddingTop: 22,
    marginLeft: 9,
    paddingRight: 15,
  },
  triangle: {
    fontSize: 25,
  },
});
export default styles;
