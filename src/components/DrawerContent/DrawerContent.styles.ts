import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerDrawer: {
    flexDirection: "row",
    padding: 18,
  },
  headerTitulo: {
    paddingTop: 5,
    paddingLeft: 10,
  },
  activeStyle: {
    color: "blue",
  },
  defaultStyle: {
    color: "grey",
  },
  drawerStyle: {
    paddingLeft: "4%",
  },
  sanatorioTiutlo: {
    paddingLeft: "7%",
    paddingVertical: 10,
  },
  circulo: {
    width: 48,
    height: 48,
    marginTop: 0,
    marginBottom: 2,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "green",
  },
  icon: {},
  cerrarSesion: { marginLeft: 36 },
  cuadroCerrarSesion: {
    flexDirection: "row",
    marginLeft: 22,
    marginBottom: 20,
    marginTop: 10,
  },
  version: {
    paddingLeft: "10%",
    color: "grey",
    fontWeight: "500",
    marginVertical: 20,
  },
});
export default styles;
